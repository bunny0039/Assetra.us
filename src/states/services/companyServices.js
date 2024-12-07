import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLogoutFromStore } from "../reducers/authReducer";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const userData = getState().authReducer.userData;
    if (userData) {
      headers.set("authorization", `Bearer ${userData.userToken}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result && result.sttaus === "FETCH_ERROR") {
    location.href = "/auth/signin";
    localStorage.removeItem("userData");
    api.dispatch(userLogoutFromStore());
  }
  return result;
};

export const companyServices = createApi({
  reducerPath: "companyServices",
  tagTypes: ["company"],
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getAllCompanies: builder.query({
      query: (id) => {
        return {
          url: `companies`,
          method: "GET",
        };
      },
      providesTags: ["company"],
    }),
    getFinancialOverviewByCompany: builder.query({
      query: ({ id }) => {
        return {
          url: `financial-overview/company?company_id=${id}`,
          method: "GET",
        };
      },
      // providesTags: ["company"],
    }),
    addCompany: builder.mutation({
      query: (data) => {
        return {
          url: "companies",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["company"],
    }),
    addRootCompanyAndOwner: builder.mutation({
      query: (data) => {
        return {
          url: "companies/root",
          method: "POST",
          body: data,
        };
      },
      // invalidatesTags: ["company"],
    }),
    assignCompanyToEmployee: builder.mutation({
      query: (data) => {
        console.log("rt data=> ", data);
        return {
          url: `companies/assign/employee/${data?.employeeId}`,
          method: "POST",
          body: data,
        };
      },
      // invalidatesTags: ["company"],
    }),
    getCompaniesByOwner: builder.query({
      query: ({ ownerId, companyId }) => {
        return {
          url: `companies/by-owner?company_id=${companyId}&owner_id=${ownerId}`,
          method: "GET",
        };
      },
      providesTags: ["company"],
    }),
    getCompanyDetailsById: builder.query({
      query: ({ companyId }) => {
        return {
          url: `companies/${companyId}`,
          method: "GET",
        };
      },
    }),
    getSubCompanies: builder.query({
      query: ({ companyId }) => {
        return {
          url: `companies?parent_id=${companyId}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useAddCompanyMutation,
  useGetAllCompaniesQuery,
  useAddRootCompanyAndOwnerMutation,
  useGetFinancialOverviewByCompanyQuery,
  useGetCompaniesByOwnerQuery,
  useGetCompanyDetailsByIdQuery,
  useGetSubCompaniesQuery,
  useAssignCompanyToEmployeeMutation,
} = companyServices;
