import React, { useState } from "react";

import { MenuItem, FormControl, SelectChangeEvent } from "@mui/material/";

import SearchIcon from "@mui/icons-material/Search";

import {
  MainSearchBar,
  StyledInput,
  InputButton,
  SelectButton,
} from "./styles";

export default function index() {
  const [searchBarSection, setSearchBarSection] = useState("Side Quests");

  const handleChange = (e: SelectChangeEvent) => {
    setSearchBarSection(e.target.value as string);
  };

  return (
    <MainSearchBar>
      <FormControl fullWidth>
        <SelectButton
          id="select-section"
          value={searchBarSection}
          onChange={handleChange}
          sx={{ display: "flex", justifyContent: "center" }}
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
  );
}
