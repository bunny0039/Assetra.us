import * as yup from "yup";

export const userSchema = yup
  .object({
    user_role: yup.string().required("Required"),
    name: yup.string().required("Required").min(2, "Must be 2 or more"),
    email: yup.string().required("Required").email("Invalid email formate"),
  })
  .required();

export const roleSchema = yup
  .object({
    role: yup.string().required("Required"),
  })
  .required();

export const tenantSchema = yup
  .object({
    name: yup.string().required("Required").min(2, "Must be 2 or more"),
    email: yup.string().required("Required").email("Invalid email formate"),
  })
  .required();

export const companySchema = yup
  .object({
    owner_id: yup.string().required("Required"),
    name: yup.string().required("Required").min(2, "Must be 2 or more"),
  })
  .required();

export const ownerCompanySchema = yup
  .object({
    name: yup.string().required("Required").min(3, "Must be 2 or more"),
    email: yup.string().required("Required"),
    address: yup.string().required("Required"),
    phone: yup.string().required("Required"),
    company_size: yup.string().required("Required"),
  })
  .required();
export const parentCompanySchema = yup
  .object({
    name: yup.string().required("Required").min(3, "Must be 2 or more"),
    owner_id: yup.string().required("Required"),
    // email: yup.string().required("Required"),
    // address: yup.string().required("Required"),
    // phone: yup.string().required("Required"),
    // company_size: yup.string().required("Required"),
  })
  .required();

export const childCompanySchema = yup
  .object({
    name: yup.string().required("Required").min(3, "Must be 2 or more"),
    // email: yup.string().required("Required"),
    // address: yup.string().required("Required"),
    // phone: yup.string().required("Required"),
    // company_size: yup.string().required("Required"),
  })
  .required();

export const realEstateSchema = yup
  .object({
    // owns_id: yup.string().required("Required"),
    address: yup.string().required("Required"),
    purchase_date: yup.string().required("Required"),
    purchase_price: yup.string().required("Required"),
    annual_tax: yup.number().required("Required").min(5, "Minimum is 5"),
    square_foot: yup.string().required("Required"),

    // Checkbox field
    is_financed: yup.boolean(),
    // Conditionally required fields
    amount_financed: yup.string().when("is_financed", {
      is: true,
      then: (schema) => schema.required("Required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    term_0f_loan: yup.string().when("is_financed", {
      is: true,
      then: (schema) => schema.required("Required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    rate_of_loan: yup.string().when("is_financed", {
      is: true,
      then: (schema) => schema.required("Required"),
      otherwise: (schema) => schema.notRequired(),
    }),

    // name: yup.string().required("Required").min(2, "Must be 2 or more"),
    // tenant_id: yup.string().required("Required"),
    // financing_values: yup.number().required("Required").min(5, "Minimum is 5"),
    // amenities: yup.number().required("Required").min(5, "Minimum is 5"),
    // price: yup.number().required("Required").min(5, "Minimum is 5"),
    // price_includes_tax: yup
    //   .number()
    //   .required("Required")
    //   .min(5, "Minimum is 5"),
    // bank_name: yup.string().required("Required"),
    // bank_type: yup.string().required("Required"),
    // bank_account_number: yup.number().required("Required"),
    // bank_balance: yup.number().required("Required"),
    // summary: yup.string().required("Required"),
    // asset_summary: yup.string().required("Required"),
  })
  .required();

export const updateRealEstateSchema = yup
  .object({
    name: yup.string().required("Required").min(2, "Must be 2 or more"),
    address: yup.string().required("Required"),
    square_foot: yup.string().required("Required"),
    purchase_date: yup.string().required("Required"),
    purchase_price: yup.string().required("Required"),
    financing_values: yup.number().required("Required").min(5, "Minimum is 5"),
    annual_tax: yup.number().required("Required").min(5, "Minimum is 5"),
    amenities: yup.number().required("Required").min(5, "Minimum is 5"),
    price: yup.number().required("Required").min(5, "Minimum is 5"),
    price_includes_tax: yup
      .number()
      .required("Required")
      .min(5, "Minimum is 5"),
    summary: yup.string().required("Required"),
    asset_summary: yup.string().required("Required"),
  })
  .required();

export const bankSchema = yup
  .object({
    company_id: yup.string().required("Required"),
    name: yup.string().required("Required").min(2, "Must be 2 or more"),
    account_number: yup.string().required("Required"),
    status: yup.string().required("Required"),
    balance: yup.string().required("Required"),
    type: yup.string().required("Required"),
  })
  .required();

export const updateBankSchema = yup
  .object({
    name: yup.string().required("Required").min(2, "Must be 2 or more"),
    account_number: yup.string().required("Required"),
    status: yup.string().required("Required"),
    balance: yup.string().required("Required"),
  })
  .required();

export const issueSchema = yup
  .object({
    category: yup.string().required("Required"),
    issue: yup.string().required("Required"),
    price: yup.number().required("Required"),
    description: yup
      .string()
      .required("Required")
      .min(10, "Must be 10 or more"),
  })
  .required();
