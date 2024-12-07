import FinancialOverviewCard from "@/components/office-admin/office-admin-shared/FinancialOverviewCard";
import { useGetFinancialOverviewByOwnerIdQuery } from "@/states/services/transaction/transactionServices";
import React from "react";
import { useSelector } from "react-redux";

function FinancialOverview() {
  const { userData } = useSelector((state) => state.companyReducer);
  console.log("=>", userData);
  // const { data, isFetching } = useGetFinancialOverviewByOwnerIdQuery()

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-4 md:gap-7 mt-2.5 md:mt-4">
        {/* <FinancialOverviewCard
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
        /> */}
      </div>
    </div>
  );
}

export default FinancialOverview;
