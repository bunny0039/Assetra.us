import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authServices = createApi({
  reducerPath: "authServices",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (data) => {
        return {
          url: `register`,
          method: "POST",
          body: data,
        };
      },
    }),
    userLogin: builder.mutation({
      query: (data) => {
        return {
          url: `login`,
          method: "POST",
          body: data,
        };
      },
    }),
    updatePassword: builder.mutation({
      query: (data) => {
        return {
          url: `users/activation/update/${data?.token}`,
          method: "PUT",
          body: data,
        };
      },
    }),
    getActivationDetails: builder.query({
      query: ({ token }) => {
        return {
          url: `users/activation/${token}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useUserLoginMutation,
  useUserRegisterMutation,
  useGetActivationDetailsQuery,
  useUpdatePasswordMutation,
} = authServices;
