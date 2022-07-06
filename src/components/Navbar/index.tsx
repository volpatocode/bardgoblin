import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { UserModalContext } from "../../contexts/UserModalContext";

import { Fade } from "@mui/material";

import Logo from "../Logo";
import AvatarIcon from "../AvatarIcon";
import UserModal from "../UserModal";

import {
  Navbar,
  NavLeftSide,
  NavRightSide,
  TextButton,
  ContainedButton,
  MenuIcon,
  CloseMenuIcon,
  OpenIconButton,
  CloseIconButton,
  StyledStack,
  BoxModal,
  MenuModal,
  HeaderModal,
  FooterModal,
  ModalButton,
} from "./styles";

export type navbarType = {
  page: "home" | "section" | "topic" | "forgotpassword";
};

export default function index({ page }: navbarType) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthorized, logOut } = useContext(UserContext);
  const { handleUserModal, handleUserModalLogin, handleUserModalRegister } =
    useContext(UserModalContext);

  // prevent modal scrolling
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "initial";
    }
  }, [isMenuOpen]);

  return (
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
        <OpenIconButton
          size="large"
          edge="start"
          aria-label="open-drawer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon />
        </OpenIconButton>
        {isMenuOpen && (
          <Fade in={isMenuOpen}>
            <BoxModal>
              <HeaderModal>
                <CloseIconButton
                  size="medium"
                  edge="start"
                  aria-label="open-drawer"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <CloseMenuIcon fontSize="large" />
                </CloseIconButton>
              </HeaderModal>
              <MenuModal>
                {isAuthorized ? (
                  <>
                    <ModalButton
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      href="/profile/account"
                    >
                      My account
                    </ModalButton>
                    <ModalButton
                      onClick={() => {
                        logOut();
                        setIsMenuOpen(!isMenuOpen);
                      }}
                    >
                      Logout
                    </ModalButton>
                  </>
                ) : (
                  <>
                    <ModalButton onClick={handleUserModalLogin}>
                      Login
                    </ModalButton>
                    <ModalButton onClick={handleUserModalRegister}>
                      Register
                    </ModalButton>
                  </>
                )}

                <ModalButton href="/section/builds">Builds</ModalButton>
                <ModalButton href="/section/sidequests">
                  Side quests
                </ModalButton>
                <ModalButton>Tools</ModalButton>
                <ModalButton>About</ModalButton>
                {isAuthorized && (
                  <ModalButton>Create Build / Quest</ModalButton>
                )}
                {handleUserModal && <UserModal />}
              </MenuModal>
              <FooterModal />
            </BoxModal>
          </Fade>
        )}
      </NavRightSide>
    </Navbar>
  );
}
