import React, { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { UserModalContext } from "../../contexts/UserModalContext";

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
import { UtilsContext } from "../../contexts/UtilsContext";
import { Fade } from "@mui/material";

export type navbarType = {
  animation?: boolean;
};
export default function index({ animation }: navbarType) {
  const { isAuthorized, logOut } = useContext(UserContext);
  const {
    handleUserModal,
    handleUserModalLogin,
    handleUserModalRegister,
    isMenuMobileOpen,
    handleMobileUserModal,
  } = useContext(UserModalContext);

  const { screenSm } = useContext(UtilsContext);

  // prevent modal scrolling
  useEffect(() => {
    if (isMenuMobileOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "initial";
    }
  }, [isMenuMobileOpen]);

  return (
    <Navbar animation={animation}>
      <NavLeftSide>
        <Logo variant={screenSm ? "icon" : "horizontal"} />
      </NavLeftSide>
      <NavRightSide>
        <StyledStack>
          <TextButton href="/section/sidequests">Side Quests</TextButton>
          <TextButton href="/section/builds">Builds</TextButton>
          <TextButton href="/section/characters">Characters</TextButton>
          <TextButton href="/about">About</TextButton>
          {isAuthorized && (
            <ContainedButton href="/createtopic">
              Create Build / Quest
            </ContainedButton>
          )}
          <AvatarIcon />
        </StyledStack>
        {/* responsive */}
        <OpenIconButton
          size="large"
          edge="start"
          aria-label="open-drawer"
          onClick={handleMobileUserModal}
        >
          <MenuIcon />
        </OpenIconButton>
        {isMenuMobileOpen && (
          <Fade in={isMenuMobileOpen}>
            <BoxModal>
              <HeaderModal>
                <CloseIconButton
                  size="medium"
                  edge="start"
                  aria-label="open-drawer"
                  onClick={handleMobileUserModal}
                >
                  <CloseMenuIcon fontSize="large" />
                </CloseIconButton>
              </HeaderModal>
              <MenuModal>
                {isAuthorized ? (
                  <>
                    <ModalButton
                      onClick={handleMobileUserModal}
                      href="/profile/account"
                    >
                      My account
                    </ModalButton>
                    <ModalButton
                      onClick={() => {
                        logOut();
                        handleMobileUserModal();
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
                <ModalButton href="/section/sidequests">
                  Side quests
                </ModalButton>
                <ModalButton href="/section/builds">Builds</ModalButton>

                <ModalButton href="/section/characters">Characters</ModalButton>
                <ModalButton href="/about">About</ModalButton>
                {isAuthorized && (
                  <ModalButton href="/createtopic">
                    Create Build / Quest
                  </ModalButton>
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
