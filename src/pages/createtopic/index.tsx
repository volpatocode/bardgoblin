import React from "react";
import AddModuleButton from "../../components/CreateTopic/AddModuleButton";
import NewModule from "../../components/CreateTopic/NewModule";
import LabelSelector from "../../components/LabelSelector";
import Logo from "../../components/Logo";

import {
  PageWrapper,
  SideBox,
  MainBox,
  SideContent,
  SideFooter,
  MainHeader,
  MainContent,
  MainFooter,
  MainTitle,
  MainSubtitle,
  SimpleInput,
} from "./styles";

export default function index() {
  return (
    <PageWrapper>
      <SideBox>
        <Logo variant="icon2" />
        <SideContent>walk your way... and deal with it</SideContent>
        <SideFooter>- bardgoblin 2k22</SideFooter>
      </SideBox>
      <MainBox>
        <MainHeader>
          <MainTitle>Set up your topic</MainTitle>
          <MainSubtitle>Create your topic however you want</MainSubtitle>
        </MainHeader>
        <MainContent>
          <SimpleInput type="text" placeholder="Topic title" />
          <LabelSelector />
          <NewModule />
          <NewModule />
          <AddModuleButton />
        </MainContent>
        <MainFooter></MainFooter>
      </MainBox>
    </PageWrapper>
  );
}
