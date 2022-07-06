import React from "react";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { Stack, Breadcrumbs } from "@mui/material";

import { Label } from "../QueryTopic/styles";

import { IDButton, SectionButton } from "./styles";

export default function index() {
  const arrowRight = <ChevronRightIcon fontSize="small" />;

  return (
    <Stack direction="row" spacing={2}>
      <Breadcrumbs separator={arrowRight} aria-label="breadcrumb">
        <SectionButton>Side Quest</SectionButton>
      </Breadcrumbs>
      <Breadcrumbs separator={arrowRight} aria-label="breadcrumb">
        <Label>Cave</Label>
      </Breadcrumbs>
      <Breadcrumbs separator={arrowRight} aria-label="breadcrumb">
        <Label>Forest</Label>
      </Breadcrumbs>
      <Breadcrumbs separator={arrowRight} aria-label="breadcrumb">
        <Label>Desert</Label>
      </Breadcrumbs>
      <Breadcrumbs separator={arrowRight} aria-label="breadcrumb">
        <IDButton>B445725</IDButton>
      </Breadcrumbs>
    </Stack>
  );
}
