import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import NewModule from "../../components/CreateTopic/NewModule";
import NewTopic from "../../components/CreateTopic/NewTopic";
import InputError from "../../components/InputError";
import Logo from "../../components/Logo";
import { db } from "../../config/firebaseConfig";
import { UserContext } from "../../contexts/UserContext";
import { topicCreateValidationSchema } from "../../utils/validations";

import {
  PageWrapper,
  SideBox,
  MainBox,
  SideFooter,
  MainHeader,
  MainContent,
  MainFooter,
  MainTitle,
  MainSubtitle,
  AddIcon,
  AddModuleButton,
  SubmitButton,
  BoxButtons,
  DoneIcon,
} from "./styles";

export default function index() {
  const { append, handleSubmitTopic, submitTopic, topicError } =
    useContext(UserContext);

  return (
    <PageWrapper>
      <SideBox>
        <Logo variant="icon2" /> <SideFooter>- bardgoblin 2k22</SideFooter>
      </SideBox>
      <MainBox>
        <MainHeader>
          <MainTitle>Set up your topic</MainTitle>
          <MainSubtitle>Create your topic however you want</MainSubtitle>
        </MainHeader>
        <MainContent onSubmit={handleSubmitTopic(submitTopic)}>
          <NewTopic />
          <NewModule />
          <BoxButtons>
            <AddModuleButton
              type="button"
              onClick={() => append({ moduletitle: "", modulecontent: "" })}
            >
              <AddIcon fontSize="small" /> Module
            </AddModuleButton>
            <SubmitButton
              type="submit"
              onClick={handleSubmitTopic(submitTopic)}
            >
              <DoneIcon fontSize="small" />
              Submit
            </SubmitButton>
          </BoxButtons>
        </MainContent>
        <MainFooter></MainFooter>
      </MainBox>
    </PageWrapper>
  );
}
