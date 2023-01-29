import React, { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { UserModalContext } from "../../contexts/UserModalContext";
import Link from "next/link";

import UserModal from "../UserModal";

import { IconButton, Menu, MenuItem } from "@mui/material";

import { AvatarIcon, AccountAvatar } from "./styles";

export default function index() {
  const [anchor, setAnchor] = useState(null);
  const { handleUserMenu, handleUserModalLogin, handleUserModalRegister } =
    useContext(UserModalContext);
  const { currentUser, logOut, isAuthorized, photoURL } =
    useContext(UserContext);

  const handleMenu = (e) => {
    setAnchor(e.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const authorizedMenu = [
    <Link href="https://www.linkedin.com/in/joaovolpatocode/">
      <a>
        <MenuItem data-test="menu-list-item1" onClick={handleClose}>
          Contact
        </MenuItem>
      </a>
    </Link>,
    <Link href="/profile/account">
      <a>
        <MenuItem data-test="menu-list-item2" onClick={handleClose}>
          My account
        </MenuItem>
      </a>
    </Link>,
    <MenuItem data-test="menu-list-item3" onClick={logOut}>
      Log out
    </MenuItem>,
  ];

  const unauthorizedMenu = [
    <Link href="https://www.linkedin.com/in/joaovolpatocode/">
      <a>
        <MenuItem data-test="menu-list-item1" onClick={handleClose}>
          Contact
        </MenuItem>
      </a>
    </Link>,
    <MenuItem
      data-test="menu-list-item2"
      onClick={() => {
        handleUserModalLogin();
        handleClose();
      }}
    >
      Login
    </MenuItem>,
    <MenuItem
      data-test="menu-list-item3"
      onClick={() => {
        handleUserModalRegister();
        handleClose();
      }}
    >
      Register
    </MenuItem>,
  ];

  return (
    <AvatarIcon>
      <IconButton
        data-test="navbar-avatar"
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        sx={{ color: "white" }}
      >
        {typeof currentUser?.photoURL == "string" ? (
          <AccountAvatar src={photoURL} />
        ) : (
          photoURL
        )}
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchor}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={Boolean(anchor)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            bgcolor: "#262626",
            color: "white",
          },
        }}
      >
        {isAuthorized ? authorizedMenu : unauthorizedMenu}
        {handleUserMenu && <UserModal />}
      </Menu>
    </AvatarIcon>
  );
}
