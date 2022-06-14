import React from "react";
import Navbar from "../../../components/Navbar";
import TopicListWrapper from "../../../components/TopicListWrapper";
import Footer from "../../../components/Footer";
import TopicSearchBar from "../../../components/TopicSearchBar";
import LabelSelector from "../../../components/LabelSelector";
import TopicPagination from "../../../components/TopicPagination";

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
} from "../../sectionStyles";

export default function index() {
  return (
    <>
      <SectionWrapper>
        <SectionHeader>
          <Navbar page="section" />
          <SectionContent>
            <SectionTitle>Side Quests</SectionTitle>
            <SectionDescription>
              Find the best answers to the most unexpected situations
            </SectionDescription>
          </SectionContent>
        </SectionHeader>
      </SectionWrapper>
      <SectionResults>
        <TopicQueryInfo>
          <TopicListTitle>You are looking for "cu"</TopicListTitle>
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
