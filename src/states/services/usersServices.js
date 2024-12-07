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

export const usersServices = createApi({
  reducerPath: "usersServices",
  tagTypes: ["users"],
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getTenants: builder.query({
      query: ({ companyId }) => {
        return {
          url: `users/tenants?company_id=${companyId}`,
          method: "GET",
        };
      },
      providesTags: ["users"],
    }),
    getTenantDetails: builder.query({
      query: ({ tenantId }) => {
        return {
          url: `users/tenants/${tenantId}`,
          method: "GET",
        };
      },
    }),
    getOwners: builder.query({
      query: (id) => {
        return {
          url: `users/owners`,
          method: "GET",
        };
      },
      providesTags: ["users"],
    }),
    getOwnerDetails: builder.query({
      query: ({ ownerId }) => {
        return {
          url: `users/owners/${ownerId}`,
          method: "GET",
        };
      },
    }),
    getEmployees: builder.query({
      query: () => {
        return {
          url: `users/employees`,
          method: "GET",
        };
      },
      providesTags: ["users"],
    }),
    getEmployeeDetails: builder.query({
      query: ({ employeeId }) => {
        return {
          url: `users/employees/${employeeId}`,
          method: "GET",
        };
      },
    }),
    getAllUsers: builder.query({
      query: () => {
        return {
          url: `users`,
          method: "GET",
        };
      },
      providesTags: ["users"],
    }),
    addUser: builder.mutation({
      query: (data) => {
        return {
          url: "users",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["users"],
    }),
    updateUser: builder.mutation({
      query: (data) => {
        return {
          url: `users/${data?.userId}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["users"],
    }),
    deleteUser: builder.mutation({
      query: ({ userId }) => {
        return {
          url: `users/${userId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetTenantsQuery,
  useGetEmployeesQuery,
  useGetOwnersQuery,
  useAddUserMutation,
  useGetAllUsersQuery,
  useGetEmployeeDetailsQuery,
  useGetOwnerDetailsQuery,
  useGetTenantDetailsQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersServices;
