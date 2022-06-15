import React from "react";
import {
  TopicModuleWrapper,
  TopicModuleTitle,
  TopicModuleTitleWrapper,
} from "./styles";

import TopicContent from "../TopicContent";

import BadgeID from "../BadgeID";

export type hiddenInfoType = {};

export default function index({}: hiddenInfoType) {
  return (
    <TopicModuleWrapper>
      <TopicModuleTitleWrapper>
        <TopicModuleTitle>The Beginning</TopicModuleTitle>
        <BadgeID/>
      </TopicModuleTitleWrapper>
      <TopicContent/>
    </TopicModuleWrapper>
  );
}
