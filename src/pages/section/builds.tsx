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
      <SectionHeader section="builds">
        <Navbar />
        <HeaderContent>
          <HeaderTitle>Builds</HeaderTitle>
          <HeaderDescription>
            Examples and combinations to explore your hidden creativity
          </HeaderDescription>
        </HeaderContent>
        <BorderDivider />
      </SectionHeader>
      <SectionResults />
      <Footer />
    </PageWrapper>
  );
}
