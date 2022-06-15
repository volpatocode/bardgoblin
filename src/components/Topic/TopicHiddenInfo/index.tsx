import React from "react";
import {
  TopicHiddenInfoWrapper,
  TopicHiddenInfoTitleWrapper,
  TopicHiddenInfoTitle,
  TopicHiddenInfoContent,
  DangerIcon,
} from "./styles";


export type introductionType = {};

export default function index({}: introductionType) {
  return (
    <TopicHiddenInfoWrapper>
      <TopicHiddenInfoTitleWrapper>
        <DangerIcon fontSize="small"/>
        <TopicHiddenInfoTitle>
          Hidden Info: When the group find the elf
        </TopicHiddenInfoTitle>
      </TopicHiddenInfoTitleWrapper>
      <TopicHiddenInfoContent>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam.
      </TopicHiddenInfoContent>
    </TopicHiddenInfoWrapper>
  );
}
