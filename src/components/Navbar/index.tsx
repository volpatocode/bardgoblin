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
import { UserModalContextProvider } from "../../contexts/UserModalContext";

export type navbarType = {
  page: "home" | "section" | "topic";
};

export default function index({ page }: navbarType) {
  return (
    <>
      <Navbar page={page}>
        <NavLeftSide>
          <Logo variant="horizontal" />
          {page === "topic" && <NavSearchBar />}
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
