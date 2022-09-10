import React from "react";

import Navbar from "../../components/Navbar";
import TopicListWrapper from "../../components/Topic/TopicListWrapper";
import Footer from "../../components/Footer";
import TopicSearchBar from "../../components/Topic/TopicSearchBar";
import TopicPagination from "../../components/Topic/TopicPagination";

import {
  SectionWrapper,
  SectionHeaderWrapper,
  SectionHeader,
  SectionHeaderContent,
  SectionTitle,
  SectionDescription,
  SectionResults,
  TopicListTitle,
  TopicQueryInfo,
  TopicFiltersWrapper,
  BorderDivider,
} from "./sectionStyles";

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
    </SectionWrapper>
  );
}
