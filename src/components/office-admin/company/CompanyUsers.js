"use client";

import React from "react";
import { AddNewUser } from "../users/AddNewUser";
import { UsersCustomTabs } from "../users/UsersCustomTabs";
import { useParams } from "next/navigation";

function CompanyUsers() {
  const { id, companyId } = useParams();
  return (
    <div className="bg-gray-100 w-full min-h-screen h-full">
      <div className="px-4 md:px-10">
        <div className="flex justify-between items-center">
          <p className="text-gray-700 text-md md:text-lg font-semibold">
            Users
          </p>
          <AddNewUser companyId={companyId ? companyId : id} from="company" />
        </div>
        {/* === Table === */}
        <div className="pb-4 md:pb-20 mt-4 w-full">
          <UsersCustomTabs
            companyId={companyId ? companyId : id}
            from="company"
          />
        </div>
      </div>
    </div>
  );
}

export default CompanyUsers;
