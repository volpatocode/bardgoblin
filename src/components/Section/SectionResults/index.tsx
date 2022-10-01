import React, { useContext } from "react";
import { SearchContext } from "../../../contexts/SearchContext";

import SearchIcon from "@mui/icons-material/Search";
import TopicListWrapper from "../../Topic/TopicListWrapper";

import { sectionType } from "../../../types/types";

import {
  SectionResults,
  TopicQueryInfo,
  TopicFiltersWrapper,
  TopicSearchBar,
  StyledInput,
  InputButton,
} from "./styles";

export default function index({ section }: sectionType) {
  const { query, setQuery, search, sectionData} = useContext(SearchContext);
 
  return (
    <SectionResults maxWidth="lg">
      <TopicQueryInfo>
        <TopicFiltersWrapper>
          <TopicSearchBar>
            <StyledInput
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <InputButton>
              <SearchIcon />
            </InputButton>
          </TopicSearchBar>
        </TopicFiltersWrapper>
      </TopicQueryInfo>
      <TopicListWrapper data={search(sectionData[section])} />
      {/* <TopicPagination /> */}
    </SectionResults>
  );
}
