import React from "react";

import Icon from "@mui/icons-material/ThumbUp";

import { LikeBadge, Count } from "./styles";

export default function index() {
  return (
    <LikeBadge>
      <Icon fontSize="small" />
      <Count>221</Count>
    </LikeBadge>
  );
}
