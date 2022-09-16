import React, { useState } from "react";

import {
  SectionResults,
  TopicQueryInfo,
  TopicListTitle,
  TopicFiltersWrapper,
  TopicSearchBar,
  StyledInput,
  InputButton,
} from "./styles";

import SearchIcon from "@mui/icons-material/Search";
import TopicListWrapper from "../../Topic/TopicListWrapper";

export default function index() {
  const [query, setQuery] = useState("");

  const keys = ["topictitle", "labels"];

  const search = (data) => {
    return data.filter((topic) =>
      keys.some((key) => topic[key].toLowerCase().includes(query))
    );
  };

  return (
    <SectionResults maxWidth="lg">
      <TopicQueryInfo>
        <TopicListTitle>You are looking for "ssssa"</TopicListTitle>
        <TopicFiltersWrapper>
          <TopicSearchBar>
            <StyledInput
              type="text"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
            />
            <InputButton type="submit">
              <SearchIcon />
            </InputButton>
          </TopicSearchBar>
        </TopicFiltersWrapper>
      </TopicQueryInfo>
      <TopicListWrapper />
      {/* <TopicPagination /> */}
    </SectionResults>
  );
}
