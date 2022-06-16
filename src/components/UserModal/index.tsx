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
import { UserFormData } from "../../types/user";
import { UserModalContext } from "../../contexts/UserModalContext";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../config/firebaseConfig";

export default function index() {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const {
    isOpen,
    handleUserModal,
    isOnLogin,
    isOnRegister,
    toggleLogin,
    toggleRegister,
  } = useContext(UserModalContext);

  async function createUser(data: UserFormData) {
    setIsLoading(true);
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((value) => {
        console.log("Cadastrado com sucesso!");
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }

  async function loginUser(data: UserFormData) {
    setIsLoading(true);
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then((value) => {
        console.log("Logado com sucesso!");
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }

  async function logOut() {
    setIsLoading(true);
    await signOut(auth)
      .then(() => {
        console.log("Deslogado com sucesso!");
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }

  async function forgotPassword(data: UserFormData) {
    setIsLoading(true);
    await sendPasswordResetEmail(auth, data.email)
      .then((value) => {
        console.log("Email enviado com sucesso!");
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
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
                    <ButtonInfo onClick={handleSubmit(forgotPassword)}>Forgot password?</ButtonInfo>
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
