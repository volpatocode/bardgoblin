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
  ModalButton,
} from "./styles";

import Logo from "../Logo";
import NavSearchBar from "../NavSearchBar";
import AvatarIcon from "../AvatarIcon";
import { UserContext } from "../../contexts/UserContext";
import { UserModalContext } from "../../contexts/UserModalContext";
import { Fade } from "@mui/material";
import UserModal from "../UserModal";

export type navbarType = {
  page: "home" | "section" | "topic" | "forgotpassword";
};

export default function index({ page }: navbarType) {
  const { isAuthorized } = useContext(UserContext);
  const { handleUserModal, handleUserModalLogin, handleUserModalRegister } =
    useContext(UserModalContext);

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
                <MenuModal>
                  {isAuthorized ? (
                    <ModalButton href="/profile/account">
                      My account
                    </ModalButton>
                  ) : (
                    <>
                      <ModalButton
                        onClick={() => {
                          handleUserModalLogin();
                        }}
                      >
                        Login
                      </ModalButton>
                      <ModalButton
                        onClick={() => {
                          handleUserModalRegister();
                        }}
                      >
                        Register
                      </ModalButton>
                      <ModalButton href="/help/forgotpassword">
                        Forgot password
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
    </>
  );
}
