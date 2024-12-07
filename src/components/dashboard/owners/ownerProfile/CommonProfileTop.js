"use client";
import { Mail, Phone, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { OwnerProfileDropdown } from "./OwnerProfileDropdown";
import { InputWithRightIcon } from "@/components/ui/inputWithRightIocn";
import { useParams, usePathname } from "next/navigation";

function CommonProfileTop() {
  const pathname = usePathname();
  const { id } = useParams();

  let isFinancialOverview = pathname.includes("/financial-overview");
  let isAssets = pathname.includes("/assets");
  let isCompanies = pathname.includes("/companies");

  return (
    <>
      <div className="bg-white w-full px-4 md:px-10 md:flex md:justify-end md:items-center py-3">
        <InputWithRightIcon
          type="text"
          placeholder="Search"
          IconName={Search}
          className="bg-gray-100 w-full md:w-72 h-9"
        />
      </div>
      <div className="bg-gray-100 px-4 md:px-10 py-8">
        <h1 className="text-gray-700 text-md md:text-xl font-semibold">
          Owner Profile
        </h1>
        <div className="border border-gray-200 mt-3 bg-white rounded-sm md:rounded-lg px-3 md:px-10 pt-3 md:pt-10 flex flex-wrap gap-5 md:gap-7 justify-between md:justify-stretch items-stretch">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3 md:gap-7">
              <div className="relative h-16 md:h-24 w-16 md:w-24 rounded-full overflow-hidden border border-primary bg-gray-500">
                {/* <Image
                  src="/images/signup.svg"
                  alt=""
                  fill
                  className="absolute h-full w-full object-cover"
                /> */}
              </div>

              <div>
                <p className="text-gray-800 text-md md:text-2xl font-semibold">
                  Alex Wong
                </p>
                <div className="flex items-center gap-2 mt-1 md:mt-2">
                  <Image
                    src="/images/owner_icon.svg"
                    alt=""
                    height={16}
                    width={16}
                  />
                  <p className="text-gray-900 text-sm font-medium">Abx INC</p>
                </div>
                <div className="hidden md:flex items-center gap-5 ">
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <Mail size={15} color="rgba(0,0,0,.5)" />
                    <p className="text-gray-700 text-xs font-normal">
                      alex@gmail.com
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <Phone size={15} color="rgba(0,0,0,.5)" />
                    <p className="text-gray-700 text-xs font-normal">
                      alex@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* -- */}
            <div>
              <OwnerProfileDropdown />
            </div>
          </div>
          {/* === */}
          <div className="flex md:hidden items-center gap-5">
            <div className="flex items-center justify-center gap-2">
              <Mail size={15} color="rgba(0,0,0,.5)" />
              <p className="text-gray-700 text-xs font-normal">
                alex@gmail.com
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone size={15} color="rgba(0,0,0,.5)" />
              <p className="text-gray-700 text-xs font-normal">
                alex@gmail.com
              </p>
            </div>
          </div>
          {/* === */}
          <div>
            <div className="flex gap-x-12 h-full">
              <Link href={`/dashboard/owners/profile/${id}/financial-overview`}>
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
              <Link href={`/dashboard/owners/profile/${id}/assets`}>
                <p
                  className={`text-xs font-semibold leading-6 text-gray-900 py-1.5 ${
                    isAssets
                      ? "border-b-2 border-b-black"
                      : "border-b-2 border-b-transparent"
                  }`}
                >
                  Assets
                </p>
              </Link>
              <Link href={`/dashboard/owners/profile/${id}/companies`}>
                <p
                  className={`text-xs font-semibold leading-6 text-gray-900 py-1.5 ${
                    isCompanies
                      ? "border-b-2 border-b-black"
                      : "border-b-2 border-b-transparent"
                  }`}
                >
                  Companies
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommonProfileTop;
