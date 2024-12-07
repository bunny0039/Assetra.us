"use client";
import React from "react";
import FinancialOverviewCard from "../../FinancialOverviewCard";
import { TransactionTable } from "../../TransactionTable";

function ProfileFinancialOverviewMain() {
  return (
    <div className="px-4 md:px-10">
      {/* ===== */}
      <div className="bg-transparent mt-2">
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
      <div className="bg-transparent mt-8">
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

export default ProfileFinancialOverviewMain;
