import React from "react";

import {
  TopicHiddenInfo,
  TopicHiddenInfoTitleWrapper,
  TopicHiddenInfoTitle,
  TopicHiddenInfoContent,
  DangerIcon,
} from "./styles";


type hiddenType = {
  title: string;
  content: string;
}

export default function index({title, content}: hiddenType) {
  return (
    <TopicHiddenInfo>
      <TopicHiddenInfoTitleWrapper>
        <DangerIcon fontSize="small" />
        <TopicHiddenInfoTitle>
          Hidden Info: {title}
        </TopicHiddenInfoTitle>
      </TopicHiddenInfoTitleWrapper>
      <TopicHiddenInfoContent>
        {content}
      </TopicHiddenInfoContent>
    </TopicHiddenInfo>
  );
}
