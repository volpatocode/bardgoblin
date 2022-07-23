import React, { useContext} from "react";
import NewModule from "../../components/CreateTopic/NewModule";
import LabelSelector from "../../components/LabelSelector";
import Logo from "../../components/Logo";
import { UserContext } from "../../contexts/UserContext";

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
  TopicTitle,
  AddIcon,
  AddModuleButton,
} from "./styles";

export default function index() {
  const { addModule } = useContext(UserContext);

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
        <MainContent>
          <TopicTitle id="topictitle" type="text" placeholder="Topic title" />
          <LabelSelector />
          <NewModule />
          <AddModuleButton type="button" onClick={addModule}>
            <AddIcon fontSize="small" /> Module
          </AddModuleButton>
        </MainContent>
        <MainFooter></MainFooter>
      </MainBox>
    </PageWrapper>
  );
}
