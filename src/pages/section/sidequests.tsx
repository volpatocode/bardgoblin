import React from "react";
import { UserModalContextProvider } from "../../contexts/UserModalContext";
import { UserContextProvider } from "../../contexts/UserContext";

import Navbar from "../../components/Navbar";
import TopicListWrapper from "../../components/Topic/TopicListWrapper";
import Footer from "../../components/Footer";
import TopicSearchBar from "../../components/Topic/TopicSearchBar";
import LabelSelector from "../../components/LabelSelector";
import TopicPagination from "../../components/Topic/TopicPagination";

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
} from "./sectionStyles";

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
              <BorderDivider />
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
