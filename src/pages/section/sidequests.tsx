import React, { useContext, useState } from "react";
import { UserModalContextProvider } from "../../contexts/UserModalContext";
import { UserContext, UserContextProvider } from "../../contexts/UserContext";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


import {
  SectionWrapper,
  SectionHeaderWrapper,
  SectionHeader,
  SectionHeaderContent,
  SectionTitle,
  SectionDescription,
  BorderDivider,
} from "./sectionStyles";
import SectionResults from "../../components/Section/SectionResults";

export default function index() {

  return (
    <SectionWrapper>
      <SectionHeaderWrapper>
        <SectionHeader section="quest">
          <Navbar />
          <SectionHeaderContent>
            <SectionTitle>Side Quests</SectionTitle>
            <SectionDescription>
              Find the best answers to the most unexpected situations
            </SectionDescription>
          </SectionHeaderContent>
          <BorderDivider />
        </SectionHeader>
      </SectionHeaderWrapper>
      <SectionResults/>
      <Footer />
    </SectionWrapper>
  );
}
