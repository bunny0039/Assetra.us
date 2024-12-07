"use client";

import { routes } from "@/routes/routes";
import { Bell } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TenantProfileDropdown } from "./TenantProfileDropdown";

function TenantNavbar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const { isUserLoggedIn, userData } = useSelector(
    (state) => state.authReducer
  );

  const routesPath = {
    leaseContract: routes.TENANT_LEASE_CONTRACT,
    payment: routes.TENANT_PAYMENT,
    maintenance: routes.TENANT_MAINTENANCE_REQUESTS,
  };

  const handleNavBarToggle = () => {
    setShow(!show);
  };

  let isLeaseContract = pathname.includes(`${routesPath.leaseContract}`);
  let isPayment = pathname.includes(`${routesPath.payment}`);
  let isMaintenance = pathname.includes(`${routesPath.maintenance}`);

  return (
    <>
      <header className="bg-white">
        <nav
          className="mx-auto flex w-full items-center justify-between px-4 md:px-10 border-b py-3 md:py-0"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href={`${routesPath.leaseContract}`} className="-m-1.5 p-1.5">
              <span className="sr-only">Assetra</span>
              <img
                className="h-7 md:h-8 w-auto"
                src="/images/logo.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="flex items-center gap-6 lg:hidden">
            <div className="h-8 w-8 flex justify-center items-center rounded-full bg-gray-100">
              <Bell size={18} color="rgba(0,0,0,.7)" />
            </div>
            <button
              type="button"
              onClick={handleNavBarToggle}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 h-full">
            <Link href={`${routesPath?.leaseContract}`}>
              <p
                className={`text-sm font-semibold leading-6 text-gray-900 py-3 ${
                  isLeaseContract
                    ? "border-b-2 border-b-black"
                    : "border-b-2 border-b-transparent"
                }`}
              >
                Lease Contract
              </p>
            </Link>
            <Link href={`${routesPath?.payment}`}>
              <p
                className={`text-sm font-semibold leading-6 text-gray-900 py-3 ${
                  isPayment
                    ? "border-b-2 border-b-black"
                    : "border-b-2 border-b-transparent"
                }`}
              >
                Payment
              </p>
            </Link>
            <Link href={`${routesPath?.maintenance}`}>
              <p
                className={`text-sm font-semibold leading-6 text-gray-900 py-3 ${
                  isMaintenance
                    ? "border-b-2 border-b-black"
                    : "border-b-2 border-b-transparent"
                }`}
              >
                Maintenance Requests
              </p>
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-8">
            <div>
              <Bell size={20} color="rgba(0,0,0,.7)" />
            </div>
            {isUserLoggedIn && (
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-gray-500 text-xs font-semibold capitalize text-right">
                    Tenant
                  </p>
                  <p className="text-black text-xs font-semibold text-right">
                    {userData && userData?.userName}
                  </p>
                </div>
                <TenantProfileDropdown />
              </div>
            )}
          </div>
        </nav>
        {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
        <div
          className={`${show ? "flex" : "hidden"} lg:hidden`}
          role="dialog"
          aria-modal="true"
        >
          {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between border-b px-4 pb-4">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">assetra</span>
                <img className="h-8 w-auto" src="/images/logo.svg" alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={handleNavBarToggle}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-3 flow-root">
              <div className="-my-6 divide-y divide-gray-200 px-4">
                <div className="space-y-2 py-6">
                  <Link href={`${routesPath?.leaseContract}`}>
                    <p
                      className={`text-sm font-semibold leading-6 px-3 text-gray-900 py-3 ${
                        isLeaseContract
                          ? "bg-gray-100 rounded-md"
                          : "bg-transparent"
                      }`}
                      onClick={handleNavBarToggle}
                    >
                      Lease Contract
                    </p>
                  </Link>
                  <Link href={`${routesPath?.payment}`}>
                    <p
                      className={`text-sm font-semibold leading-6 px-3 text-gray-900 py-3 ${
                        isPayment ? "bg-gray-100 rounded-md" : "bg-transparent"
                      }`}
                      onClick={handleNavBarToggle}
                    >
                      Payment
                    </p>
                  </Link>
                  <Link href={`${routesPath?.maintenance}`}>
                    <p
                      className={`text-sm font-semibold leading-6 px-3 text-gray-900 py-3 ${
                        isMaintenance
                          ? "bg-gray-100 rounded-md"
                          : "bg-transparent"
                      }`}
                      onClick={handleNavBarToggle}
                    >
                      Maintenance Requests
                    </p>
                  </Link>
                </div>
                <div className="py-6">
                  {isUserLoggedIn && (
                    <div className="flex items-center gap-3">
                      <TenantProfileDropdown />
                      <div>
                        <p className="text-gray-500 text-xs font-medium">
                          {userData && userData?.role}
                        </p>
                        <p className="text-black text-sm font-semibold mt-1">
                          {userData && userData?.userName}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default TenantNavbar;
