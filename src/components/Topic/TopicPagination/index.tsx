import React from "react";

import Pagination from "@mui/material/Pagination";

import { TopicPagination } from "./styles";

export default function index() {
  return (
    <TopicPagination>
      <Pagination color="secondary" count={10} variant="outlined" />
    </TopicPagination>
  );
}
