import React, { useContext } from "react";

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
import { UserContext } from "../../contexts/UserContext";

export type navbarType = {
  page: "home" | "section" | "topic" | "forgotpassword";
};

export default function index({ page }: navbarType) {
  const { isAuthorized } = useContext(UserContext);

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
            <TextButton href="/sections/builds/builds">Builds</TextButton>
            <TextButton href="/sections/quest/quest">Side Quests</TextButton>
            <TextButton>Tools</TextButton>
            <TextButton>About</TextButton>
            {isAuthorized && (
              <ContainedButton>Create Build / Quest</ContainedButton>
            )}
            <AvatarIcon />
          </Stack>
        </NavRightSide>
      </Navbar>
    </>
  );
}
