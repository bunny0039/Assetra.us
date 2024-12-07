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

export const plansServices = createApi({
  reducerPath: "plansServices",
  tagTypes: ["plans"],
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getAllPlans: builder.query({
      query: (id) => {
        return {
          url: `packages`,
          method: "GET",
        };
      },
      providesTags: ["plans"],
    }),
    addNewPlan: builder.mutation({
      query: (data) => {
        return {
          url: "superadmin/packages",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["plans"],
    }),
    deletePlan: builder.mutation({
      query: (planId) => {
        return {
          url: `superadmin/packages/${planId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["plans"],
    }),
  }),
});

export const {
  useGetAllPlansQuery,
  useAddNewPlanMutation,
  useDeletePlanMutation,
} = plansServices;
