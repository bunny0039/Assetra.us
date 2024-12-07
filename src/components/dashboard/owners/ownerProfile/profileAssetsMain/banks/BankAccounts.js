import React from "react";
import FinancialOverviewCard from "../../../FinancialOverviewCard";
import { bankAccountColumns } from "./bankAccountColumns";
import { DataTable } from "@/components/shared/tables/data-table";

const data = [
  {
    id: "728ed52f",
    ownerName: "Alex Wong",
    type: "Business Account",
    accountSince: "10 Jan 2024",
    accountBalance: "$19000",
    bankName: "BOA",
    status: "Active",
  },
  {
    id: "728ed52f",
    ownerName: "Alex Wong",
    type: "Business Account",
    accountSince: "10 Jan 2024",
    accountBalance: "$19000",
    bankName: "BOA",
    status: "Active",
  },
  {
    id: "728ed52f",
    ownerName: "Alex Wong",
    type: "Business Account",
    accountSince: "10 Jan 2024",
    accountBalance: "$19000",
    bankName: "BOA",
    status: "Active",
  },
  {
    id: "728ed52f",
    ownerName: "Alex Wong",
    type: "Business Account",
    accountSince: "10 Jan 2024",
    accountBalance: "$19000",
    bankName: "BOA",
    status: "Active",
  },
];

function BankAccounts() {
  return (
    <div className="mt-6 w-full">
      <div className="bg-transparent mt-8">
        <p className="text-gray-700 text-md md:text-xl font-semibold">
          Bank Account Overview
        </p>
        <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-4 md:gap-7 mt-2.5 md:mt-4">
          <FinancialOverviewCard index={0} />
          <FinancialOverviewCard />
          <FinancialOverviewCard />
          <FinancialOverviewCard />
        </div>
      </div>
      {/* ===== */}
      <div className="w-full flex-1 bg-transparent mt-8">
        <p className="text-gray-700 text-md md:text-xl font-semibold">
          All Bank Accounts
        </p>
        <div className="w-full flex items-center justify-between mt-2.5 md:mt-4">
          <DataTable columns={bankAccountColumns} data={data} />
        </div>
      </div>
    </div>
  );
}

export default BankAccounts;
