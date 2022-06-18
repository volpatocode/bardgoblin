import React, { useContext } from "react";
import {
  ForgotPasswordWrapper,
  ForgotPasswordBox,
  ForgotPasswordImageBox,
} from "./styles";

import { UserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";

export default function index() {
  const { forgotPassword } = useContext(UserContext);
  const { register, handleSubmit } = useForm();

  return (
    <ForgotPasswordWrapper>
      <ForgotPasswordBox>a</ForgotPasswordBox>
      <ForgotPasswordImageBox/>
    </ForgotPasswordWrapper>
  );
}
