import React, { useContext } from "react";
import NewModule from "../../components/CreateTopic/NewModule";
import NewTopic from "../../components/CreateTopic/NewTopic";
import Logo from "../../components/Logo";
import { StyledCircularProgress } from "../../components/UserModal/styles";
import { TopicContext } from "../../contexts/TopicContext";
import { UserContext } from "../../contexts/UserContext";

import {
  PageWrapper,
  SideBox,
  MainBox,
  SideFooter,
  MainHeader,
  MainHeaderInfo,
  MainContent,
  MainTitle,
  MainSubtitle,
  AddIcon,
  AddModuleButton,
  SubmitButton,
  BoxButtons,
  DoneIcon,
} from "./styles";

export default function index() {
  const { append, handleSubmitTopic, submitTopic, isLoading } =
    useContext(TopicContext);

  const { screenMd } = useContext(UserContext);

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
                <StyledCircularProgress size="32px" />
              ) : (
                <>
                  <DoneIcon fontSize="small" />
                  Submit
                </>
              )}
            </SubmitButton>
          </BoxButtons>
        </MainContent>
      </MainBox>
    </PageWrapper>
  );
}
