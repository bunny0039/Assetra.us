"use client";

import React from "react";
import { useSelector } from "react-redux";
import { AddNewUser } from "./AddNewUser";
import { UsersCustomTabs } from "./UsersCustomTabs";

function Users({ from = "" }) {
  return (
    <div className="bg-gray-100 w-full min-h-screen h-full">
      <div className="px-4 md:px-10">
        <div className="flex justify-between items-center">
          <p className="text-gray-700 text-md md:text-lg font-semibold">
            Users
          </p>
          <AddNewUser from={from} />
        </div>
        {/* === Table === */}
        <div className="pb-4 md:pb-20 mt-4 w-full">
          <UsersCustomTabs from={from} />
        </div>
      </div>
    </div>
  );
}

export default Users;
