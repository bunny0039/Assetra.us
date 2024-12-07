"use client";
import { Mail, Phone, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import { AddNewCompany } from "../../company/AddNewCompany";
import { useDispatch } from "react-redux";
import { setCurrentCompanyId } from "@/states/reducers/companyReducer";
import { useGetCompanyDetailsByIdQuery } from "@/states/services/companyServices";
import Loader from "@/components/shared/Loader";

function CompanyBanner({ routesPath, id }) {
  const pathname = usePathname();
  const dispatch = useDispatch();

  const { data, isFetching } = useGetCompanyDetailsByIdQuery({ companyId: id });
  const companyInfo = data?.data;

  useEffect(() => {
    if (id) {
      dispatch(setCurrentCompanyId(id));
    }
  }, [id]);

  let isAssets = pathname.includes("/assets");
  let isFinancialOverview = pathname.includes("/financial-overview");
  let isUsers = pathname.includes("/users");
  let isDrive = pathname.includes("/drive");
  let isSubCompanies = pathname.includes("/sub-companies");

  // console.log("=>>>companyInfo", companyInfo);

  return (
    <>
      <div className="bg-gray-100 px-4 md:px-10 py-8">
        <h1 className="text-gray-700 text-md md:text-xl font-semibold">
          Company Profile
        </h1>
        <div className="border border-gray-200 mt-3 bg-white rounded-sm md:rounded-lg px-3 md:px-10 pt-3 md:pt-10 flex flex-wrap gap-5 md:gap-7 justify-between md:justify-stretch items-stretch">
          <div className="w-full flex items-center justify-between">
            {isFetching ? (
              <div>
                <Loader />
              </div>
            ) : (
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
                    {companyInfo?.name}
                  </p>
                  <div className="flex items-center gap-2 mt-1 md:mt-2">
                    <Image
                      src="/images/owner_icon.svg"
                      alt=""
                      height={16}
                      width={16}
                    />
                    <p className="text-gray-900 text-sm font-medium">
                      {companyInfo?.address}
                    </p>
                  </div>
                  <div className="hidden md:flex items-center gap-5 ">
                    <div className="flex items-center justify-center gap-2 mt-4">
                      <Mail size={15} color="rgba(0,0,0,.5)" />
                      <p className="text-gray-700 text-xs font-normal">
                        {companyInfo?.email}
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-3">
                      <Phone size={15} color="rgba(0,0,0,.5)" />
                      <p className="text-gray-700 text-xs font-normal">
                        {companyInfo?.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* -- */}
            <div>
              <AddNewCompany
                parentId={id}
                title="Add Child Company"
                isRoot={0}
                ownerId={companyInfo?.owner_id}
              />
            </div>
          </div>
          {/* === */}
          <div className="flex md:hidden items-center gap-5">
            <div className="flex items-center justify-center gap-2">
              <Mail size={15} color="rgba(0,0,0,.5)" />
              <p className="text-gray-700 text-xs font-normal">
                {isFetching ? "" : companyInfo?.email}
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone size={15} color="rgba(0,0,0,.5)" />
              <p className="text-gray-700 text-xs font-normal">
                {isFetching ? "" : companyInfo?.phone}
              </p>
            </div>
          </div>
          {/* === */}
          <div>
            <div className="flex gap-x-12 h-full">
              <Link href={`${routesPath?.financialOverview}`}>
                <p
                  className={`text-xs font-semibold leading-6 text-gray-900 py-1.5 ${
                    isFinancialOverview
                      ? "border-b-2 border-b-black"
                      : "border-b-2 border-b-transparent"
                  }`}
                >
                  Financial Overview
                </p>
              </Link>
              <Link href={`${routesPath?.assets}`}>
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
              {/* <Link href={`${routesPath?.users}`}>
                <p
                  className={`text-xs font-semibold leading-6 text-gray-900 py-1.5 ${
                    isUsers
                      ? "border-b-2 border-b-black"
                      : "border-b-2 border-b-transparent"
                  }`}
                >
                  Users
                </p>
              </Link> */}
              <Link href={`${routesPath?.drive}`}>
                <p
                  className={`text-xs font-semibold leading-6 text-gray-900 py-1.5 ${
                    isDrive
                      ? "border-b-2 border-b-black"
                      : "border-b-2 border-b-transparent"
                  }`}
                >
                  Drive
                </p>
              </Link>
              <Link href={`${routesPath?.subCompanies}`}>
                <p
                  className={`text-xs font-semibold leading-6 text-gray-900 py-1.5 ${
                    isSubCompanies
                      ? "border-b-2 border-b-black"
                      : "border-b-2 border-b-transparent"
                  }`}
                >
                  Sub Companies
                </p>
              </Link>
              {/* <Link href={`${routesPath?.rolePermissions}`}>
                <p
                  className={`text-xs font-semibold leading-6 text-gray-900 py-1.5 ${
                    isRolePermissions
                      ? "border-b-2 border-b-black"
                      : "border-b-2 border-b-transparent"
                  }`}
                >
                  Role Permissions
                </p>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyBanner;
