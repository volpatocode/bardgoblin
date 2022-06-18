import React, { useContext } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  ForgotPasswordWrapper,
  ForgotPasswordContent,
  ForgotPasswordBox,
  ImageBox,
  Warning,
} from "./styles";

import {
  BoxButtons,
  BoxLogo,
  FinishButton,
  InputInfo,
  InputTitle,
} from "../../components/UserModal/styles";

import Logo from "../../components/Logo";
import { UserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";

export default function index() {
  const { forgotPassword } = useContext(UserContext);
  const { register, handleSubmit } = useForm();

  return (
    <ForgotPasswordWrapper>
      <Navbar page="forgotpassword" />
      <ForgotPasswordContent>
        <ForgotPasswordBox>
          <BoxLogo>
            <Logo variant="vertical" />
          </BoxLogo>
          <form onSubmit={handleSubmit(forgotPassword)}>
            <InputTitle>Recover your password</InputTitle>
            <InputInfo
              {...register("email")}
              id="register-email"
              type="email"
            />
            <BoxButtons>
              <Warning>Check your spam box</Warning>
              <FinishButton type="submit">Send email</FinishButton>
            </BoxButtons>
          </form>
        </ForgotPasswordBox>

        <ImageBox src="/campfire.png" />
      </ForgotPasswordContent>
      <Footer />
    </ForgotPasswordWrapper>
  );
}
