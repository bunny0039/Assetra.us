"use client";

import React from "react";
import { AddNewUser } from "./AddNewUser";
import { UsersCustomTabs } from "@/components/office-admin/users/UsersCustomTabs";

async function Users() {
  return (
    <div className="bg-gray-100 w-full min-h-screen h-full">
      <div className="px-4 md:px-20 pt-5 md:pt-10">
        <div className="flex justify-between items-center">
          <p className="text-gray-700 text-md md:text-lg font-semibold">
            Users
          </p>
          <AddNewUser />
        </div>
        {/* === Table === */}
        <div className="pb-4 md:pb-20 mt-4 w-full">
          <UsersCustomTabs />
        </div>
      </div>
    </div>
  );
}

export default Users;
