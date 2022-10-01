import { createContext, ReactNode, useContext, useState } from "react";
import { useRouter } from "next/router";
import { UserContext } from "./UserContext";
import { UtilsContext } from "./UtilsContext";

import { db } from "../config/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

import {
  Control,
  FieldError,
  useFieldArray,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { topicCreateValidationSchema } from "../utils/validations";
import { FormValues } from "../types/types";

type TopicContextProps = {
  children: ReactNode;
};

type TopicContextType = {
  isLoading: boolean;
  setIsLoading: (newState: boolean) => void;
  modules: Record<"id", string>[];
  append: UseFieldArrayAppend<FormValues, "modules">;
  remove: UseFieldArrayRemove;
  registerTopic: UseFormRegister<FormValues>;
  handleSubmitTopic: UseFormHandleSubmit<FormValues>;
  control: Control<FormValues, any>;
  submitTopic: (data: FormValues) => void;
  formErrors: {
    userUID?: FieldError;
    section?: FieldError;
    topictitle?: FieldError;
    labels?: [];
    modules?: { moduletitle?: FieldError; modulecontent?: FieldError }[];
  };
  topicError: string;
  label: any[];
  setLabel: (newState) => void;
  topicSection: string;
  setTopicSection: (newState) => void;
};

export const TopicContext = createContext<TopicContextType>(
  {} as TopicContextType
);

export const TopicContextProvider = ({ children }: TopicContextProps) => {
  const { currentUser } = useContext(UserContext);
  const { refreshPage } = useContext(UtilsContext);
  const [isLoading, setIsLoading] = useState(false);
  const [topicError, setTopicError] = useState("");
  const [label, setLabel] = useState([]);
  const [topicSection, setTopicSection] = useState("Side Quests");

  const router = useRouter();

  const sectionLinks = {
    "Side Quests": "sidequests",
    Builds: "builds",
    Characters: "characters",
  };

  const {
    register: registerTopic,
    control,
    handleSubmit: handleSubmitTopic,
    formState: { errors: formErrors },
  } = useForm<FormValues>({
    defaultValues: {
      section: "Side Quests",
      topictitle: "",
      labels: [],
      modules: [
        { moduletitle: "", modulecontent: "" },
        { moduletitle: "", modulecontent: "" },
      ],
    },
    resolver: yupResolver(topicCreateValidationSchema),
  });

  const {
    fields: modules,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "modules",
  });

  const submitTopic = async (data: FormValues) => {
    setIsLoading(true);
    await addDoc(collection(db, "topics"), {
      userUID: currentUser?.uid,
      ...data,
    })
      .then(() => {
        router.push(`/section/${sectionLinks[data?.section]}`);
      })
      .catch((error) => {
        setTopicError(error.message);
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <TopicContext.Provider
      value={{
        isLoading,
        setIsLoading,
        modules,
        append,
        remove,
        registerTopic,
        handleSubmitTopic,
        control,
        submitTopic,
        formErrors,
        topicError,
        label,
        setLabel,
        topicSection,
        setTopicSection,
      }}
    >
      {children}
    </TopicContext.Provider>
  );
};
