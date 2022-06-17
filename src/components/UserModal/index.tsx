import React, { useState, useContext, useEffect } from "react";
import Logo from "../Logo";

import { useForm } from "react-hook-form";

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
  ButtonInfo,
  BoxButtons,
  FinishButton,
  BoxLogin,
  BoxRegister,
  BoxUser,
} from "./styles";
import { UserModalContext } from "../../contexts/UserModalContext";

import { UserContext } from "../../contexts/userContext";

export default function index() {
  const { register, handleSubmit } = useForm();

  const {
    isOpen,
    handleUserModal,
    isOnLogin,
    isOnRegister,
    toggleLogin,
    toggleRegister,
  } = useContext(UserModalContext);

  const { isLoading, createUser, loginUser, logOut, forgotPassword } =
    useContext(UserContext);

  return (
    <UserModal>
      <Modal
        open={isOpen}
        onClose={handleUserModal}
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
              <form onSubmit={handleSubmit(loginUser)}>
                <BoxLogin>
                  <BoxInfo>
                    <BoxEmail>
                      <InputTitle>Email</InputTitle>
                      <InputInfo
                        {...register("email")}
                        id="login-email"
                        type="email"
                      />
                    </BoxEmail>
                    <BoxPassword>
                      <InputTitle>Password</InputTitle>
                      <InputInfo
                        {...register("password")}
                        id="login-password"
                        type="password"
                      />
                    </BoxPassword>
                  </BoxInfo>
                  <BoxButtons>
                    <ButtonInfo onClick={handleSubmit(forgotPassword)}>
                      Forgot password?
                    </ButtonInfo>
                    <FinishButton
                      type="submit"
                      onClick={handleSubmit(loginUser)}
                    >
                      Login
                    </FinishButton>
                  </BoxButtons>
                </BoxLogin>
              </form>
            )}
            {isOnRegister && (
              <form onSubmit={handleSubmit(createUser)}>
                <BoxRegister>
                  <BoxInfo>
                    <BoxUser>
                      <InputTitle>Name</InputTitle>
                      <InputInfo
                        {...register("name")}
                        id="register-name"
                        type="text"
                      />
                    </BoxUser>
                    <BoxEmail>
                      <InputTitle>Email</InputTitle>
                      <InputInfo
                        {...register("email")}
                        id="register-email"
                        type="email"
                      />
                    </BoxEmail>
                    <BoxPassword>
                      <InputTitle>Password</InputTitle>
                      <InputInfo
                        {...register("password")}
                        id="register-password"
                        type="password"
                      />
                    </BoxPassword>
                    <BoxPassword>
                      <InputTitle>Confirm password</InputTitle>
                      <InputInfo
                        {...register("confirmPassword")}
                        id="register-confirm-password"
                        type="password"
                      />
                    </BoxPassword>
                  </BoxInfo>
                  <BoxButtons>
                    <AnchorInfo onClick={() => toggleLogin()}>
                      Already have an account?
                    </AnchorInfo>
                    <FinishButton
                      type="submit"
                      onClick={handleSubmit(createUser)}
                    >
                      Register
                    </FinishButton>
                  </BoxButtons>
                </BoxRegister>
              </form>
            )}
          </BoxModal>
        </Fade>
      </Modal>
    </UserModal>
  );
}
