"use client";
import FinancialOverviewCard from "@/components/office-admin/office-admin-shared/FinancialOverviewCard";
import { useGetFinancialOverViewRealEstateQuery } from "@/states/services/assets/realEstateServices";
import React from "react";
import { useSelector } from "react-redux";

function MainOverview() {
  const { currentCompanyId } = useSelector((state) => state.companyReducer);
  const { data, isFetching } = useGetFinancialOverViewRealEstateQuery({
    id: currentCompanyId,
  });
  return (
    <div className="bg-gray-100 px-4 md:px-10 pb-16 min-h-screen">
      <div className="w-full flex justify-between items-center">
        <p className="font-semibold text-gray-800 text-md">
          Financial Overview
        </p>
      </div>
      <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-4 md:gap-7 mt-2.5 md:mt-4">
        <FinancialOverviewCard
          index={0}
          title="Networth"
          amount={isFetching ? 0 : data?.networth}
        />
        <FinancialOverviewCard
          title="Cash In Hand"
          amount={isFetching ? 0 : data?.cashInHand}
        />
        <FinancialOverviewCard
          title="Debit"
          amount={isFetching ? 0 : data?.debit}
        />
        <FinancialOverviewCard
          title="Monthly Income"
          amount={isFetching ? 0 : data?.monthlyIncome}
        />
      </div>
    </div>
  );
}

export default MainOverview;
