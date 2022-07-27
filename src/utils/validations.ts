import * as yup from "yup";

export const registerValidationSchema = yup.object({
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

export const editUserValidationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid Email")
    .max(50, "maximum of 50 characters"),
  password: yup
    .string()
    .min(6, "minimum of 6 characters")
    .max(20, "maximum of 20 characters"),
  username: yup
    .string()
    .min(4, "minimum of 4 characters")
    .max(20, "maximum of 20 characters"),
});

export const topicCreateValidationSchema = yup.object({
  topicTitle: yup.string().min(6, "minimum of 6 characters"),
  moduletitle: yup.string().min(6, "minimum of 6 characters"),
  modulecontent: yup
    .string()
    .min(150, "minimum of 150 characters")
    .max(1500, "maximum of 1500 characters"),
});
