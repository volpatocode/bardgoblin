import React, { useState, useContext } from "react";
import { UserModalContext } from "../../contexts/UserModalContext";

import { AvatarIcon } from "./styles";

import { IconButton, Menu, MenuItem } from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";
import UserModal  from "../UserModal";

export default function index() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const {
    handleUserModal,
  } = useContext(UserModalContext);


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
          <AccountCircle />
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
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleUserModal}>Create an account</MenuItem>
          {handleUserModal && <UserModal/>}
        </Menu>
      </AvatarIcon>
  );
}
