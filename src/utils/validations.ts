import * as yup from "yup";

export const registerValidationSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Minimum of 2 characters"),
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "minimum of 6 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
});

export const loginValidationSchema = yup.object({
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "minimum of 6 characters"),
});

export const forgotPasswordValidationSchema = yup.object({
  email: yup.string().email("Invalid Email").required("Email is required"),
});