import React from "react";

import { TopicPagination } from "./styles";

import Pagination from "@mui/material/Pagination";

export type paginationType = {};

export default function index({}: paginationType) {
  return (
    <TopicPagination>
        <Pagination count={10} variant="outlined" />
    </TopicPagination>
  );
}
