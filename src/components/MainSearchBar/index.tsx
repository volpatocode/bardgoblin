import React, { useState } from "react";

import {
  MenuItem,
  FormControl,
  ThemeProvider,
} from "@mui/material/";

import {
  MainSearchBar,
  StyledInput,
  InputButton,
  SelectButton,
  SearchIcon,
} from "./styles";

import { searchBarTheme } from "../../theme/theme";

export default function index() {
  const [searchBarSection, setSearchBarSection] = useState("Side Quests");

  const handleChange = (e) => {
    setSearchBarSection(e.target.value as string);
  };

  return (
    <ThemeProvider theme={searchBarTheme}>
      <MainSearchBar>
        <FormControl fullWidth>
          <SelectButton
            id="select-section"
            value={searchBarSection}
            onChange={handleChange}
            color="secondary"
          >
            <MenuItem value="Side Quests">Side Quests</MenuItem>
            <MenuItem value="Builds">Builds</MenuItem>
            <MenuItem value="Tools">Tools</MenuItem>
          </SelectButton>
        </FormControl>
        <form>
          <StyledInput
            type="text"
            placeholder="Search for Name, ND, System & More..."
          />
        </form>
        <InputButton type="submit">
          <SearchIcon />
        </InputButton>
      </MainSearchBar>
    </ThemeProvider>
  );
}
