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
import CommentBadge from "../../../components/CommentBadge";

export default function index() {
  return (
    <>
      <SectionWrapper>
        <SectionHeader section="quest">
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
          <TopicListTitle>You are looking for "ssssa"</TopicListTitle>
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
