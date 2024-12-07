"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

function TopTabHeaderPermissions() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const uid = searchParams.get("uid");

  let isBasic = pathname?.includes("/permissions");
  let isAdvance = pathname?.includes("/advance-permission");

  return (
    <div className="w-full px-4 md:px-10 flex flex-col md:flex-row md:justify-between md:items-center py-3 gap-6 md:gap-0">
      <div className="flex items-center gap-5">
        <Link href={`permissions?uid=${uid}`}>
          <div
            className={`${
              isBasic ? "bg-secondary" : "bg-transparent"
            } rounded-2xl px-4 w-fit h-8 flex justify-center items-center`}
          >
            <p
              className={`${
                isBasic ? "text-white" : "text-gray-700"
              } text-xs md:text-sm font-medium`}
            >
              Permissions
            </p>
          </div>
        </Link>
        {/* <Link href={`advance-permission?uid=${uid}`}>
          <div
            className={`${
              isAdvance ? "bg-secondary" : "bg-transparent"
            } rounded-2xl px-4 w-fit h-8 flex justify-center items-center`}
          >
            <p
              className={`${
                isAdvance ? "text-white" : "text-gray-700"
              } text-xs md:text-sm font-medium`}
            >
              Advance Permissions
            </p>
          </div>
        </Link> */}
      </div>
    </div>
  );
}

export default TopTabHeaderPermissions;
