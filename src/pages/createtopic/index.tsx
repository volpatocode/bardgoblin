import React, { useContext } from "react";

import NewModule from "../../components/CreateTopic/NewModule";
import NewTopic from "../../components/CreateTopic/NewTopic";
import Logo from "../../components/Logo";
import Unauthorized from "../../components/Unauthorized";

import { StyledCircularProgress } from "../../components/UserModal/styles";
import { TopicContext } from "../../contexts/TopicContext";
import { UserContext } from "../../contexts/UserContext";
import { UtilsContext } from "../../contexts/UtilsContext";

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
} from "../../styles/createtopicstyles";

export default function index() {
  const { isUserLoading, isAuthorized } = useContext(UserContext);
  const { modules, append, handleSubmitTopic, submitTopic, isLoading } =
    useContext(TopicContext);
  const { screenMd } = useContext(UtilsContext);

  if (isUserLoading || isAuthorized) {
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
              {modules.length < 6 && (
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
              )}
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
        </MainBox>
      </PageWrapper>
    );
  }
  return <Unauthorized />;
}
