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

export const permissionServices = createApi({
  reducerPath: "permissionServices",
  tagTypes: ["permission", "role"],
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getAllPermission: builder.query({
      query: () => {
        return {
          url: `permissions`,
          method: "GET",
        };
      },
      providesTags: ["permission"],
    }),
    getUserPermission: builder.query({
      query: ({ userId }) => {
        return {
          url: `permissions/user?user_id=${userId}`,
          method: "GET",
        };
      },
      providesTags: ["permission"],
    }),
    assignPermission: builder.mutation({
      query: (data) => {
        return {
          url: `permissions/assign`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["permission"],
    }),
    addRole: builder.mutation({
      query: (data) => {
        return {
          url: `roles`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["role"],
    }),
    assignRole: builder.mutation({
      query: (data) => {
        return {
          url: `roles/assign/${data?.employee_id}`,
          method: "POST",
          body: data,
        };
      },
    }),
    assignPermissionToRole: builder.mutation({
      query: (data) => {
        return {
          url: `roles/assign-permissions/${data?.id}`,
          method: "POST",
          body: data,
        };
      },
    }),
    assignRole: builder.mutation({
      query: (data) => {
        return {
          url: `roles/assign`,
          method: "POST",
          body: data,
        };
      },
    }),
    getRoles: builder.query({
      query: (data) => {
        return {
          url: `roles`,
          method: "GET",
        };
      },
      providesTags: ["role"],
    }),
    getAssignedPermissionToRole: builder.query({
      query: ({ roleId }) => {
        return {
          url: `roles/get-permissions/${roleId}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetAllPermissionQuery,
  useGetUserPermissionQuery,
  useAssignPermissionMutation,
  useAddRoleMutation,
  useGetRolesQuery,
  useAssignRoleMutation,
  useGetAssignedPermissionToRoleQuery,
  useAssignPermissionToRoleMutation,
} = permissionServices;
