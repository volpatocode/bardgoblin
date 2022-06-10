import React from "react";
import {
  Navbar,
  NavLeftSide,
  NavRightSide,
  TextButton,
  ContainedButton,
} from "./styles";
import Logo from "../Logo";
import AvatarIcon from "../AvatarIcon";
import { Stack } from "@mui/material";
import SearchBar from "../SearchBar";

export type propsType = {};

export default function index() {
  return (
    <>
      <Navbar>
        <NavLeftSide>
          <Logo variant="horizontal" />
          <SearchBar/>
        </NavLeftSide>
        <NavRightSide>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={1}
          >
            <TextButton>Builds</TextButton>
            <TextButton>Side Quests/Supply</TextButton>
            <TextButton>Tools</TextButton>
            <TextButton>About</TextButton>
            <ContainedButton>New Build / Quest</ContainedButton>
            <AvatarIcon/>
          </Stack>
        </NavRightSide>
      </Navbar>
    </>
  );
}
