import React, { useContext } from "react";
import { UtilsContext } from "../../contexts/UtilsContext";

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
import ContinueBrowsing from "../../components/Topic/ContinueBrowsing";

export default function index() {
  const { screenSm } = useContext(UtilsContext);

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
      {screenSm ? <ContinueBrowsing text="Home" /> : <Footer />}
    </PageWrapper>
  );
}
