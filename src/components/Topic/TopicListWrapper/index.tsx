import React from "react";
import QueryTopic from "../QueryTopic";
import { TopicListWrapper } from "./styles";

export type topicListType = {};

export default function index({}: topicListType) {
  return (
    <TopicListWrapper>
      <QueryTopic />
      <QueryTopic />
      <QueryTopic />
      <QueryTopic />
      <QueryTopic />
    </TopicListWrapper>
  );
}
