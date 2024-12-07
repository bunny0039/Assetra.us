"use client";

import React from "react";
import { useParams } from "next/navigation";
import { userColumn } from "./userColumn";
import { UserOwnersTable } from "./UserOwnersTable";

function MainOwnerUsers() {
  return (
    <div className="bg-gray-100 w-full min-h-screen h-full">
      <div className="px-4 md:px-10">
        <div className="flex justify-between items-center">
          <p className="text-gray-700 text-md md:text-lg font-semibold">
            Tenants
          </p>
        </div>
        {/* === Table === */}
        <div className="pb-4 md:pb-20 mt-4 w-full">
          <UserOwnersTable
            columns={userColumn}
            data={[]}
            // data={isFetching ? [] : data?.data}
            isFetching={false}
            from={""}
          />
        </div>
      </div>
    </div>
  );
}

export default MainOwnerUsers;
