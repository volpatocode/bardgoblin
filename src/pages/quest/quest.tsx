import React from "react";
import Navbar from "../../components/Navbar";
import TopicListWrapper from "../../components/TopicListWrapper";
import Footer from "../../components/Footer";
import TopicSearchBar from "../../components/TopicSearchBar";
import LabelSelector from "../../components/LabelSelector";
import TopicPagination from "../../components/TopicPagination";

import {
  Quest,
  QuestHeader,
  QuestContent,
  QuestTitle,
  QuestDescription,
  QuestResults,
  TopicListTitle,
  TopicQueryInfo,
  TopicFiltersWrapper,
} from "./styles";

export default function index() {
  return (
    <>
      <Quest>
        <QuestHeader>
          <Navbar page="section" />
          <QuestContent>
            <QuestTitle>Side Quests</QuestTitle>
            <QuestDescription>
              Find the best answers to the most unexpected situations
            </QuestDescription>
          </QuestContent>
        </QuestHeader>
      </Quest>
      <QuestResults>
        <TopicQueryInfo>
          <TopicListTitle>You are looking for buscaaqui</TopicListTitle>
          <TopicFiltersWrapper>
            <TopicSearchBar />
          </TopicFiltersWrapper>
        </TopicQueryInfo>
        <TopicListWrapper />
        <TopicPagination/>
      </QuestResults>
      <Footer />
    </>
  );
}
