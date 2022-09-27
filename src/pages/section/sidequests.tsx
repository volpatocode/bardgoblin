import React from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SectionResults from "../../components/Section/SectionResults";

import {
  PageWrapper,
  SectionHeader,
  HeaderContent,
  HeaderTitle,
  HeaderDescription,
  BorderDivider,
} from "./sectionStyles";

export default function index() {
  return (
    <PageWrapper>
      <SectionHeader section="Side Quests">
        <Navbar />
        <HeaderContent>
          <HeaderTitle>Side Quests</HeaderTitle>
          <HeaderDescription>
            Find the best answers to the most unexpected situations
          </HeaderDescription>
        </HeaderContent>
        <BorderDivider />
      </SectionHeader>
      <SectionResults section="Side Quests" />
      <Footer />
    </PageWrapper>
  );
}
