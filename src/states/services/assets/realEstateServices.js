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

export const realEstateServices = createApi({
  reducerPath: "realEstateServices",
  tagTypes: ["realestate"],
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getAllRealEstatesByCompanyId: builder.query({
      query: ({ companyId }) => {
        return {
          url: `real-estates?company_id=${companyId}`,
          method: "GET",
        };
      },
      providesTags: ["realestate"],
    }),
    getRealEstate: builder.query({
      query: ({ realEstateId }) => {
        return {
          url: `real-estates/${realEstateId}`,
          method: "GET",
        };
      },
      providesTags: ["realestate"],
    }),
    getRealEstatesByOwnerId: builder.query({
      query: ({ ownerId }) => {
        return {
          url: `real-estates/by-owner?owner_id=${ownerId}`,
          method: "GET",
        };
      },
      providesTags: ["realestate"],
    }),
    getFinancialOverViewRealEstate: builder.query({
      query: ({ id }) => {
        return {
          url: `financial-overview/real-estate?company_id=${id}`,
          method: "GET",
        };
      },
      //   providesTags: ["company"],
    }),
    addRealEstates: builder.mutation({
      query: (data) => {
        return {
          url: "real-estates",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["realestate"],
    }),
    updateRealEstates: builder.mutation({
      query: ({ realEstateId, data }) => {
        return {
          url: `real-estates/${realEstateId}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["realestate"],
    }),
    deleteRealEstates: builder.mutation({
      query: ({ realEstateId }) => {
        return {
          url: `real-estates/${realEstateId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["realestate"],
    }),
    getAllTenantsByRealEstateId: builder.query({
      query: ({ realEstateId }) => {
        return {
          url: `real-estates/tenants/get-all-tenants/${realEstateId}`,
          method: "GET",
        };
      },
      providesTags: ["realestate"],
    }),
    getRealEstateByTenantId: builder.query({
      query: ({ tenantId }) => {
        return {
          url: `real-estates/by-tenant?tenant_id=${tenantId}`,
          method: "GET",
        };
      },
      //   providesTags: ["company"],
    }),
    assignTenantToRealEstate: builder.mutation({
      query: (data) => {
        return {
          url: `real-estates/tenants/assign-tenant`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["realestate"],
    }),
  }),
});

export const {
  useGetAllRealEstatesByCompanyIdQuery,
  useGetRealEstateQuery,
  useAddRealEstatesMutation,
  useUpdateRealEstatesMutation,
  useDeleteRealEstatesMutation,
  useGetFinancialOverViewRealEstateQuery,
  useGetRealEstatesByOwnerIdQuery,
  // ====
  useGetRealEstateByTenantIdQuery,
  useGetAllTenantsByRealEstateIdQuery,
  useAssignTenantToRealEstateMutation,
} = realEstateServices;
