import * as yup from "yup";

export const signupSchema = yup
  .object({
    name: yup.string().required("Required").min(2, "Must be 2 or more"),
    email: yup.string().required("Required").email("Invalid email formate"),
    password: yup.string().required("Required").min(6, "Must be 6 or more"),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();
export const activationSchema = yup
  .object({
    password: yup.string().required("Required").min(6, "Must be 6 or more"),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

export const signinSchema = yup
  .object({
    email: yup.string().required("Required").email("Invalid email formate"),
    password: yup.string().required("Required").min(6, "Must be 6 or more"),
  })
  .required();

export const packageSchema = yup
  .object({
    name: yup.string().required("Required").min(3, "Must be 3 or more"),
    description: yup
      .string()
      .required("Required")
      .min(10, "Must be 10 or more"),
    price: yup
      .string()
      .required("Required")
      .min(1, "Must be greater or equal than 1"),
  })
  .required();

export const rootCompanySchema = yup
  .object({
    company_name: yup.string().required("Required").min(2, "Must be 2 or more"),
    company_email: yup
      .string()
      .required("Required")
      .email("Invalid email formate"),
    company_phone: yup
      .string()
      .required("Required")
      .min(5, "Must be 5 or more"),
    company_size: yup.number().required("Required"),
    company_address: yup
      .string()
      .required("Required")
      .min(5, "Must be 5 or more"),
  })
  .required();

export const rootOwnerSchema = yup
  .object({
    owner_name: yup.string().required("Required").min(2, "Must be 2 or more"),
    owner_email: yup
      .string()
      .required("Required")
      .email("Invalid email formate"),
    owner_password: yup
      .string()
      .required("Required")
      .min(6, "Must be 6 or more"),
    owner_phone: yup.string().required("Required").min(7, "Must be 7 or more"),
  })
  .required();
