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
} from "../../styles/sectionstyles";

export default function index() {
  return (
    <PageWrapper>
      <SectionHeader section="Builds">
        <Navbar />
        <HeaderContent>
          <HeaderTitle>Builds</HeaderTitle>
          <HeaderDescription>
            Examples and combinations to explore your hidden creativity
          </HeaderDescription>
        </HeaderContent>
        <BorderDivider />
      </SectionHeader>
      <SectionResults section="Builds" />
      <Footer />
    </PageWrapper>
  );
}
