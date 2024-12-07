"use client";

import React, { Suspense } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import TopTabHeaderPermissions from "./TopTabHeaderPermissions";

function AdvancePermission() {
  const data = [
    {
      id: 1,
      title: "Company 1",
      subCompanies: [
        {
          id: 1,
          subTitle: "Sub Company 1",
        },
        {
          id: 2,
          subTitle: "Sub Company 2",
        },
        {
          id: 3,
          subTitle: "Sub Company 3",
        },
      ],
    },
    {
      id: 2,
      title: "Company 3",
      subCompanies: [
        {
          id: 4,
          subTitle: "Sub Company 1",
        },
        {
          id: 5,
          subTitle: "Sub Company 2",
        },
        {
          id: 6,
          subTitle: "Sub Company 3",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 w-full min-h-screen h-full pb-4 md:pb-20">
      <Suspense fallback={<div>Loading...</div>}>
        <TopTabHeaderPermissions />
      </Suspense>

      <div className="bg-white border border-gray-300 rounded-md p-3 md:p-7 mt-5 mx-4 md:mx-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-xs md:text-sm font-normal">
              Role Management
            </p>
            <p className="text-gray-800 text-sm md:text-lg font-semibold">
              Advance Permissions
            </p>
          </div>
          <div className="bg-secondary rounded-sm px-4 w-fit h-8 flex justify-center items-center">
            <p className="text-white text-xs md:text-sm font-medium">Add New</p>
          </div>
        </div>
        <div className="w-full bg-gray-100 p-3 md:p-5 mt-5 space-y-5 rounded-md">
          {/* === */}
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-700 text-xs md:text-sm font-semibold">
              Create Company
            </p>
            <p className="text-gray-700 text-xs md:text-sm font-semibold">
              Access
            </p>
          </div>

          {/* === */}
          {data?.map((item) => {
            return (
              <div key={item?.id}>
                <div className="w-full flex items-center justify-between">
                  <p className="text-gray-800 text-xs md:text-sm font-semibold">
                    {item?.title}
                  </p>
                  <div>
                    <Switch />
                  </div>
                </div>
                <div className="px-2 md:px-4 mt-2 space-y-2">
                  {item?.subCompanies?.map((subItem) => {
                    return (
                      <div
                        key={subItem?.id}
                        className="w-full flex items-center justify-between"
                      >
                        <p className="text-gray-700 text-xs font-medium">
                          {subItem?.subTitle}
                        </p>
                        <div>
                          <Switch />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          {/* === */}
        </div>
        {/* ============================= */}
        <div className="flex justify-end mt-8 w-full gap-4">
          <Button className="bg-white text-primary border border-primary px-5 h-9 font-medium text-xs hover:text-white">
            Cancel
          </Button>
          <Button className="bg-primary text-white h-9 px-5 font-medium text-xs">
            Update Permission
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AdvancePermission;
