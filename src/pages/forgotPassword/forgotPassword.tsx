import React, { useContext } from "react";
import {
  ForgotPasswordWrapper,
  ForgotPasswordBoxWrapper,
  ForgotPasswordBoxTitle,
  InfoButton,
  InputBox,
  InputTitle,
  InputInfo,
  FinishButton,
  ForgotPasswordImageBox,
  BoxLogo,
} from "./styles";

import { UserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";

import Logo from "../../components/Logo";
import { StyledCircularProgress } from "../../components/UserModal/styles";

export default function index() {
  const { forgotPassword, isLoading } = useContext(UserContext);
  const { register, handleSubmit } = useForm();

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
          <InfoButton>Back to home</InfoButton>
          <FinishButton
            disabled={isLoading}
            onClick={handleSubmit(forgotPassword)}
          >
            {isLoading ? <StyledCircularProgress size="25px"/> : "Send email"}
          </FinishButton>
        </ForgotPasswordBoxWrapper>
        <ForgotPasswordImageBox />
      </ForgotPasswordWrapper>
    </form>
  );
}
