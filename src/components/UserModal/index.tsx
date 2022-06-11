import React, { useState } from "react";
import Logo from "../Logo";

import { Backdrop, Modal, Fade, Button } from "@mui/material";

import {
  BoxModal,
  UserModal,
  SelectButtonBox,
  SelectButton,
  LogoBox,
} from "./styles";

export default function index() {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = () => setIsOpen(!isOpen);


  const [isOnLogin, setIsOnLogin] = useState(true);
  const toggleLogin = () => {
    setIsOnLogin(true);
    setIsOnRegister(false);
  };

  const [isOnRegister, setIsOnRegister] = useState(false);
  const toggleRegister = () => {
    setIsOnRegister(true);
    setIsOnLogin(false)
  };


  return (
    <UserModal>
      <Button onClick={handleChange}>Open modal</Button>
      <Modal
        open={isOpen}
        onClose={handleChange}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <BoxModal>
            <LogoBox>
              <Logo variant="vertical" />
            </LogoBox>
            <SelectButtonBox>
              <SelectButton
                onClick={() => toggleLogin()}
                sx={
                  isOnLogin === true
                    ? { borderBottom: "2px solid #ff9900" }
                    : { borderBottom: "2px solid #dd3e0e" }
                }
              >
                Login
              </SelectButton>
              <SelectButton
                onClick={() => toggleRegister()}
                sx={
                  isOnRegister === true
                    ? { borderBottom: "2px solid #ff9900" }
                    : { borderBottom: "2px solid #dd3e0e" }
                }
              >
                Register
              </SelectButton>
            </SelectButtonBox>
          </BoxModal>
        </Fade>
      </Modal>
    </UserModal>
  );
}
