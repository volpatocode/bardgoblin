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
      <SectionHeader section="Characters">
        <Navbar />
        <HeaderContent>
          <HeaderTitle>Characters</HeaderTitle>
          <HeaderDescription>
          Are you looking for a deaf and lame goblin? This is the right place.
          </HeaderDescription>
        </HeaderContent>
        <BorderDivider />
      </SectionHeader>
      <SectionResults section="Characters" />
      <Footer />
    </PageWrapper>
  );
}
