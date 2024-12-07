"use client";

import { useGetEmployeesQuery } from "@/states/services/usersServices";
import { roleManagementColumns } from "./roleManagementColumns";
import { RolesDataTable } from "./RolesDataTable";
import { AddRoleModal } from "../AddRoleModal";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { useGetRolesQuery } from "@/states/services/office-admin/permissionServices";

function RoleManagement() {
  const { data, isFetching } = useGetRolesQuery();
  const [isShowModal, setIsShowModal] = useState(false);
  const { userData } = useSelector((state) => state.authReducer);

  const handleOpenDialog = () => {
    setIsShowModal(true);
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen h-full">
      {isShowModal && (
        <AddRoleModal openDialog={isShowModal} setOpenDialog={setIsShowModal} />
      )}
      {/* ==== */}
      <div className="px-4 md:px-10 pt-5 md:pt-10">
        <div className="flex justify-between items-center">
          <p className="text-gray-700 text-md md:text-lg font-semibold">
            Role Permissions
          </p>
          {/* <AddRoleModal /> */}
          <Button
            onClick={handleOpenDialog}
            className="bg-secondary h-9 gap-2 text-xs md:text-sm text-white w-fit md:px-5"
          >
            Add New Role
          </Button>
        </div>
        {/* === Table === */}
        <div className="pb-20 mt-4 w-full">
          <RolesDataTable
            columns={roleManagementColumns}
            data={isFetching ? [] : data?.data}
            isFetching={isFetching}
            routePath={`/office-admin/dashboard/family-office/role-permissions/permissions`}
          />
        </div>
      </div>
    </div>
  );
}

export default RoleManagement;
