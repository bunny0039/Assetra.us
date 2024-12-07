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

export const profileServices = createApi({
  reducerPath: "profileServices",
  tagTypes: ["profile"],
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (userId) => {
        return {
          url: `user/${userId}`,
          method: "GET",
        };
      },
      providesTags: ["profile"],
    }),
    getUser: builder.query({
      query: () => {
        return {
          url: `user`,
          method: "POST",
        };
      },
      // providesTags: [""],
    }),
  }),
});

export const { useGetProfileQuery, useGetUserQuery } = profileServices;
