import React, { useContext } from "react";
import {
  ForgotPasswordWrapper,
  ForgotPasswordBoxWrapper,
  ForgotPasswordBox,
  ForgotPasswordImageBox,
} from "./styles";

import { UserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";
import {
  BoxLogo,
  BoxInfo,
  InputTitle,
  InputInfo,
  BoxEmail,
  BoxButtons,
  FinishButton,
  StyledCircularProgress,
  ButtonInfo,
} from "../../components/UserModal/styles";

import Logo from "../../components/Logo";

export default function index() {
  const { forgotPassword, isLoading } = useContext(UserContext);
  const { register, handleSubmit } = useForm();

  return (
    <ForgotPasswordWrapper>
      <ForgotPasswordBoxWrapper>
        <ForgotPasswordBox>
          <BoxLogo>
            <Logo variant="vertical" />
          </BoxLogo>
          <form onSubmit={handleSubmit(forgotPassword)}>
            <BoxInfo>
              <BoxEmail>
                <InputTitle>Email</InputTitle>
                <InputInfo
                  {...register("email")}
                  id="login-email"
                  type="email"
                />
              </BoxEmail>
            </BoxInfo>
            <BoxButtons>
              <ButtonInfo>Forgot password</ButtonInfo>
              <FinishButton
                type="submit"
                onClick={handleSubmit(forgotPassword)}
                disabled={isLoading}
              >
                {isLoading ? (
                  <StyledCircularProgress size="25px" />
                ) : (
                  "Send email"
                )}
              </FinishButton>
            </BoxButtons>
          </form>
        </ForgotPasswordBox>
      </ForgotPasswordBoxWrapper>
      <ForgotPasswordImageBox />
    </ForgotPasswordWrapper>
  );
}
