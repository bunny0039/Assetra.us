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

export const maintenanceServices = createApi({
  reducerPath: "maintenanceServices",
  tagTypes: ["maintenance"],
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getMaintenance: builder.query({
      query: ({ realEstateId }) => {
        return {
          url: `maintenance-requests?real_estate_id=${realEstateId}`,
          method: `GET`,
        };
      },
      providesTags: ["maintenance"],
    }),
    createMaintenanceRequest: builder.mutation({
      query: (data) => {
        return {
          url: `maintenance-requests`,
          method: `POST`,
          body: data,
        };
      },
      invalidatesTags: ["maintenance"],
    }),
  }),
});

export const { useGetMaintenanceQuery, useCreateMaintenanceRequestMutation } =
  maintenanceServices;
