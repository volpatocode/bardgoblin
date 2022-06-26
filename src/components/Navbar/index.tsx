import React, { useContext, useEffect, useState } from "react";

import {
  Navbar,
  NavLeftSide,
  NavRightSide,
  TextButton,
  ContainedButton,
  MenuIcon,
  CloseMenuIcon,
  IconButton,
  StyledStack,
  BoxModal,
  MenuModal,
  HeaderModal,
  FooterModal,
} from "./styles";

import Logo from "../Logo";
import NavSearchBar from "../NavSearchBar";
import AvatarIcon from "../AvatarIcon";
import { UserContext } from "../../contexts/UserContext";
import { Fade } from "@mui/material";

export type navbarType = {
  page: "home" | "section" | "topic" | "forgotpassword";
};

export default function index({ page }: navbarType) {
  const { isAuthorized } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar page={page}>
        <NavLeftSide>
          <Logo variant="horizontal" />
        </NavLeftSide>
        <NavRightSide>
          <StyledStack>
            <TextButton href="/section/builds">Builds</TextButton>
            <TextButton href="/section/sidequests">Side Quests</TextButton>
            <TextButton>Tools</TextButton>
            <TextButton>About</TextButton>
            {isAuthorized && (
              <ContainedButton>Create Build / Quest</ContainedButton>
            )}
            <AvatarIcon />
          </StyledStack>
          {/* responsive */}
          <IconButton
            size="large"
            edge="start"
            aria-label="open-drawer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon />
          </IconButton>
          {isMenuOpen && (
            <Fade in={isMenuOpen}>
              <BoxModal>
                <HeaderModal>
                  <IconButton
                    size="medium"
                    edge="start"
                    aria-label="open-drawer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <CloseMenuIcon fontSize="large" />
                  </IconButton>
                </HeaderModal>
                <MenuModal>aa</MenuModal>
                <FooterModal/>
              </BoxModal>
            </Fade>
          )}
        </NavRightSide>
      </Navbar>
    </>
  );
}
