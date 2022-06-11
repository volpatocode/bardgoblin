import React from "react";

import {
  Navbar,
  NavLeftSide,
  NavRightSide,
  TextButton,
  ContainedButton,
} from "./styles";

import Logo from "../Logo";
import NavSearchBar from "../NavSearchBar";
import AvatarIcon from "../AvatarIcon";

import { Stack } from "@mui/material";


export type propsType = {};

export default function index() {
  return (
    <>
      <Navbar>
        <NavLeftSide>
          <Logo variant="horizontal" />
          <NavSearchBar />
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
            <AvatarIcon />
          </Stack>
        </NavRightSide>
      </Navbar>
    </>
  );
}
