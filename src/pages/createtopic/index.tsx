import React, { useContext, useEffect, useState } from "react";
import NewModule from "../../components/CreateTopic/NewModule";
import LabelSelector from "../../components/LabelSelector";
import Logo from "../../components/Logo";
import { UserContext } from "../../contexts/UserContext";

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
  TopicTitle,
  AddIcon,
  AddModuleButton,
  ButtonsBox,
  ModuleRemoveButton,
  RemoveIcon,
} from "./styles";

export default function index() {
  const { modules, addModule, removeModule } = useContext(UserContext);

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
          <ButtonsBox>
            <AddModuleButton type="button" onClick={addModule}>
              <AddIcon fontSize="small" /> Module
            </AddModuleButton>
            {modules.length > 1 && (
              <ModuleRemoveButton onClick={() => removeModule(index)}>
                <RemoveIcon fontSize="small" /> Module
              </ModuleRemoveButton>
            )}
          </ButtonsBox>
        </MainContent>
        <MainFooter></MainFooter>
      </MainBox>
    </PageWrapper>
  );
}
