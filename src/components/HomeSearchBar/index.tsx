import React from "react";
import { HomeSearchBar, StyledInput, InputButton, SelectButton } from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export type searchBarType = {};

export default function index({}: searchBarType) {
  return (
    <HomeSearchBar>
      <SelectButton>
        Side Quests
    <ArrowDropDownIcon sx={{color:"#FF9900"}}/>
      </SelectButton>
      <form>
        <StyledInput type="text" placeholder="Search for Name, ND, System & More..." />
      </form>
      <InputButton type="submit">
        <SearchIcon />
      </InputButton>
    </HomeSearchBar>
  );
}
