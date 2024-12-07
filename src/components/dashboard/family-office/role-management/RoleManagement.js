"use client";

import React from "react";
import TopTabHeader from "../TopTabHeader";
import { roleManagementColumns } from "./roleManagementColumns";
import { DataTable } from "@/components/shared/tables/data-table";

const data = [
  {
    id: "728ed52f",
    roleName: "Alex Wong",
    createdDate: "10 Jan 2024",
  },
  {
    id: "728ed34552f",
    roleName: "John Doe",
    createdDate: "21 Oc 2021",
  },
  {
    id: "728ed212152f",
    roleName: "Elexender Alex",
    createdDate: "03 Feb 2023",
  },
  {
    id: "728ed21weew2152f",
    roleName: "Alex Doe",
    createdDate: "03 Feb 2023",
  },
];

async function RoleManagement() {
  return (
    <div className="bg-gray-100 w-full min-h-screen h-full">
      <TopTabHeader />
      {/* ==== */}
      <div className="px-4 md:px-20 pt-5 md:pt-10">
        <div className="flex justify-between items-center">
          <p className="text-gray-700 text-md md:text-lg font-semibold">
            Role Management
          </p>
          <div className="bg-secondary rounded-sm px-4 w-fit h-8 flex justify-center items-center">
            <p className="text-white text-sm font-medium">Add New</p>
          </div>
        </div>
        {/* === Table === */}
        <div className="pb-20 mt-4 w-full">
          <DataTable columns={roleManagementColumns} data={data} />
        </div>
      </div>
    </div>
  );
}

export default RoleManagement;
