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
      {screenSm ? <ContinueBrowsing text="Home" /> : <Footer />}
    </PageWrapper>
  );
}
