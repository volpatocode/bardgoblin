import React, { useContext, useState } from "react";
import { SearchContext } from "../../contexts/SearchContext";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { MenuItem, FormControl, ThemeProvider } from "@mui/material/";

import {
  MainSearchBar,
  StyledInput,
  InputWrapper,
  InputButton,
  SelectButton,
  SearchIcon,
} from "./styles";

import { searchBarTheme } from "../../theme/theme";

type queryType = {
  section: "Side Quests" | "Builds" | "Characters";
  query: string;
};

export default function index() {
  const { query, setQuery, sectionLinks } = useContext(SearchContext);
  const [searchBarSection, setSearchBarSection] = useState("Side Quests");

  const handleChange = (e) => {
    setSearchBarSection(e.target.value as string);
  };

  const router = useRouter();

  const { handleSubmit, register } = useForm();

  const onSubmit = (values: queryType) => {
    query && router.push(`/section/${sectionLinks[values?.section]}`);
  };

  return (
    <ThemeProvider theme={searchBarTheme}>
      <MainSearchBar>
        <FormControl>
          <SelectButton
            id="select-section"
            {...register("section")}
            value={searchBarSection}
            onChange={handleChange}
            color="secondary"
          >
            <MenuItem value="Side Quests">Side Quests</MenuItem>
            <MenuItem value="Builds">Builds</MenuItem>
            <MenuItem value="Characters">Characters</MenuItem>
          </SelectButton>
        </FormControl>
        <InputWrapper onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            {...register("query")}
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </InputWrapper>
        <InputButton onClick={handleSubmit(onSubmit)} type="submit">
          <SearchIcon />
        </InputButton>
      </MainSearchBar>
    </ThemeProvider>
  );
}
