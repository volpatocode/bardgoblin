import React, { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { UserModalContext } from "../../contexts/UserModalContext";
import Link from "next/link";

import { IconButton, Menu, MenuItem } from "@mui/material";

import UserModal from "../UserModal";

import { AvatarIcon, AccountAvatar } from "./styles";

export default function index() {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const { handleUserModal, handleUserModalLogin, handleUserModalRegister } =
    useContext(UserModalContext);
  const { logOut, isAuthorized, photoURL } = useContext(UserContext);

  const handleMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchor(e.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const authorizedMenu = [
    <Link href="/profile/account">
      <MenuItem onClick={handleClose}>My account</MenuItem>
    </Link>,
    <MenuItem onClick={logOut}>Log out</MenuItem>,
  ];

  const unauthorizedMenu = [
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
