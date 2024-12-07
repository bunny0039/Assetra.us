"use client";

import { routes } from "@/routes/routes";
import { Bell } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { OwnerProfileDropdown } from "./OwnerProfileDropdown";

function OwnerNavbar() {
  const pathname = usePathname();
  const { isUserLoggedIn, userData } = useSelector(
    (state) => state.authReducer
  );

  return (
    <>
      <header className="bg-white">
        <nav
          className="mx-auto flex w-full items-center justify-between px-4 md:px-10 border-b py-3"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <span className="sr-only">Assetra</span>
            <img className="h-7 md:h-8 w-auto" src="/images/logo.svg" alt="" />
          </div>
          <div className="flex lg:flex-1 lg:justify-end items-center gap-8">
            <div>
              <Bell size={20} color="rgba(0,0,0,.7)" />
            </div>
            {isUserLoggedIn && (
              <div className="flex items-center justify-center gap-3">
                <div className="hidden md:flex md:flex-col">
                  <p className="text-gray-500 text-xs font-semibold capitalize text-right">
                    {userData?.role === "owner" ? "Company Owner" : "Employee"}
                  </p>
                  <p className="text-black text-xs font-semibold text-right">
                    {userData && userData?.userName}
                  </p>
                </div>

                <OwnerProfileDropdown />
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default OwnerNavbar;
