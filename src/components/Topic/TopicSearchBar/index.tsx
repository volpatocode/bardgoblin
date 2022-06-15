import React from "react";
import {
  TopicSearchBar,
  StyledInput,
  InputButton,
} from "./styles";

import SearchIcon from "@mui/icons-material/Search";

export type TopicSearchBarType = {};

export default function index({}: TopicSearchBarType) {
  return (
    <TopicSearchBar>
      <form>
        <StyledInput
          type="text"
          placeholder="Search for topics"
        />
      </form>
      <InputButton type="submit">
        <SearchIcon />
      </InputButton>
    </TopicSearchBar>
  );
}
