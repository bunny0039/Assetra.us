"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { routes } from "@/routes/routes";
import { InputWithRightIcon } from "@/components/ui/inputWithRightIocn";

function TopTabHeader() {
  const pathname = usePathname();

  let userPath = routes.DASHBOARD_FAMILY_OFFICE_USERS;
  let roleManagementPath = routes.DASHBOARD_FAMILY_OFFICE_ROLE_MANAGEMENT;

  return (
    <div className="bg-white w-full px-4 md:px-10 flex flex-col md:flex-row md:justify-between md:items-center py-3 gap-6 md:gap-0">
      <div className="flex items-center gap-5">
        <Link href={userPath}>
          <div
            className={`${
              pathname === userPath ? "bg-secondary" : "bg-transparent"
            } rounded-2xl px-4 w-fit h-8 flex justify-center items-center`}
          >
            <p
              className={`${
                pathname === userPath ? "text-white" : "text-gray-700"
              } text-xs md:text-sm font-medium`}
            >
              Users
            </p>
          </div>
        </Link>
        <Link href={roleManagementPath}>
          <div
            className={`${
              pathname === roleManagementPath
                ? "bg-secondary"
                : "bg-transparent"
            } rounded-2xl px-4 w-fit h-8 flex justify-center items-center`}
          >
            <p
              className={`${
                pathname === roleManagementPath ? "text-white" : "text-gray-700"
              } text-xs md:text-sm font-medium`}
            >
              Role Management
            </p>
          </div>
        </Link>
      </div>
      <div>
        <InputWithRightIcon
          type="text"
          placeholder="Search"
          IconName={Search}
          className="bg-gray-100 w-full md:w-72 h-9"
        />
      </div>
    </div>
  );
}

export default TopTabHeader;
