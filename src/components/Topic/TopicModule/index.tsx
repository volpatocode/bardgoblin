import React from "react";

import {
  TopicModuleWrapper,
  TopicModuleTitle,
  TopicContent
} from "./styles";

type moduleType = {
  title: string;
  content: string;
}

export default function index({title, content}: moduleType) {
  return (
    <TopicModuleWrapper>
      {/* <TopicModuleTitleWrapper> */}
        <TopicModuleTitle>{title}</TopicModuleTitle>
        {/* <BadgeID /> */}
      {/* </TopicModuleTitleWrapper> */}
      <TopicContent>{content}</TopicContent>
    </TopicModuleWrapper>
  );
}
