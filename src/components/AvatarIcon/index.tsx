import React, { useState, useContext } from "react";
import { UserModalContext } from "../../contexts/UserModalContext";

import { AvatarIcon } from "./styles";

import { IconButton, Menu, MenuItem } from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";
import UserModal from "../UserModal";
import { UserContext } from "../../contexts/UserContext";

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

  const { logOut, isAuthorized } = useContext(UserContext);

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
        <AccountCircle fontSize="large" />
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
        {isAuthorized ? (
          <>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Reset password</MenuItem>
            <MenuItem onClick={logOut}>Log out</MenuItem>
          </>
        ) : (
          <>
            <MenuItem onClick={handleUserModalLogin}>Login</MenuItem>
            <MenuItem onClick={handleUserModalRegister}>Register</MenuItem>
          </>
        )}

        {handleUserModal && <UserModal />}
      </Menu>
    </AvatarIcon>
  );
}
