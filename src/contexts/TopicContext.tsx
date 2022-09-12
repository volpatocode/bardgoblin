import { createContext, ReactNode, useContext, useState } from "react";

import { db } from "../config/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import {
  Control,
  useFieldArray,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { topicCreateValidationSchema } from "../utils/validations";
import { FormValues } from "../types/user";
import { UserContext } from "./UserContext";
import { firestore } from "firebase-admin";
import { getAdditionalUserInfo, getAuth } from "firebase/auth";

type TopicContextProps = {
  children: ReactNode;
};

type TopicContextType = {
  isLoading: boolean;
  setIsLoading: (newState: boolean) => void;
  modules: Record<"id", string>[];
  append: UseFieldArrayAppend<FormValues, "topic.modules">;
  remove: UseFieldArrayRemove;
  registerTopic: UseFormRegister<FormValues>;
  handleSubmitTopic: UseFormHandleSubmit<FormValues>;
  control: Control<FormValues, any>;
  submitTopic: (data: FormValues) => void;
  formErrors: any;
  topicError: string;
};

export const TopicContext = createContext<TopicContextType>(
  {} as TopicContextType
);

export const TopicContextProvider = ({ children }: TopicContextProps) => {
  const { currentUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [topicError, setTopicError] = useState("");

  const {
    register: registerTopic,
    control,
    handleSubmit: handleSubmitTopic,
    formState: { errors: formErrors },
  } = useForm<FormValues>({
    defaultValues: {
      topic: {
        section: "",
        topictitle: "",
        labels: [],
        modules: [
          { moduletitle: "", modulecontent: "" },
          { moduletitle: "", modulecontent: "" },
        ],
      },
    },
    resolver: yupResolver(topicCreateValidationSchema),
  });

  const {
    fields: modules,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "topic.modules",
  });

  const submitTopic = async (data: FormValues) => {
    setIsLoading(true);
    await addDoc(collection(db, "topics"), {
      userUID: currentUser?.uid,
      ...data,
    })
      .then(() => console.log("Cadastrado com sucesso!"))
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
      }}
    >
      {children}
    </TopicContext.Provider>
  );
};
