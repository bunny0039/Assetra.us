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

export const leaseContractServices = createApi({
  reducerPath: "leaseContractServices",
  tagTypes: ["leaseContract"],
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getLeaseContracts: builder.query({
      query: ({ realEstateId }) => {
        return {
          url: `real-estates/lease-contracts?real_estate_id=${realEstateId}`,
          method: `GET`,
        };
      },
      providesTags: ["leaseContract"],
    }),
    getLeaseContractByTentantId: builder.query({
      query: ({ realEstateId, tenantId }) => {
        return {
          url: `real-estates/lease-contracts?real_estate_id=${realEstateId}&tenant_id=${tenantId}`,
          method: `GET`,
        };
      },
      providesTags: ["leaseContract"],
    }),
    createLeaseContract: builder.mutation({
      query: (file) => {
        return {
          url: `real-estates/lease-contracts`,
          method: `POST`,
          body: file,
        };
      },
      invalidatesTags: ["leaseContract"],
    }),
  }),
});

export const {
  useCreateLeaseContractMutation,
  useGetLeaseContractsQuery,
  useGetLeaseContractByTentantIdQuery,
} = leaseContractServices;
