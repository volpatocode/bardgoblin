import React from "react";import {Breadcrumbs } from "@mui/material";

import { IDButton, SectionButton, Wrapper, Breadcrumb} from "./styles";

type breadcrumbType = {
  topicType: "Build" | "Side Quest"
  labels: any;
  topicId: string | string[];
}

export default function index({topicType, labels, topicId}: breadcrumbType) {
  return (
    <Wrapper>
      <Breadcrumb separator=">" aria-label="breadcrumb">
        <SectionButton>{topicType}</SectionButton>
      </Breadcrumb>
      <Breadcrumb separator=">" aria-label="breadcrumb">
        {labels}
      </Breadcrumb>
      <Breadcrumb separator=">" aria-label="breadcrumb">
        <IDButton>{topicId}</IDButton>
      </Breadcrumb>
    </Wrapper>
  );
}
