import React from "react";
import Link from "next/link";

import { IDButton, SectionButton, Wrapper, Breadcrumb } from "./styles";

type breadcrumbType = {
  topicType: string;
  labels: any;
  topicId: string | string[];
};

export default function index({ topicType, labels, topicId }: breadcrumbType) {
  const sections = {
    "Side Quests": "/section/sidequests",
    "Builds": "/section/builds",
    "Characters": "/section/characters",
  };

  return (
    <Wrapper>
      <Breadcrumb>
        <Link href={`${sections[topicType]}`}>
          <SectionButton>{topicType}</SectionButton>
        </Link>
      </Breadcrumb>
      <Breadcrumb>{labels}</Breadcrumb>
      <Breadcrumb>
        <IDButton>{topicId}</IDButton>
      </Breadcrumb>
    </Wrapper>
  );
}
