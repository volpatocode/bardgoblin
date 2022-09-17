import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordValidationSchema } from "../../utils/validations";

import Logo from "../../components/Logo";
import { StyledCircularProgress } from "../../components/UserModal/styles";
import InputError from "../../components/InputError";

import {
  Wrapper,
  ResetPasswordBox,
  InfoButton,
  InputBox,
  InputInfo,
  FinishButton,
  ImageBox,
  BoxLogo,
} from "./resetpasswordstyles";

export default function index() {
  const { resetPassword, isLoading, errorFirebase } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors: resetPasswordErrors },
  } = useForm({
    resolver: yupResolver(resetPasswordValidationSchema),
  });

  return (
    <form onSubmit={handleSubmit(resetPassword)}>
      <Wrapper>
        <ResetPasswordBox>
          <BoxLogo>
            <Logo variant="horizontal" />
          </BoxLogo>
          <InputBox>
            <InputInfo
              placeholder="Enter your email here"
              {...register("email")}
              id="login-email"
              type="email"
            />
          </InputBox>
          {resetPasswordErrors?.email && (
            <InputError error={resetPasswordErrors?.email?.message} />
          )}
          {errorFirebase && <InputError error={errorFirebase} />}
          <InfoButton href="/">Back to home</InfoButton>
          <FinishButton
            disabled={isLoading}
            onClick={handleSubmit(resetPassword)}
          >
            {isLoading ? <StyledCircularProgress size="32px" /> : "Send email"}
          </FinishButton>
        </ResetPasswordBox>
        <ImageBox />
      </Wrapper>
    </form>
  );
}
