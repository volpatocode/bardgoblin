import React from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import {
  PageWrapper,
  SectionHeader,
  HeaderContent,
  HeaderTitle,
  HeaderDescription,
  BorderDivider,
} from "./sectionStyles";
import SectionResults from "../../components/Section/SectionResults";

export default function index() {
  return (
    <PageWrapper>
      <SectionHeader section="quest">
        <Navbar />
        <HeaderContent>
          <HeaderTitle>Side Quests</HeaderTitle>
          <HeaderDescription>
            Find the best answers to the most unexpected situations
          </HeaderDescription>
        </HeaderContent>
        <BorderDivider />
      </SectionHeader>
      <SectionResults />
      <Footer />
    </PageWrapper>
  );
}
