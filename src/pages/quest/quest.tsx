import React from "react";
import Navbar from "../../components/Navbar";

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
          <Navbar page="results" />
          <QuestContent>
            <QuestTitle>Side quests</QuestTitle>
            <QuestDescription>
              Find the best answers to the most unexpected situations
            </QuestDescription>
          </QuestContent>
        </QuestHeader>
      </Quest>
      <QuestResults>
        <ResultsListTitle>Looking for buscaaqui</ResultsListTitle>
      </QuestResults>
    </>
  );
}
