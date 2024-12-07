import React from "react";
import FinancialOverviewCard from "../../office-admin-shared/FinancialOverviewCard";
import { BanksDataTable } from "../../office-admin-shared/transactionTable/banksTable/BanksDataTable";
import { banksColumn } from "../../office-admin-shared/transactionTable/banksTable/banksColumn";
import { useGetAllBanksByOwnerIdQuery } from "@/states/services/assets/bankServices";
import { useParams } from "next/navigation";
import { useGetOwnerFinancialOverviewQuery } from "@/states/services/office-admin/rootCompanyServices";

function BankAccounts() {
  const { id } = useParams();

  const { data, isFetching } = useGetOwnerFinancialOverviewQuery({
    ownerId: id,
  });

  const { data: currentData, isFetching: isLoading } =
    useGetAllBanksByOwnerIdQuery({
      ownerId: id,
    });

  return (
    <div className="mt-6 w-full">
      <div className="bg-transparent mt-8">
        <p className="text-gray-700 text-md md:text-xl font-semibold">
          Bank Account Overview
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
      <div className="w-full flex-1 bg-transparent mt-8">
        <p className="text-gray-700 text-md md:text-xl font-semibold">
          All Bank Accounts
        </p>
        <div className="w-full flex items-center justify-between mt-2.5 md:mt-4">
          <BanksDataTable
            columns={banksColumn}
            data={isLoading ? [] : currentData?.data}
            isFetching={isLoading}
          />
        </div>
      </div>
    </div>
  );
}

export default BankAccounts;
