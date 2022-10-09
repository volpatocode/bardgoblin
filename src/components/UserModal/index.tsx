import React, { useContext } from "react";
import Link from "next/link";
import { UserModalContext } from "../../contexts/UserModalContext";
import { UserContext } from "../../contexts/UserContext";
import { UtilsContext } from "../../contexts/UtilsContext";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  loginValidationSchema,
  registerValidationSchema,
} from "../../utils/validations";

import Logo from "../Logo";
import InputError from "../InputError";

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
  StyledCircularProgress,
  HeaderModal,
  BoxModalContent,
  ModalFooter,
  CloseIconButton,
  CloseMenuIcon,
} from "./styles";

import { Backdrop, Modal, Fade } from "@mui/material";

export default function index() {
  const {
    isMenuOpen,
    handleUserModal,
    isOnLogin,
    isOnRegister,
    toggleLogin,
    toggleRegister,
  } = useContext(UserModalContext);
  const { createUser, loginUser, isLoading, errorFirebase } =
    useContext(UserContext);

  const { screenSm } = useContext(UtilsContext);

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

  if (!screenSm) {
    return (
      <Modal
        open={isMenuOpen}
        onClose={handleUserModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isMenuOpen}>
          <BoxModal>
            <BoxModalContent>
              <BoxLogo>
                <Logo variant="vertical" />
              </BoxLogo>
              <SelectButtonBox>
                <SelectButton
                  onClick={toggleLogin}
                  sx={
                    isOnLogin
                      ? { borderBottom: "2px solid #ff9900" }
                      : { borderBottom: "2px solid #dd3e0e" }
                  }
                >
                  Login
                </SelectButton>
                <SelectButton
                  onClick={toggleRegister}
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
                <form onSubmit={handleSubmitLogin(loginUser)}>
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
                    {errorFirebase && <InputError error={errorFirebase} />}
                    <Link href="/help/resetpassword">
                      <ButtonInfo>Reset your password</ButtonInfo>
                    </Link>
                    <FinishButton
                      type="submit"
                      onClick={handleSubmitLogin(loginUser)}
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
                <form onSubmit={handleSubmitRegister(createUser)}>
                  <BoxRegister>
                    <BoxInfo>
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
                          <InputError
                            error={registerErrors?.password?.message}
                          />
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
                          <InputError
                            error={registerErrors?.confirmPassword?.message}
                          />
                        )}
                      </BoxPassword>
                    </BoxInfo>
                    {errorFirebase && <InputError error={errorFirebase} />}
                    <ButtonInfo onClick={toggleLogin}>
                      Already have an account?
                    </ButtonInfo>
                    <FinishButton
                      type="submit"
                      onClick={handleSubmitRegister(createUser)}
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
            </BoxModalContent>
          </BoxModal>
        </Fade>
      </Modal>
    );
  } else {
    return (
      <Modal
        open={isMenuOpen}
        onClose={handleUserModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isMenuOpen}>
          <BoxModal>
            <HeaderModal>
              <CloseIconButton
                size="medium"
                edge="start"
                aria-label="open-drawer"
                onClick={handleUserModal}
              >
                <CloseMenuIcon fontSize="large" />
              </CloseIconButton>
            </HeaderModal>
            <BoxModalContent>
              <BoxLogo>
                <Logo variant="horizontal" />
              </BoxLogo>
              <SelectButtonBox>
                <SelectButton
                  onClick={toggleLogin}
                  sx={
                    isOnLogin
                      ? { borderBottom: "2px solid #ff9900" }
                      : { borderBottom: "2px solid #dd3e0e" }
                  }
                >
                  Login
                </SelectButton>
                <SelectButton
                  onClick={toggleRegister}
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
                <form onSubmit={handleSubmitLogin(loginUser)}>
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
                    {errorFirebase && <InputError error={errorFirebase} />}
                    <Link href="/help/resetpassword">
                      <ButtonInfo>Reset your password</ButtonInfo>
                    </Link>
                    <FinishButton
                      type="submit"
                      onClick={handleSubmitLogin(loginUser)}
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
                <form onSubmit={handleSubmitRegister(createUser)}>
                  <BoxRegister>
                    <BoxInfo>
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
                          <InputError
                            error={registerErrors?.password?.message}
                          />
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
                          <InputError
                            error={registerErrors?.confirmPassword?.message}
                          />
                        )}
                      </BoxPassword>
                    </BoxInfo>
                    {errorFirebase && <InputError error={errorFirebase} />}
                    <ButtonInfo onClick={toggleLogin}>
                      Already have an account?
                    </ButtonInfo>
                    <FinishButton
                      type="submit"
                      onClick={handleSubmitRegister(createUser)}
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
            </BoxModalContent>
            <ModalFooter />
          </BoxModal>
        </Fade>
      </Modal>
    );
  }
}
