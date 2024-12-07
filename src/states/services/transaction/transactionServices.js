import { userLogoutFromStore } from "@/states/reducers/authReducer";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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

export const transactionServices = createApi({
  reducerPath: "transactionServices",
  tagTypes: ["transaction"],
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getTransactionsByCompanyId: builder.query({
      query: ({ companyId }) => {
        return {
          url: `transactions/company?company_id=${companyId}`,
          method: "GET",
        };
      },
    }),
    getFinancialOverviewByOwnerId: builder.query({
      query: ({ ownerId }) => {
        return {
          url: `financial-overview/owner?owner_id=${ownerId}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetTransactionsByCompanyIdQuery,
  useGetFinancialOverviewByOwnerIdQuery,
} = transactionServices;
