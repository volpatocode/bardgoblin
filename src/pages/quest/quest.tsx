import React from "react";
import Navbar from "../../components/Navbar";
import QueryTopic from "../../components/QueryTopic";

import {
  Quest,
  QuestHeader,
  QuestContent,
  QuestTitle,
  QuestDescription,
  QuestResults,
  ResultsListTitle,
} from "./styles";

export default function index() {
  return (
    <>
      <Quest>
        <QuestHeader>
          <Navbar page="section" />
          <QuestContent>
            <QuestTitle>Side quests</QuestTitle>
            <QuestDescription>
              Find the best answers to the most unexpected situations
            </QuestDescription>
          </QuestContent>
        </QuestHeader>
      </Quest>
      <QuestResults>
        <ResultsListTitle>You are looking for buscaaqui</ResultsListTitle>
        <QueryTopic/>
      </QuestResults>
    </>
  );
}
