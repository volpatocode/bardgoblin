import React, { useContext } from "react";
import Logo from "../Logo";

import { useForm } from "react-hook-form";

import { Backdrop, Modal, Fade } from "@mui/material";

import {
  BoxModal,
  BoxLogo,
  InputBox,
  InputInfo,
  BoxInfo,
  BoxEmail,
  BoxPassword,
  ButtonInfo,
  FinishButton,
  BoxLogin,
  StyledCircularProgress,
} from "./styles";
import { UserReauthenticateModalContext } from "../../contexts/UserReauthenticateModal";

import { UserContext } from "../../contexts/UserContext";

import Link from "next/link";

import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "../../utils/validations";
import InputError from "../InputError";

export default function index() {
  const { isOpen, handleReauthenticateModal } = useContext(
    UserReauthenticateModalContext
  );

  const { loginUser, isLoading, errorFirebase } = useContext(UserContext);

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
      onClose={handleReauthenticateModal}
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
              <Link href="/help/forgotpassword">
                <ButtonInfo>Forgot password?</ButtonInfo>
              </Link>
              <FinishButton
                type="submit"
                onClick={handleSubmitLogin(loginUser)}
                disabled={isLoading}
              >
                {isLoading ? <StyledCircularProgress size="25px" /> : "Login"}
              </FinishButton>
            </BoxLogin>
          </form>
        </BoxModal>
      </Fade>
    </Modal>
  );
}
