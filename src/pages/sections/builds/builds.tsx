import React from "react";
import Navbar from "../../../components/Navbar";
import TopicListWrapper from "../../../components/Topic/TopicListWrapper";
import Footer from "../../../components/Footer";
import TopicSearchBar from "../../../components/Topic/TopicSearchBar";
import LabelSelector from "../../../components/LabelSelector";
import TopicPagination from "../../../components/Topic/TopicPagination";

import {
  SectionWrapper,
  SectionHeader,
  SectionContent,
  SectionTitle,
  SectionDescription,
  SectionResults,
  TopicListTitle,
  TopicQueryInfo,
  TopicFiltersWrapper,
  BorderDivider,
} from "../../sectionStyles";

export default function index() {
  return (
    <>
      <SectionWrapper>
        <SectionHeader section="builds">
          <Navbar page="section" />
          <SectionContent>
            <SectionTitle>Builds</SectionTitle>
            <SectionDescription>
            Examples and combinations to explore your hidden creativity
            </SectionDescription>
          </SectionContent>
          <BorderDivider/>
        </SectionHeader>
      </SectionWrapper>
      <SectionResults>
        <TopicQueryInfo>
          <TopicListTitle>You are looking for "aaa"</TopicListTitle>
          <TopicFiltersWrapper>
            <TopicSearchBar />
          </TopicFiltersWrapper>
        </TopicQueryInfo>
        <TopicListWrapper />
        <TopicPagination />
      </SectionResults>
      <Footer />
    </>
  );
}
