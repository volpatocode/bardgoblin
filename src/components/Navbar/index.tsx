import React, { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { UserModalContext } from "../../contexts/UserModalContext";
import { UtilsContext } from "../../contexts/UtilsContext";

import Logo from "../Logo";
import AvatarIcon from "../AvatarIcon";
import UserModal from "../UserModal";
import ModalAnchor from "../ModalAnchor";

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
} from "./styles";

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

  if (!screenSm) {
    return (
      <Navbar animation={animation}>
        <NavLeftSide>
          <Logo variant="horizontal" />
        </NavLeftSide>
        <NavRightSide>
          <StyledStack>
            <TextButton href="/section/sidequests">Side Quests</TextButton>
            <TextButton href="/section/builds">Builds</TextButton>
            <TextButton href="/section/characters">Characters</TextButton>

            <ContainedButton
              href={isAuthorized && "/createtopic"}
              onClick={() => !isAuthorized && handleUserModal()}
            >
              Create a Topic
            </ContainedButton>

            <AvatarIcon />
          </StyledStack>
        </NavRightSide>
      </Navbar>
    );
  } else {
    return (
      <Navbar animation={animation}>
        <NavLeftSide>
          <Logo variant="icon" />
        </NavLeftSide>
        <NavRightSide>
          <OpenIconButton
            size="large"
            edge="start"
            aria-label="open-drawer"
            onClick={handleMobileUserModal}
          >
            <MenuIcon />
          </OpenIconButton>
          {isMenuMobileOpen && (
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
                    <ModalAnchor
                      onClick={handleMobileUserModal}
                      href="/profile/account"
                      text=" My account"
                    />
                    <ModalAnchor
                      onClick={() => {
                        logOut();
                        handleMobileUserModal();
                      }}
                      text="Logout"
                    />
                  </>
                ) : (
                  <>
                    <ModalAnchor onClick={handleUserModalLogin} text="Login" />
                    <ModalAnchor
                      onClick={handleUserModalRegister}
                      text="Register"
                    />
                  </>
                )}
                <ModalAnchor href="/section/sidequests" text="Side Quests" />
                <ModalAnchor href="/section/builds" text="Builds" />
                <ModalAnchor href="/section/characters" text="Characters" />
                <ModalAnchor
                  href={isAuthorized && "/createtopic"}
                  onClick={() => !isAuthorized && handleUserModal()}
                  text="Create a Topic"
                />
              </MenuModal>
              <FooterModal />
            </BoxModal>
          )}
          {handleUserModal && <UserModal />}
        </NavRightSide>
      </Navbar>
    );
  }
}
