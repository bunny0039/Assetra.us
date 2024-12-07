"use client";
import React from "react";
import { TransactionTable } from "../dashboard/owners/TransactionTable";
import { useSelector } from "react-redux";

function EmployeeMainTenants() {
  const { employeePermission } = useSelector(
    (state) => state.permissionReducer
  );

  let users = employeePermission && employeePermission["manage_user"];

  console.log("=>>>employeePermission", users);

  return (
    <div className="px-4 md:px-10 bg-gray-100 min-h-[90vh]">
      <div>
        {/* ===== */}
        <div className="bg-transparent">
          <p className="text-gray-700 text-md md:text-xl font-semibold">
            Tenants
          </p>
          <div className="flex items-center justify-between mt-2.5 md:mt-4">
            {users?.users_view ? (
              <TransactionTable />
            ) : (
              <div className="bg-red-100 border border-red-700 rounded-md p-4 w-full">
                <p className="text-red-700 text-xs font-medium">
                  You don't have the necessary permissions to view the list of
                  Tenants.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeMainTenants;
