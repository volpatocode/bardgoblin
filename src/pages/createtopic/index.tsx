import React from "react";
import Logo from "../../components/Logo";

import { PageWrapper, SideBox, MainBox, SideContent, SideFooter } from "./styles";

export default function index() {
  return (
    <PageWrapper>
      <SideBox>
        <Logo variant="icon2" />
        <SideContent>walk your way... and deal with it</SideContent>
        <SideFooter>
        - bardgoblin 2k22
        </SideFooter>
      </SideBox>
      <MainBox></MainBox>
    </PageWrapper>
  );
}
