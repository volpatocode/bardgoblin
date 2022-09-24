import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../../contexts/SearchContext";

import SearchIcon from "@mui/icons-material/Search";
import TopicListWrapper from "../../Topic/TopicListWrapper";

import {
  SectionResults,
  TopicQueryInfo,
  TopicFiltersWrapper,
  TopicSearchBar,
  StyledInput,
  InputButton,
} from "./styles";


export default function index() {
  const { setQuery, search, topicsData} = useContext(SearchContext);

  return (
    <SectionResults maxWidth="lg">
      <TopicQueryInfo>
        <TopicFiltersWrapper>
          <TopicSearchBar>
            <StyledInput
              type="text"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
            />
            <InputButton>
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
