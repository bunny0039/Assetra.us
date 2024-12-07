"use client";
import { Mail, Phone, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import { useGetEmployeeDetailsQuery } from "@/states/services/usersServices";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserPermissionQuery } from "@/states/services/office-admin/permissionServices";
import { setEmployeePermission } from "@/states/reducers/permissionReducer";
import Loader from "../shared/Loader";

function EmployeeProfileHeader() {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.authReducer);

  let isData = userData?.id ? { employeeId: userData?.id } : undefined;
  let isSkip = userData?.id ? false : true;

  const { data, isFetching } = useGetEmployeeDetailsQuery(isData, {
    skip: isSkip,
  });

  const dataInfo = data?.data;

  let isCompanies = pathname.includes(`/employee/companies`);
  let isOwners = pathname.includes(`/employee/owners`);
  let isTenants = pathname.includes(`/employee/tenants`);

  const { data: permissions, isFetching: permissionFetching } =
    useGetUserPermissionQuery(
      { userId: userData?.id ? userData?.id : undefined },
      {
        skip: isSkip,
      }
    );

  useEffect(() => {
    if (permissions?.data) {
      dispatch(setEmployeePermission(permissions?.data));
    }
  }, [permissions]);

  let loading = isFetching ? isFetching : permissionFetching;

  return (
    <>
      {loading && (
        <div className="absolute h-full w-full bg-[rgba(0,0,0,.05)] z-50 flex justify-center items-center">
          <div className="bg-white shadow-lg rounded-lg p-4 h-12 w-fit flex justify-center items-center border">
            <Loader title="Loading..." />
          </div>
        </div>
      )}
      <div className="bg-gray-100 px-4 md:px-10 py-8">
        <h1 className="text-gray-700 text-md md:text-xl font-semibold">
          Employee Profile
        </h1>

        <div className="border border-gray-200 mt-3 bg-white rounded-sm md:rounded-lg px-3 md:px-10 pt-3 md:pt-10 flex flex-wrap gap-5 md:gap-7 justify-between md:justify-stretch items-stretch">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3 md:gap-7">
              <div className="relative h-16 md:h-24 w-16 md:w-24 rounded-full overflow-hidden flex justify-center items-center border text-white border-primary bg-gray-500">
                <p className="text-white text-md md:text-2xl font-semibold">
                  {dataInfo?.name[0]}
                </p>
              </div>

              <div>
                <p className="text-gray-800 text-md md:text-2xl font-semibold">
                  {dataInfo?.name}
                </p>

                <div className="hidden md:flex items-center gap-5 ">
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <Mail size={15} color="rgba(0,0,0,.5)" />
                    <p className="text-gray-700 text-xs font-normal">
                      {dataInfo?.email}
                    </p>
                  </div>
                  {/* <div className="flex items-center justify-center gap-2 mt-3">
                    <Phone size={15} color="rgba(0,0,0,.5)" />
                    <p className="text-gray-700 text-xs font-normal">
                      alex@gmail.com
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
            {/* -- */}
            <div>{/* <OwnerMenuPopup /> */}</div>
          </div>
          {/* === */}
          <div className="flex md:hidden items-center gap-5">
            <div className="flex items-center justify-center gap-2">
              <Mail size={15} color="rgba(0,0,0,.5)" />
              <p className="text-gray-700 text-xs font-normal">
                {dataInfo?.email}
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone size={15} color="rgba(0,0,0,.5)" />
              <p className="text-gray-700 text-xs font-normal">
                {dataInfo?.email}
              </p>
            </div>
          </div>
          {/* === */}
          <div>
            <div className="flex gap-x-12 h-full">
              <Link href={`/employee/companies`}>
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
              <Link href={`/employee/owners`}>
                <p
                  className={`text-xs font-semibold leading-6 text-gray-900 py-1.5 ${
                    isOwners
                      ? "border-b-2 border-b-black"
                      : "border-b-2 border-b-transparent"
                  }`}
                >
                  Owners
                </p>
              </Link>
              <Link href={`/employee/tenants`}>
                <p
                  className={`text-xs font-semibold leading-6 text-gray-900 py-1.5 ${
                    isTenants
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

export default EmployeeProfileHeader;
