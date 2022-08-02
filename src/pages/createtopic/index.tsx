import { yupResolver } from "@hookform/resolvers/yup";
import { useMediaQuery } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import NewModule from "../../components/CreateTopic/NewModule";
import NewTopic from "../../components/CreateTopic/NewTopic";
import InputError from "../../components/InputError";
import Logo from "../../components/Logo";
import { StyledCircularProgress } from "../../components/UserModal/styles";
import { db } from "../../config/firebaseConfig";
import { UserContext } from "../../contexts/UserContext";
import { topicCreateValidationSchema } from "../../utils/validations";

import {
  PageWrapper,
  SideBox,
  MainBox,
  SideFooter,
  MainHeader,
  MainHeaderInfo,
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
  const { append, handleSubmitTopic, submitTopic, topicError, isLoading } =
    useContext(UserContext);

  const screenMd = useMediaQuery("(max-width:1000px)");

  return (
    <PageWrapper>
      <SideBox>
        <Logo variant="icon2" /> <SideFooter>- bardgoblin 2k22</SideFooter>
      </SideBox>
      <MainBox>
        <MainHeader>
          <MainHeaderInfo>
            <MainTitle>Set up your topic</MainTitle>
            <MainSubtitle>Create your topic however you want</MainSubtitle>
          </MainHeaderInfo>
          {screenMd && <Logo variant="icon2" />}
        </MainHeader>
        <MainContent onSubmit={handleSubmitTopic(submitTopic)}>
          <NewTopic />
          <NewModule />
          <BoxButtons>
            <AddModuleButton
              disabled={isLoading}
              type="button"
              onClick={() => append({ moduletitle: "", modulecontent: "" })}
            >
              {isLoading ? (
                <StyledCircularProgress size="25px" />
              ) : (
                <>
                  <AddIcon fontSize="small" /> Module
                </>
              )}
            </AddModuleButton>
            <SubmitButton
              disabled={isLoading}
              type="submit"
              onClick={handleSubmitTopic(submitTopic)}
            >
              {isLoading ? (
                <StyledCircularProgress size="25px" />
              ) : (
                <>
                  <DoneIcon fontSize="small" />
                  Submit
                </>
              )}
            </SubmitButton>
          </BoxButtons>
        </MainContent>
        <MainFooter></MainFooter>
      </MainBox>
    </PageWrapper>
  );
}
