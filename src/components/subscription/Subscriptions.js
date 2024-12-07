"use client";

import React from "react";
import SubscriptionCard from "./SubscriptionCard";
import ProfileHeader from "../shared/ProfileHeader";
import Link from "next/link";
import { useGetAllPlansQuery } from "@/states/services/plansServices";
import { useSelector } from "react-redux";

function Subscriptions() {
  const { isUserLoggedIn, userData } = useSelector(
    (state) => state.authReducer
  );
  const { data, isFetching } = useGetAllPlansQuery();

  return (
    <div className="bg-gray-50 min-h-full md:min-h-screen">
      <ProfileHeader />
      {/* ================== */}
      <div className="w-full flex flex-col justify-center items-center pt-10">
        <div className="text-center">
          <h1 className="font-semibold text-gray-900 text-md md:text-xl uppercase">
            Subscription Plans
          </h1>
          <h6 className="font-medium text-gray-700 text-xs md:text-lg">
            Choose the plan that best suits your needs
          </h6>
          {isUserLoggedIn && userData?.role === "superadmin" && (
            <div className="mt-4">
              <Link
                href="/subscription/add-new-plan"
                className="font-medium text-xs text-primary hover:underline"
              >
                Add New Package
              </Link>
            </div>
          )}
        </div>
        {isFetching ? (
          <div className="w-full flex justify-center items-center gap-4 mt-20">
            <div
              class="animate-spin inline-block size-6 border-[2px] border-current border-t-transparent text-primary rounded-full"
              role="status"
              aria-label="loading"
            >
              <span class="sr-only">Fetching Packages...</span>
            </div>
            <p className="text-md font-medium text-gray-500 tracking-wider">
              Loading...
            </p>
          </div>
        ) : (
          <>
            {data?.data?.length > 0 ? (
              <div className="flex flex-col md:flex-row px-4 md:px-10 w-full  md:justify-around mt-16 md:mt-24 pb-16 space-y-10 md:space-y-0">
                {data?.data?.map((item, index) => {
                  return (
                    <SubscriptionCard
                      active={index === 1}
                      item={item}
                      userData={userData}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="w-full flex justify-center items-center mt-20">
                <p className="text-md font-medium text-gray-500 tracking-wider">
                  No Package
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Subscriptions;
