import React from "react";
import { SearchBar, StyledInput, InputButton, SelectButton } from "./styles";
import SearchIcon from "@mui/icons-material/Search";

export type searchBarType = {};

export default function index({}: searchBarType) {
  return (
    <SearchBar>
      <SelectButton>
        Side Quests
      </SelectButton>
      <form>
        <StyledInput type="text" placeholder="Search for Name, ND, System & More..." />
      </form>
      <InputButton type="submit">
        <SearchIcon />
      </InputButton>
    </SearchBar>
  );
}
