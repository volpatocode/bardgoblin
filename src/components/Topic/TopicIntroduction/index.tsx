import React from "react";

import TopicContent from "../TopicContent";

import {
  TopicIntroduction,
  IntroductionTitle,
  IntroductionDivider,
} from "./styles";

export default function index() {
  return (
    <TopicIntroduction>
      <IntroductionTitle>• Introduction</IntroductionTitle>
      <TopicContent />
      <IntroductionDivider />
    </TopicIntroduction>
  );
}
