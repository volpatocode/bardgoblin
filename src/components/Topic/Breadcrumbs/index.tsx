import React, { useContext } from "react";
import { Breadcrumbs } from "@mui/material";

import { IDButton, SectionButton, Wrapper, Breadcrumb } from "./styles";
import { UserContext } from "../../../contexts/UserContext";
import Link from "next/link";

type breadcrumbType = {
  topicType: "Builds" | "Side Quest";
  labels: any;
  topicId: string | string[];
};

export default function index({ topicType, labels, topicId }: breadcrumbType) {
  const sections = {
    "Side Quest": "/section/sidequests",
    Builds: "/section/builds",
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
