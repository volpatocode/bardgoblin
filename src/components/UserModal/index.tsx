import React, { useState, useContext } from "react";
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
  BoxButtons,
  FinishButton,
  BoxLogin,
  BoxRegister,
  BoxUser,
} from "./styles";
import { UserFormData } from "../../types/user";
import { UserModalContext } from "../../contexts/UserModalContext";


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

  function onSubmit(data: UserFormData) {
    console.log(data);
  }

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
              <form onSubmit={handleSubmit(onSubmit)}>
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
                    <AnchorInfo href="/">Having trouble?</AnchorInfo>
                    <FinishButton>Login</FinishButton>
                  </BoxButtons>
                </BoxLogin>
              </form>
            )}
            {isOnRegister && (
              <form onSubmit={handleSubmit(onSubmit)}>
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
                    <FinishButton>Register</FinishButton>
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
