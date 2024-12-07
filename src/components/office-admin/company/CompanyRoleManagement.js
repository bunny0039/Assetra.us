"use client";

import { useGetAllUsersQuery } from "@/states/services/usersServices";
import { roleManagementColumns } from "../roles/rolesTable/roleManagementColumns";
import { RolesDataTable } from "../roles/rolesTable/RolesDataTable";
import { useParams } from "next/navigation";

function CompanyRoleManagement() {
  const { data, isFetching } = useGetAllUsersQuery();
  const { companyId, id } = useParams();

  return (
    <div className="bg-gray-100 w-full min-h-screen h-full">
      {/* ==== */}
      <div className="px-4 md:px-10 pt-5 md:pt-10">
        <div className="flex justify-between items-center">
          <p className="text-gray-700 text-md md:text-lg font-semibold">
            Role Permissions
          </p>
          {/* <div className="bg-secondary rounded-sm px-4 w-fit h-8 flex justify-center items-center">
            <p className="text-white text-sm font-medium">Add New</p>
          </div> */}
        </div>
        {/* === Table === */}
        <div className="pb-20 mt-4 w-full">
          <RolesDataTable
            columns={roleManagementColumns}
            data={isFetching ? [] : data?.data}
            isFetching={isFetching}
            routePath={`role-permissions/permissions`}
          />
        </div>
      </div>
    </div>
  );
}

export default CompanyRoleManagement;
