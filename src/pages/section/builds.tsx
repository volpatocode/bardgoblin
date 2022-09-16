import React from "react";

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
        <SectionHeader section="builds">
          <Navbar />
          <SectionHeaderContent>
            <SectionTitle>Builds</SectionTitle>
            <SectionDescription>
              Examples and combinations to explore your hidden creativity
            </SectionDescription>
          </SectionHeaderContent>
          <BorderDivider />
        </SectionHeader>
      </SectionHeaderWrapper>
      <SectionResults />
      <Footer />
    </SectionWrapper>
  );
}
