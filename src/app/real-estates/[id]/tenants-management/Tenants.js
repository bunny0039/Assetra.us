"use client";
import { AddNewTenant } from "@/components/office-admin/office-admin-shared/AddNewTenant";
import { UserDataTable } from "@/components/office-admin/office-admin-shared/transactionTable/userTable/UserDataTable";
import { useGetTenantsQuery } from "@/states/services/usersServices";
import React from "react";
import { useSelector } from "react-redux";
import { tenantColumn } from "./tenantColumn";
import { useParams } from "next/navigation";
import { useGetAllTenantsByRealEstateIdQuery } from "@/states/services/assets/realEstateServices";

function Tenants() {
  const { id } = useParams();
  const { currentCompanyId } = useSelector((state) => state.companyReducer);
  const { data, isFetching } = useGetAllTenantsByRealEstateIdQuery({
    realEstateId: id,
  });

  const allTenants = data?.data?.tenants;

  return (
    <div className="w-full">
      <div className="w-full flex-1 bg-transparent ">
        <div className="w-full flex justify-between items-center">
          <p className="text-gray-700 text-md md:text-xl font-semibold">
            All Tenants
          </p>
          <AddNewTenant rootCompanyId={currentCompanyId} realEstateId={id} />
        </div>
        <div className="w-full flex items-center justify-between mt-2.5 md:mt-4">
          <UserDataTable
            columns={tenantColumn}
            data={allTenants?.length > 0 ? allTenants : []}
            isFetching={isFetching}
            from="tenants"
            realEstateId={id}
          />
        </div>
      </div>
    </div>
  );
}

export default Tenants;
