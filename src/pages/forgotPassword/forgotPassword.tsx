import React, { useContext } from "react";
import {
  ForgotPasswordWrapper,
  ForgotPasswordBoxWrapper,
  InfoButton,
  InputBox,
  InputInfo,
  FinishButton,
  ForgotPasswordImageBox,
  BoxLogo,
} from "./styles";

import { UserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Logo from "../../components/Logo";
import { StyledCircularProgress } from "../../components/UserModal/styles";
import { forgotPasswordValidationSchema } from "../../utils/validations";

export default function index() {
  const { forgotPassword, isLoading, onError } = useContext(UserContext);
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(forgotPasswordValidationSchema),
  });

  return (
    <form onSubmit={handleSubmit(forgotPassword)}>
      <ForgotPasswordWrapper>
        <ForgotPasswordBoxWrapper>
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
          <InfoButton href="/">Back to home</InfoButton>
          <FinishButton
            disabled={isLoading}
            onClick={handleSubmit(forgotPassword, onError)}
          >
            {isLoading ? <StyledCircularProgress size="25px" /> : "Send email"}
          </FinishButton>
        </ForgotPasswordBoxWrapper>
        <ForgotPasswordImageBox />
      </ForgotPasswordWrapper>
    </form>
  );
}
