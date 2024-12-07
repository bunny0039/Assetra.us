"use client";

import React from "react";
import OwnerCard from "./OwnerCard";
import { Loader2, Search } from "lucide-react";
import FinancialOverviewCard from "./FinancialOverviewCard";
import { TransactionTable } from "./TransactionTable";
import { useGetOwnersQuery } from "@/states/services/usersServices";
import { InputWithRightIcon } from "@/components/ui/inputWithRightIocn";

function MainOwners() {
  const { data, isFetching } = useGetOwnersQuery();

  return (
    <div className="w-full bg-gray-100 pb-20">
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
        <h1 className="text-gray-700 text-md md:text-xl font-semibold">
          Owners
        </h1>
        <div className="w-full flex justify-center items-center mt-2.5 md:mt-4">
          <div className="w-full border border-gray-300 rounded-lg md:rounded-xl p-2 md:p-5 flex flex-wrap gap-5 md:gap-7 justify-between md:justify-stretch items-stretch">
            {isFetching ? (
              <div className="w-full flex justify-center items-center h-20">
                <Loader2 className="mr-2 h-5 w-5 animate-spin text-primary" />
                <p>Fetching Data...</p>
              </div>
            ) : (
              <>
                {data?.data?.length > 0 ? (
                  <>
                    {data?.data?.map((item) => {
                      return <OwnerCard key={item?.id} item={item} />;
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
      {/* ===== */}
      <div className="bg-transparent px-4 md:px-10 mt-8">
        <p className="text-gray-700 text-md md:text-xl font-semibold">
          Financial Overview
        </p>
        <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-4 md:gap-7 mt-2.5 md:mt-4">
          <FinancialOverviewCard index={0} />
          <FinancialOverviewCard />
          <FinancialOverviewCard />
          <FinancialOverviewCard />
        </div>
      </div>
      {/* ===== */}
      <div className="bg-transparent px-4 md:px-10 mt-8">
        <p className="text-gray-700 text-md md:text-xl font-semibold">
          Transaction History
        </p>
        <div className="flex items-center justify-between mt-2.5 md:mt-4">
          <TransactionTable />
        </div>
      </div>
    </div>
  );
}

export default MainOwners;
