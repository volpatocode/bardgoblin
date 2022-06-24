import React, { useState, useContext } from "react";
import Link from "next/link";

import { UserModalContext } from "../../contexts/UserModalContext";

import { AvatarIcon, AccountAvatar } from "./styles";

import { IconButton, Menu, MenuItem } from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";
import UserModal from "../UserModal";
import { UserContext } from "../../contexts/UserContext";
import { auth } from "../../config/firebaseConfig";

export default function index() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { handleUserModal, handleUserModalLogin, handleUserModalRegister } =
    useContext(UserModalContext);

  const { logOut, isAuthorized, photoURL} = useContext(UserContext);

  const authorizedMenu = [
    <Link href="/profile/account">
      <MenuItem onClick={handleClose}>My account</MenuItem>
    </Link>,
    <Link href="/help/forgotpassword">
      <MenuItem onClick={handleClose}>Reset password</MenuItem>
    </Link>,
    <MenuItem onClick={logOut}>Log out</MenuItem>,
  ];

  const unauthorizedMenu = [
    <MenuItem onClick={handleUserModalLogin}>Login</MenuItem>,
    <MenuItem onClick={handleUserModalRegister}>Register</MenuItem>,
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
        <AccountAvatar src={photoURL}/>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={Boolean(anchorEl)}
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
