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

export const driveServices = createApi({
  reducerPath: "driveServices",
  tagTypes: ["drive"],
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getAllDrivesByCompanyId: builder.query({
      query: ({ companyId }) => {
        return {
          url: `drives?company_id=${companyId}`,
          method: `GET`,
        };
      },
      providesTags: ["drive"],
    }),
    getDrivesByCompanyAndReactEstateId: builder.query({
      query: ({ companyId, realEstateId }) => {
        return {
          url: `drives/real_estate/get-drive?company_id=${companyId}&real_estate_id=${realEstateId}`,
          method: `GET`,
        };
      },
      providesTags: ["drive"],
    }),
    addNewDrive: builder.mutation({
      query: (data) => {
        return {
          url: `drives`,
          method: `POST`,
          body: data,
        };
      },
      invalidatesTags: ["drive"],
    }),
    deleteDrive: builder.mutation({
      query: ({ driveId }) => {
        return {
          url: `drives/${driveId}`,
          method: `DELETE`,
        };
      },
      invalidatesTags: ["drive"],
    }),
  }),
});

export const {
  useGetAllDrivesByCompanyIdQuery,
  useAddNewDriveMutation,
  useGetDrivesByCompanyAndReactEstateIdQuery,
  useDeleteDriveMutation,
} = driveServices;
