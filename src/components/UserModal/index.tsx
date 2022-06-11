import React, { useState } from "react";
import Logo from "../Logo";

import { Backdrop, Modal, Fade, Button } from "@mui/material";

import {
  BoxModal,
  UserModal,
  SelectButtonBox,
  SelectButton,
  BoxLogo,
  InputTitle,
  InputInfo,
  BoxInfo,
  BoxEmail,
  BoxPassword,
  AnchorInfo,
  BoxButtons,
  FinishButton,
  BoxLogin,
  BoxRegister,
  BoxUser,
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
    setIsOnLogin(false);
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
            <BoxLogo>
              <Logo variant="vertical" />
            </BoxLogo>
            <SelectButtonBox>
              <SelectButton
                onClick={() => toggleLogin()}
                sx={
                  isOnLogin
                    ? { borderBottom: "2px solid #ff9900" }
                    : { borderBottom: "2px solid #dd3e0e" }
                }
              >
                Login
              </SelectButton>
              <SelectButton
                onClick={() => toggleRegister()}
                sx={
                  isOnRegister
                    ? { borderBottom: "2px solid #ff9900" }
                    : { borderBottom: "2px solid #dd3e0e" }
                }
              >
                Register
              </SelectButton>
            </SelectButtonBox>
            {isOnLogin && (
              <BoxLogin>
                <BoxInfo>
                  <BoxEmail>
                    <InputTitle>Email</InputTitle>
                    <InputInfo type="text" />
                  </BoxEmail>
                  <BoxPassword>
                    <InputTitle>Password</InputTitle>
                    <InputInfo type="text" />
                  </BoxPassword>
                </BoxInfo>
                <BoxButtons>
                  <AnchorInfo href="/">Having trouble?</AnchorInfo>
                  <FinishButton>Login</FinishButton>
                </BoxButtons>
              </BoxLogin>
            )}
            {isOnRegister && (
              <BoxRegister>
                <BoxInfo>
                  <BoxUser>
                    <InputTitle>User</InputTitle>
                    <InputInfo type="text" />
                  </BoxUser>
                  <BoxEmail>
                    <InputTitle>Email</InputTitle>
                    <InputInfo type="text" />
                  </BoxEmail>
                  <BoxPassword>
                    <InputTitle>Password</InputTitle>
                    <InputInfo type="text" />
                  </BoxPassword>
                  <BoxPassword>
                    <InputTitle>Confirm password</InputTitle>
                    <InputInfo type="text" />
                  </BoxPassword>
                </BoxInfo>
                <BoxButtons>
                  <AnchorInfo onClick={() => toggleLogin()} >Already have an account?</AnchorInfo>
                  <FinishButton>Register</FinishButton>
                </BoxButtons>
              </BoxRegister>
            )}
          </BoxModal>
        </Fade>
      </Modal>
    </UserModal>
  );
}
