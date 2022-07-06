import React from "react";

import QueryTopic from "../QueryTopic";

import { TopicListWrapper } from "./styles";

export default function index() {
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
