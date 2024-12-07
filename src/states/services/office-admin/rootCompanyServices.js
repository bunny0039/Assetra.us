import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLogoutFromStore } from "../../reducers/authReducer";

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

export const rootCompanyServices = createApi({
  reducerPath: "rootCompanyServices",
  tagTypes: ["company"],
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getRootCompany: builder.query({
      query: () => {
        return {
          url: "companies/root",
          method: "GET",
        };
      },
      // invalidatesTags: ["company"],
    }),
    getRootCompanyRealEstates: builder.query({
      query: ({ companyId }) => {
        return {
          url: `real-estates?company_id=${companyId}`,
          method: "GET",
        };
      },
      // invalidatesTags: ["company"],
    }),
    getCompaniesByOwnerId: builder.query({
      query: ({ companyId, ownerId }) => {
        return {
          url: `companies/by-owner?company_id=${companyId}&owner_id=${ownerId}`,
          method: "GET",
        };
      },
      // invalidatesTags: ["company"],
    }),
    getAllCompaniesByOwner: builder.query({
      query: ({ ownerId }) => {
        return {
          url: `companies/by-owner?owner_id=${ownerId}`,
          method: "GET",
        };
      },
      // invalidatesTags: ["company"],
    }),
    getOfficeAdminFinancialOverview: builder.query({
      query: () => {
        return {
          url: `financial-overview/office-admin`,
          method: "GET",
        };
      },
      // invalidatesTags: ["company"],
    }),
    getOwnerFinancialOverview: builder.query({
      query: ({ ownerId }) => {
        return {
          url: `financial-overview/owner?owner_id=${ownerId}`,
          method: "GET",
        };
      },
      // invalidatesTags: ["company"],
    }),
  }),
});

export const {
  useGetRootCompanyQuery,
  useGetRootCompanyRealEstatesQuery,
  useGetCompaniesByOwnerIdQuery,
  useGetOfficeAdminFinancialOverviewQuery,
  useGetOwnerFinancialOverviewQuery,
  useGetAllCompaniesByOwnerQuery,
} = rootCompanyServices;
