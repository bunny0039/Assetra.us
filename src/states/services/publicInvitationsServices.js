import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const publicInvitationsServices = createApi({
  reducerPath: "publicInvitationsServices",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    acceptInvitation: builder.mutation({
      query: (data) => {
        return {
          url: `invites/accept/${data?.token}`,
          method: "POST",
        };
      },
    }),
    rejectInvitation: builder.mutation({
      query: (data) => {
        return {
          url: `invites/reject/${data?.token}`,
          method: "POST",
        };
      },
    }),
  }),
});

export const { useAcceptInvitationMutation, useRejectInvitationMutation } =
  publicInvitationsServices;
