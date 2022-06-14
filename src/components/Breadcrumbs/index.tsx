import React from "react";
import {IDButton, SectionButton } from "./styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Label } from "../QueryTopic/styles";
import Stack from "@mui/material/Stack";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export type breadcrumbsType = {};

export default function index({}: breadcrumbsType) {
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
