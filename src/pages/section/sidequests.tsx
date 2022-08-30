import React from "react";
import { UserModalContextProvider } from "../../contexts/UserModalContext";
import { UserContextProvider } from "../../contexts/UserContext";

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
        <SectionHeader section="quest">
          <Navbar page="section" />
          <SectionHeaderContent>
            <SectionTitle>Side Quests</SectionTitle>
            <SectionDescription>
              Find the best answers to the most unexpected situations
            </SectionDescription>
          </SectionHeaderContent>
          <BorderDivider />
        </SectionHeader>
      </SectionHeaderWrapper>
      <SectionResults>
        <TopicQueryInfo>
          <TopicListTitle>You are looking for "ssssa"</TopicListTitle>
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
