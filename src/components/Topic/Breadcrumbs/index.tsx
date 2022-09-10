import React from "react";

import { IDButton, SectionButton, Wrapper, Breadcrumb } from "./styles";
import Link from "next/link";

type breadcrumbType = {
  topicType: "Builds" | "Side Quests" | "Characters";
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
        <Link href={sections[topicType]}>
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
