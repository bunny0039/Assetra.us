"use client";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import { OwnerMenuPopup } from "./profile/OwnerMenuPopup";
import { useGetUserQuery } from "@/states/services/profileServices";
import CustomAvatarImage from "../shared/CustomAvatarImage";
import { useDispatch } from "react-redux";
import {
  setCurrentOwnerId,
  setOwnerData,
} from "@/states/reducers/companyReducer";

function OwnerProfileHeader() {
  const pathname = usePathname();
  const { id } = useParams();
  const dispatch = useDispatch();

  let isFinancialOverview = pathname.includes("/financial-overview");
  let isAssets = pathname.includes("/assets");
  let isCompanies = pathname.includes("/companies");
  let isUsers = pathname.includes("/users");

  const { data, isFetching } = useGetUserQuery();
  const ownerInfo = data?.data?.user;

  useEffect(() => {
    dispatch(setOwnerData(ownerInfo));
    dispatch(setCurrentOwnerId(id));
  }, [ownerInfo, id]);

  return (
    <>
      <div className="bg-gray-100 px-4 md:px-10 py-8">
        <h1 className="text-gray-700 text-md md:text-xl font-semibold">
          Owner Profile
        </h1>
        <div className="border border-gray-200 mt-3 bg-white rounded-sm md:rounded-lg px-3 md:px-10 pt-3 md:pt-10 flex flex-wrap gap-5 md:gap-7 justify-between md:justify-stretch items-stretch">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3 md:gap-7">
              <CustomAvatarImage
                avatarStyle="relative h-16 md:h-24 w-16 md:w-24 rounded-full overflow-hidden"
                imgPath=""
                imgStyle="rounded-full"
                fallback={ownerInfo?.name[0]}
              />
              <div>
                <p className="text-gray-800 text-md md:text-2xl font-semibold">
                  {ownerInfo?.name}
                </p>
                {ownerInfo?.address && (
                  <div className="flex items-center gap-2 mt-1 md:mt-2">
                    <Image
                      src="/images/owner_icon.svg"
                      alt=""
                      height={16}
                      width={16}
                    />
                    <p className="text-gray-900 text-sm font-medium">
                      {ownerInfo?.address}
                    </p>
                  </div>
                )}

                <div className="hidden md:flex items-center gap-5 ">
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <Mail size={15} color="rgba(0,0,0,.5)" />
                    <p className="text-gray-700 text-xs font-normal">
                      {ownerInfo?.email}
                    </p>
                  </div>
                  {ownerInfo?.phone && (
                    <div className="flex items-center justify-center gap-2 mt-3">
                      <Phone size={15} color="rgba(0,0,0,.5)" />
                      <p className="text-gray-700 text-xs font-normal">
                        {ownerInfo?.phone}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* -- */}
            {/* <div>
              <OwnerMenuPopup />
            </div> */}
          </div>
          {/* === */}
          <div className="flex md:hidden items-center gap-5">
            <div className="flex items-center justify-center gap-2">
              <Mail size={15} color="rgba(0,0,0,.5)" />
              <p className="text-gray-700 text-xs font-normal">
                {ownerInfo?.email}
              </p>
            </div>
            {ownerInfo?.phone && (
              <div className="flex items-center justify-center gap-2">
                <Phone size={15} color="rgba(0,0,0,.5)" />
                <p className="text-gray-700 text-xs font-normal">
                  {ownerInfo?.phone}
                </p>
              </div>
            )}
          </div>
          {/* === */}
          <div>
            <div className="flex gap-x-12 h-full">
              <Link href={`/owner/${id}/financial-overview`}>
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
              <Link href={`/owner/${id}/assets`}>
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
              <Link href={`/owner/${id}/companies`}>
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
              <Link href={`/owner/${id}/users`}>
                <p
                  className={`text-xs font-semibold leading-6 text-gray-900 py-1.5 ${
                    isUsers
                      ? "border-b-2 border-b-black"
                      : "border-b-2 border-b-transparent"
                  }`}
                >
                  Tenants
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OwnerProfileHeader;
