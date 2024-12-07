"use client";
import { Mail, Phone, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";
import { useSelector } from "react-redux";

function RealEstateTopBanner() {
  const pathname = usePathname();
  const router = useRouter();
  const { currentCompanyId, currentOwnerId } = useSelector(
    (state) => state.companyReducer
  );

  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  let isPropertDeatils = pathname.includes("/property-details");
  let isDrive = pathname.includes("/drive");
  let isFinancialOverview = pathname.includes("/financial-overview");
  let isTenantsManagement = pathname.includes("/tenants-management");

  const handleGoBack = () => {
    if (from === "FO") {
      router.push("/office-admin/dashboard/family-office/assets");
    } else if (from === "COM") {
      router.push(`/office-admin/dashboard/company/${currentCompanyId}/assets`);
    } else if (from === "OWN") {
      router.push(`/office-admin/dashboard/owners/${currentOwnerId}/assets`);
    } else if (from === "OWNER") {
      router.push(`/owner/${currentOwnerId}/assets`);
    } else if (from === "OWNCOM") {
      router.push(
        `/owner/${currentOwnerId}/companies/${currentCompanyId}/assets`
      );
    } else {
      router.back();
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="bg-gray-100 px-4 md:px-10 py-8">
        <div className="flex items-center gap-4">
          <div
            className="h-8 w-8 bg-white rounded-full flex justify-center items-center border cursor-pointer"
            onClick={handleGoBack}
          >
            <BsArrowLeft color="rgba(0,0,0,.6)" size={20} />
          </div>
          <h1 className="text-gray-700 text-md md:text-xl font-semibold">
            Real Estate
          </h1>
        </div>
        <div className="mt-5">
          <div className="flex gap-x-12 h-full">
            <Link href={`property-details?from=${from}`}>
              <p
                className={`text-xs font-semibold leading-6 text-gray-900 py-1.5 ${
                  isPropertDeatils
                    ? "border-b-2 border-b-black"
                    : "border-b-2 border-b-transparent"
                }`}
              >
                Property Details
              </p>
            </Link>
            <Link href={`drive?from=${from}`}>
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
            <Link href={`financial-overview?from=${from}`}>
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
            <Link href={`tenants-management?from=${from}`}>
              <p
                className={`text-xs font-semibold leading-6 text-gray-900 py-1.5 ${
                  isTenantsManagement
                    ? "border-b-2 border-b-black"
                    : "border-b-2 border-b-transparent"
                }`}
              >
                Tenants Management
              </p>
            </Link>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default RealEstateTopBanner;
