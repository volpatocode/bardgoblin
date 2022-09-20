import React from "react";

import Icon from "@mui/icons-material/Comment";
import { CommentBadge, Count} from "./styles";

export default function index() {
  return (
    <CommentBadge>
      <Icon fontSize="small" />
      <Count>221</Count>
    </CommentBadge>
  );
}
