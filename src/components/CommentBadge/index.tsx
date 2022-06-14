import React from "react";
import { CommentBadge, CommentCount } from "./styles";
import CommentIcon from "@mui/icons-material/Comment";

export type badgeType = {};

export default function index({}: badgeType) {
  return (
    <CommentBadge>
      <CommentIcon fontSize="small" />
      <CommentCount>221</CommentCount>
    </CommentBadge>
  );
}
