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
  InputBox,
  InputInfo,
  BoxInfo,
  BoxEmail,
  BoxPassword,
  ButtonInfo,
  FinishButton,
  BoxLogin,
  BoxRegister,
  BoxUser,
  StyledCircularProgress,
} from "./styles";
import { UserModalContext } from "../../contexts/UserModalContext";

import { UserContext } from "../../contexts/UserContext";

import Link from "next/link";

import { yupResolver } from "@hookform/resolvers/yup";
import {
  loginValidationSchema,
  registerValidationSchema,
} from "../../utils/validations";

export default function index() {
  const {
    isOpen,
    handleUserModal,
    isOnLogin,
    isOnRegister,
    toggleLogin,
    toggleRegister,
  } = useContext(UserModalContext);

  const { createUser, loginUser, isLoading, onError } = useContext(UserContext);

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(registerValidationSchema),
  });

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
              <form onSubmit={handleSubmit(loginUser, onError)}>
                <BoxLogin>
                  <BoxInfo>
                    <BoxEmail>
                      <InputBox>
                        <InputInfo
                          {...register("email")}
                          id="login-email"
                          type="email"
                          placeholder="Email"
                        />
                      </InputBox>
                    </BoxEmail>
                    <BoxPassword>
                      <InputBox>
                        <InputInfo
                          {...register("password")}
                          id="login-password"
                          type="password"
                          placeholder="Password"
                        />
                      </InputBox>
                    </BoxPassword>
                  </BoxInfo>
                  <Link href="/forgotpassword/forgotpassword">
                    <ButtonInfo>Forgot password?</ButtonInfo>
                  </Link>
                  <FinishButton
                    type="submit"
                    onClick={handleSubmit(loginUser, onError)}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <StyledCircularProgress size="25px" />
                    ) : (
                      "Login"
                    )}
                  </FinishButton>
                </BoxLogin>
              </form>
            )}
            {isOnRegister && (
              <form onSubmit={handleSubmit(createUser, onError)}>
                <BoxRegister>
                  <BoxInfo>
                    <BoxUser>
                      <InputBox>
                        <InputInfo
                          {...register("name")}
                          id="register-name"
                          type="text"
                          placeholder="Name"
                        />
                      </InputBox>
                    </BoxUser>
                    <BoxEmail>
                      <InputBox>
                        <InputInfo
                          {...register("email")}
                          id="register-email"
                          type="email"
                          placeholder="Email"
                        />
                      </InputBox>
                    </BoxEmail>
                    <BoxPassword>
                      <InputBox>
                        <InputInfo
                          {...register("password")}
                          id="register-password"
                          type="password"
                          placeholder="Password"
                        />
                      </InputBox>
                    </BoxPassword>
                    <BoxPassword>
                      <InputBox>
                        <InputInfo
                          {...register("confirmPassword")}
                          id="register-confirm-password"
                          type="password"
                          placeholder="Confirm password"
                        />
                      </InputBox>
                    </BoxPassword>
                  </BoxInfo>
                  <ButtonInfo onClick={() => toggleLogin()}>
                    Already have an account?
                  </ButtonInfo>
                  <FinishButton
                    type="submit"
                    onClick={handleSubmit(createUser, onError)}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <StyledCircularProgress size="25px" />
                    ) : (
                      "Register"
                    )}
                  </FinishButton>
                </BoxRegister>
              </form>
            )}
          </BoxModal>
        </Fade>
      </Modal>
    </UserModal>
  );
}
