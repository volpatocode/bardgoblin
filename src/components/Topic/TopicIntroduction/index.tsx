import React from "react";
import {
  TopicIntroduction,
  IntroductionTitle,
  IntroductionDivider,
} from "./styles";

import TopicContent from "../TopicContent";

export type introductionType = {};

export default function index({}: introductionType) {
  return (
    <TopicIntroduction>
      <IntroductionTitle>Introduction</IntroductionTitle>
      <TopicContent/>
      <IntroductionDivider />
    </TopicIntroduction>
  );
}
