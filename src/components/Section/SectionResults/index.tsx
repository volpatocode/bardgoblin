import React, { useContext, useEffect, useState } from "react";

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
import { SearchContext } from "../../../contexts/SearchContext";

export default function index() {
  const { setQuery, search, topicsData } = useContext(SearchContext);

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
      <TopicListWrapper data={search(topicsData)} />
      {/* <TopicPagination /> */}
    </SectionResults>
  );
}
