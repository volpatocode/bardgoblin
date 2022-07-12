import React, { useEffect, useState } from "react";
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
  AddIcon,
  AddModuleButton,
} from "./styles";

export default function index() {
  const [modules, setModules] = useState([{ module: "" }]);

  function addModule() {
    setModules([...modules, { module: "" }]);
  }

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
          <SimpleInput type="text" placeholder="Topic title" />
          <LabelSelector />
          {modules.map((module, index) => (
            <NewModule key={index} />
          ))}
          <AddModuleButton type="button" onClick={addModule}>
            <AddIcon fontSize="small" /> Module
          </AddModuleButton>
        </MainContent>
        <MainFooter></MainFooter>
      </MainBox>
    </PageWrapper>
  );
}
