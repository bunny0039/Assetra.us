"use client";

import React from "react";
import FinancialOverviewCard from "../../office-admin-shared/FinancialOverviewCard";
import { TransactionDataTable } from "../../office-admin-shared/transactionTable/TransactionDataTable";
import { transactionsColumn } from "../../office-admin-shared/transactionTable/transactionsColumn";
import { useParams } from "next/navigation";
import { useGetFinancialOverviewByOwnerIdQuery } from "@/states/services/transaction/transactionServices";

function OwnerFinancialOverview() {
  const { id } = useParams();

  const { data, isFetching } = useGetFinancialOverviewByOwnerIdQuery({
    ownerId: id,
  });

  return (
    <div className="px-4 md:px-10">
      {/* ===== */}
      <div className="bg-transparent mt-2">
        <p className="text-gray-700 text-md md:text-xl font-semibold">
          Financial Overview
        </p>
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
      {/* ===== */}
      {/* <div className="bg-transparent mt-8">
        <p className="text-gray-700 text-md md:text-xl font-semibold">
          Transaction History
        </p>
        <div className="flex items-center justify-between mt-2.5 md:mt-4">
          <TransactionDataTable
            columns={transactionsColumn}
            data={invoices}
            isFetching={false}
          />
        </div>
      </div> */}
    </div>
  );
}

export default OwnerFinancialOverview;
