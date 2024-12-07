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

export const invitationsServices = createApi({
  reducerPath: "invitationsServices",
  tagTypes: ["invitation"],
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getAllSentInvitations: builder.query({
      query: () => {
        return {
          url: `invitation`,
          method: "GET",
        };
      },
      providesTags: ["permission"],
    }),
    sendInvitation: builder.mutation({
      query: (data) => {
        return {
          url: `invites`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["invitation"],
    }),
  }),
});

export const { useGetAllSentInvitationsQuery, useSendInvitationMutation } =
  invitationsServices;
