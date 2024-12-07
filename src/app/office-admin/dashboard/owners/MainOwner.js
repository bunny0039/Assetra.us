"use client";

import React from "react";
import { Search } from "lucide-react";
import { InputWithRightIcon } from "@/components/ui/inputWithRightIocn";
import OwnerCard from "@/components/office-admin/owner/OwnerCard";
import Loader from "@/components/shared/Loader";
import { useGetOwnersQuery } from "@/states/services/usersServices";
import { AddNewCompanyOwner } from "@/components/office-admin/owner/AddNewCompanyOwner";
import { AddNewUser } from "@/components/dashboard/family-office/users/AddNewUser";

function MainOwners() {
  const { data, isFetching } = useGetOwnersQuery();

  return (
    <div className="w-full bg-gray-100 pb-20 min-h-[90vh]">
      <div className="bg-white w-full px-4 md:px-10 md:flex md:justify-end md:items-center py-3">
        <InputWithRightIcon
          type="text"
          placeholder="Search"
          IconName={Search}
          className="bg-gray-100 w-full md:w-72 h-9"
        />
      </div>
      {/* ===== */}
      <div className="bg-transparent px-4 md:px-10 mt-6 md:mt-8">
        <div className="w-full flex justify-between items-center">
          <p className="text-gray-700 text-md md:text-xl font-semibold capitalize">
            Owners
          </p>
          <AddNewUser type="owner" />
        </div>
        <div className="w-full flex justify-center items-center mt-2.5 md:mt-4">
          <div className="w-full border border-gray-300 rounded-lg md:rounded-xl p-2 md:p-5 flex flex-wrap gap-5 md:gap-7 justify-between md:justify-stretch items-stretch">
            {isFetching ? (
              <Loader />
            ) : (
              <>
                {data?.data?.length > 0 ? (
                  <>
                    {data?.data?.map((item) => {
                      return (
                        <OwnerCard
                          key={item?.id}
                          item={item}
                          routePath="/office-admin/dashboard/owners"
                        />
                      );
                    })}
                  </>
                ) : (
                  <div className="w-full flex justify-center items-center h-20">
                    <p>No data found</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainOwners;
