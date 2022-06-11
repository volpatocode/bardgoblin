import React, { useState } from "react";
import { NavSearchBar, StyledInput, InputButton, SelectButton } from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import { MenuItem, FormControl, SelectChangeEvent } from "@mui/material/";

export type searchBarType = {};

export default function index({}: searchBarType) {
  const [searchBarSection, setSearchBarSection] = useState("Side Quests");

  const handleChange = (event: SelectChangeEvent) => {
    setSearchBarSection(event.target.value as string);
  };

  return (
    <NavSearchBar>
      <FormControl fullWidth>
        <SelectButton
          id="select-section"
          value={searchBarSection}
          onChange={handleChange}
          sx={{ display: "flex", justifyContent: "center" }}
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
    </NavSearchBar>
  );
}