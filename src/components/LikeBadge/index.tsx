import React from "react";
import { LikeBadge, LikeCount } from "./styles";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export type badgeType = {};

export default function index({}: badgeType) {
  return (
    <LikeBadge>
      <ThumbUpIcon fontSize="small" />
      <LikeCount>221</LikeCount>
    </LikeBadge>
  );
}
