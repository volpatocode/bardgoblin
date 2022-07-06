import React from "react";

import SearchIcon from "@mui/icons-material/Search";

import { TopicSearchBar, StyledInput, InputButton } from "./styles";

export default function index() {
  return (
    <TopicSearchBar>
      <form>
        <StyledInput type="text" placeholder="Search for topics" />
      </form>
      <InputButton type="submit">
        <SearchIcon />
      </InputButton>
    </TopicSearchBar>
  );
}
