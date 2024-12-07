"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import TotalCounts from "../../TotalCounts";
import { useGetAllUsersQuery } from "@/states/services/usersServices";
import { useGetAllCompaniesQuery } from "@/states/services/companyServices";

function ProfileBanner({ routesPath }) {
  const pathname = usePathname();
  const [usersCount, setUserCount] = useState({
    owner: 0,
    employee: 0,
  });

  const { data: allCompany, isFetching: isCompany } = useGetAllCompaniesQuery();
  const { data, isFetching } = useGetAllUsersQuery();
  const totalCompanies =
    allCompany?.data?.length > 0 ? allCompany?.data?.length : 0;

  const handleGetFilter = () => {
    const roleCounts = {
      owner: 0,
      employee: 0,
    };
    if (data?.data?.length > 0) {
      data?.data?.forEach((user) => {
        const role = user?.user_role;
        if (roleCounts.hasOwnProperty(role)) {
          roleCounts[role]++;
        }
      });
      setUserCount(roleCounts);
    }
  };

  useEffect(() => {
    handleGetFilter();
  }, [data?.data]);

  let isFinancialOverview = pathname.includes("/financial-overview");
  let isUsers = pathname.includes("/users");
  let isRolePermissions = pathname.includes("/role-permissions");

  return (
    <>
      <div className="bg-gray-100 px-4 md:px-10 py-8">
        <div className="border border-gray-200 mt-3 bg-white rounded-sm md:rounded-lg px-3 md:px-10 pt-3 md:pt-10 flex flex-wrap gap-5 md:gap-7 justify-between md:justify-stretch items-stretch">
          <div className="w-full flex items-center justify-between gap-5">
            <TotalCounts title="Total Owners" counts={usersCount?.owner} />
            <TotalCounts title="Total Companies" counts={totalCompanies || 0} />
            <TotalCounts
              title="Total Employees"
              counts={usersCount?.employee}
            />
          </div>

          <div className="w-full flex justify-between items-center">
            <div className="flex gap-x-12 h-full">
              <Link href={`${routesPath?.financialOverview}`}>
                <p
                  className={`text-xs font-semibold leading-6 text-gray-900 py-1.5 ${
                    isFinancialOverview
                      ? "border-b-2 border-b-black"
                      : "border-b-2 border-b-transparent"
                  }`}
                >
                  Financial overview
                </p>
              </Link>
              <Link href={`${routesPath?.users}`}>
                <p
                  className={`text-xs font-semibold leading-6 text-gray-900 py-1.5 ${
                    isUsers
                      ? "border-b-2 border-b-black"
                      : "border-b-2 border-b-transparent"
                  }`}
                >
                  Users
                </p>
              </Link>
              <Link href={`${routesPath?.rolePermissions}`}>
                <p
                  className={`text-xs font-semibold leading-6 text-gray-900 py-1.5 ${
                    isRolePermissions
                      ? "border-b-2 border-b-black"
                      : "border-b-2 border-b-transparent"
                  }`}
                >
                  Role Permissions
                </p>
              </Link>
            </div>
            <div>
              <Link href={`/office-admin/dashboard/send-invitations-link`}>
                <p
                  className={
                    "text-sm font-bold leading-6 text-primary py-1.5 border-b-2 border-b-transparent "
                  }
                >
                  Send Invitation
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileBanner;
