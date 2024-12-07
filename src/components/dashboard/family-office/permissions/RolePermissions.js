import { Switch } from "@/components/ui/switch";
import React from "react";
import TopTabHeaderPermissions from "./TopTabHeaderPermissions";
import { Button } from "@/components/ui/button";

function RolePermissions() {
  return (
    <div className="bg-gray-100 w-full min-h-screen h-full pb-4 md:pb-20">
      <TopTabHeaderPermissions />

      <div className="bg-white border border-gray-300 rounded-md p-3 md:p-7 mt-6 md:mt-10 mx-4 md:mx-20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-xs md:text-sm font-normal">
              Management
            </p>
            <p className="text-gray-800 text-sm md:text-lg font-semibold">
              Role Management
            </p>
          </div>
          <div className="bg-secondary rounded-sm px-3 w-fit h-8 flex justify-center items-center">
            <p className="text-white text-xs md:text-sm font-medium">Add New</p>
          </div>
        </div>
        <div className="w-full bg-gray-100 p-3 md:p-5 mt-5 space-y-4 md:space-y-5 rounded-md">
          {/* === */}
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-700 text-xs md:text-sm font-medium">
              Create Company
            </p>
            <div>
              <Switch />
            </div>
          </div>
          {/* === */}
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-700 text-xs md:text-sm font-medium">
              View Drive
            </p>
            <div>
              <Switch />
            </div>
          </div>
          {/* === */}
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-700 text-xs md:text-sm font-medium">
              Edit Drive
            </p>
            <div>
              <Switch />
            </div>
          </div>
          {/* === */}
          {/* === */}
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-700 text-xs md:text-sm font-medium">
              View Role
            </p>
            <div>
              <Switch />
            </div>
          </div>
          {/* === */}
          {/* === */}
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-700 text-xs md:text-sm font-medium">
              Edit Role
            </p>
            <div>
              <Switch />
            </div>
          </div>
          {/* === */}

          {/* === */}
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-700 text-xs md:text-sm font-medium">
              View Employee
            </p>
            <div>
              <Switch />
            </div>
          </div>
          {/* === */}
          {/* === */}
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-700 text-xs md:text-sm font-medium">
              Edit Employee
            </p>
            <div>
              <Switch />
            </div>
          </div>
          {/* === */}
          {/* === */}
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-700 text-xs md:text-sm font-medium">
              View Owners
            </p>
            <div>
              <Switch />
            </div>
          </div>
          {/* === */}
          {/* === */}
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-700 text-xs md:text-sm font-medium">
              Edit Owners
            </p>
            <div>
              <Switch />
            </div>
          </div>
          {/* === */}
          {/* === */}
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-700 text-xs md:text-sm font-medium">
              View Tenants
            </p>
            <div>
              <Switch />
            </div>
          </div>
          {/* === */}
          {/* === */}
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-700 text-xs md:text-sm font-medium">
              Edit Tenants
            </p>
            <div>
              <Switch />
            </div>
          </div>
          {/* === */}
        </div>
        {/* ============================= */}
        <div className="flex justify-end mt-8 w-full gap-4">
          <Button className="bg-white text-primary border border-primary px-5 h-9 font-medium text-xs">
            Cancel
          </Button>
          <Button className="bg-primary  h-9 px-5 font-medium text-xs">
            Update Permission
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RolePermissions;
