import React from "react";

import TopicContent from "../TopicContent";

import BadgeID from "../BadgeID";

import {
  TopicModuleWrapper,
  TopicModuleTitle,
  TopicModuleTitleWrapper,
} from "./styles";

export default function index() {
  return (
    <TopicModuleWrapper>
      <TopicModuleTitleWrapper>
        <TopicModuleTitle>The Beginning</TopicModuleTitle>
        <BadgeID />
      </TopicModuleTitleWrapper>
      <TopicContent />
    </TopicModuleWrapper>
  );
}
