import React, { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { UserModalContext } from "../../contexts/UserModalContext";
import Link from "next/link";

import UserModal from "../UserModal";

import { IconButton, Menu, MenuItem } from "@mui/material";

import { AvatarIcon, AccountAvatar } from "./styles";

export default function index() {
  const [anchor, setAnchor] = useState(null);
  const { handleUserModal, handleUserModalLogin, handleUserModalRegister } =
    useContext(UserModalContext);
  const { logOut, isAuthorized, photoURL } = useContext(UserContext);

  const handleMenu = (e) => {
    setAnchor(e.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const authorizedMenu = [
    <Link href="https://www.linkedin.com/in/joaovolpatocode/">
      <a>
        <MenuItem onClick={handleClose}>Contact</MenuItem>
      </a>
    </Link>,
    <Link href="/profile/account">
      <a>
        <MenuItem onClick={handleClose}>My account</MenuItem>
      </a>
    </Link>,
    <MenuItem onClick={logOut}>Log out</MenuItem>,
  ];

  const unauthorizedMenu = [
    <Link href="https://www.linkedin.com/in/joaovolpatocode/">
      <a>
        <MenuItem onClick={handleClose}>Contact</MenuItem>
      </a>
    </Link>,
    <MenuItem
      onClick={() => {
        handleUserModalLogin();
        handleClose();
      }}
    >
      Login
    </MenuItem>,
    <MenuItem
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
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        sx={{ color: "white" }}
      >
        <AccountAvatar src={photoURL} />
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
        {handleUserModal && <UserModal />}
      </Menu>
    </AvatarIcon>
  );
}
