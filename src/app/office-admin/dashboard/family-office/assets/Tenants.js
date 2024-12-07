import { UserDataTable } from "@/components/office-admin/office-admin-shared/transactionTable/userTable/UserDataTable";
import { userColumn } from "@/components/office-admin/office-admin-shared/transactionTable/userTable/userColumn";
import { useGetTenantsQuery } from "@/states/services/usersServices";
import React from "react";
import { useSelector } from "react-redux";

function Tenants() {
  const { rootCompanyInfo } = useSelector((state) => state.companyReducer);
  const { data, isFetching } = useGetTenantsQuery({
    companyId: rootCompanyInfo?.id,
  });

  return (
    <div className="mt-6 w-full">
      <div className="w-full flex-1 bg-transparent mt-8">
        <p className="text-gray-700 text-md md:text-xl font-semibold">
          All Tenants
        </p>
        <div className="w-full flex items-center justify-between mt-2.5 md:mt-4">
          <UserDataTable
            columns={userColumn}
            data={isFetching ? [] : data?.data}
            isFetching={isFetching}
          />
        </div>
      </div>
    </div>
  );
}

export default Tenants;
