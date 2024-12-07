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

export const bankServices = createApi({
  reducerPath: "bankServices",
  tagTypes: ["banks"],
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getAllBanksByCompanyId: builder.query({
      query: ({ companyId }) => {
        return {
          url: `banks?company_id=${companyId}`,
          method: "GET",
        };
      },
      providesTags: ["banks"],
    }),
    getAllBanksByOwnerId: builder.query({
      query: ({ ownerId }) => {
        return {
          url: `banks/by-owner?owner_id=${ownerId}`,
          method: "GET",
        };
      },
      providesTags: ["banks"],
    }),
    getBank: builder.query({
      query: ({ bankId }) => {
        return {
          url: `banks/${bankId}`,
          method: "GET",
        };
      },
      //   providesTags: ["company"],
    }),
    addBanks: builder.mutation({
      query: (data) => {
        return {
          url: "banks",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["banks"],
    }),
    updateBank: builder.mutation({
      query: ({ banksId, data }) => {
        return {
          url: `banks/${banksId}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["banks"],
    }),
    deleteBank: builder.mutation({
      query: ({ banksId }) => {
        return {
          url: `banks/${banksId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["banks"],
    }),
  }),
});

export const {
  useGetAllBanksByCompanyIdQuery,
  useGetBankQuery,
  useAddBanksMutation,
  useUpdateBankMutation,
  useDeleteBankMutation,
  useGetAllBanksByOwnerIdQuery,
} = bankServices;
