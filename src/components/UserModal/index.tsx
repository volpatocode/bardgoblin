import React, { useState, useContext, useEffect } from "react";
import Logo from "../Logo";

import { useForm } from "react-hook-form";

import { Backdrop, Modal, Fade } from "@mui/material";

import {
  BoxModal,
  SelectButtonBox,
  SelectButton,
  BoxLogo,
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
import InputError from "../InputError";

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

  const {
    register: registerRegister,
    handleSubmit: handleSubmitRegister,
    formState: { errors: registerErrors },
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
  });

  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: loginErrors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  return (
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
            <form onSubmit={handleSubmitLogin(loginUser, onError)}>
              <BoxLogin>
                <BoxInfo>
                  <BoxEmail>
                    <InputBox>
                      <InputInfo
                        {...registerLogin("email")}
                        id="login-email"
                        type="email"
                        placeholder="Email"
                      />
                    </InputBox>
                    {loginErrors?.email && (
                      <InputError error={loginErrors?.email?.message} />
                    )}
                  </BoxEmail>
                  <BoxPassword>
                    <InputBox>
                      <InputInfo
                        {...registerLogin("password")}
                        id="login-password"
                        type="password"
                        placeholder="Password"
                      />
                    </InputBox>
                    {loginErrors?.password && (
                      <InputError error={loginErrors?.password?.message} />
                    )}
                  </BoxPassword>
                </BoxInfo>
                <Link href="/help/forgotpassword">
                  <ButtonInfo>Forgot password?</ButtonInfo>
                </Link>
                <FinishButton
                  type="submit"
                  onClick={handleSubmitLogin(loginUser, onError)}
                  disabled={isLoading}
                >
                  {isLoading ? <StyledCircularProgress size="25px" /> : "Login"}
                </FinishButton>
              </BoxLogin>
            </form>
          )}
          {isOnRegister && (
            <form onSubmit={handleSubmitRegister(createUser, onError)}>
              <BoxRegister>
                <BoxInfo>
                  <BoxUser>
                    <InputBox>
                      <InputInfo
                        {...registerRegister("name")}
                        id="register-name"
                        type="text"
                        placeholder="Name"
                      />
                    </InputBox>
                    {registerErrors?.name && (
                      <InputError error={registerErrors?.name?.message} />
                    )}
                  </BoxUser>
                  <BoxEmail>
                    <InputBox>
                      <InputInfo
                        {...registerRegister("email")}
                        id="register-email"
                        type="email"
                        placeholder="Email"
                      />
                    </InputBox>
                    {registerErrors?.email && (
                      <InputError error={registerErrors?.email?.message} />
                    )}
                  </BoxEmail>
                  <BoxPassword>
                    <InputBox>
                      <InputInfo
                        {...registerRegister("password")}
                        id="register-password"
                        type="password"
                        placeholder="Password"
                      />
                    </InputBox>
                    {registerErrors?.password && (
                      <InputError error={registerErrors?.password?.message} />
                    )}
                  </BoxPassword>
                  <BoxPassword>
                    <InputBox>
                      <InputInfo
                        {...registerRegister("confirmPassword")}
                        id="register-confirm-password"
                        type="password"
                        placeholder="Confirm password"
                      />
                    </InputBox>
                    {registerErrors?.confirmPassword && (
                      <InputError error={registerErrors?.confirmPassword?.message} />
                    )}
                  </BoxPassword>
                </BoxInfo>
                <ButtonInfo onClick={() => toggleLogin()}>
                  Already have an account?
                </ButtonInfo>
                <FinishButton
                  type="submit"
                  onClick={handleSubmitRegister(createUser, onError)}
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
  );
}
