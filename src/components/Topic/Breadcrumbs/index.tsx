import React from "react";

import { Stack, Breadcrumbs } from "@mui/material";

import { IDButton, SectionButton} from "./styles";

type breadcrumbType = {
  topicType: "Build" | "Side Quest"
  labels: any;
  topicId: string | string[];
}

export default function index({topicType, labels, topicId}: breadcrumbType) {
  return (
    <Stack direction="row" spacing={2}>
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        <SectionButton>{topicType}</SectionButton>
      </Breadcrumbs>
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        {labels}
      </Breadcrumbs>
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        <IDButton>{topicId}</IDButton>
      </Breadcrumbs>
    </Stack>
  );
}
