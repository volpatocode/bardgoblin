import * as yup from "yup";

export const registerValidationSchema = yup.object({
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Minimum of 6 characters"),
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
    .min(6, "Minimum of 6 characters"),
});

export const forgotPasswordValidationSchema = yup.object({
  email: yup.string().email("Invalid Email").required("Email is required"),
});

export const editUserValidationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid Email")
    .max(50, "Maximum of 50 characters"),
  password: yup
    .string()
    .min(6, "Minimum of 6 characters")
    .max(20, "Maximum of 20 characters"),
  username: yup
    .string()
    .min(4, "Minimum of 4 characters")
    .max(20, "Maximum of 20 characters"),
});

export const topicCreateValidationSchema = yup.object({
  topic: yup.object().shape({
    topictitle: yup
      .string()
      .required("Topic title is required")
      .min(6, "Minimum of 6 characters")
      .max(50, "Maximum of 50 characters"),
    modules: yup.array().of(
      yup.object().shape({
        moduletitle: yup
          .string()
          .required("Module title is required")
          .min(6, "Minimum of 6 characters")
          .max(50, "Maximum of 50 characters"),
        modulecontent: yup
          .string()
          .required("Module content is required")
          .min(150, "Minimum of 150 characters")
          .max(1500, "Maximum of 1500 characters"),
      })
    ),
  }),
});
