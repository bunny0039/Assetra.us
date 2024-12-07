import FinancialOverviewCard from "@/components/office-admin/office-admin-shared/FinancialOverviewCard";
import { BanksDataTable } from "@/components/office-admin/office-admin-shared/transactionTable/banksTable/BanksDataTable";
import { banksColumn } from "@/components/office-admin/office-admin-shared/transactionTable/banksTable/banksColumn";
import { useGetAllBanksByCompanyIdQuery } from "@/states/services/assets/bankServices";
import { useGetFinancialOverviewByCompanyQuery } from "@/states/services/companyServices";
import { useParams } from "next/navigation";
import React from "react";

function BanksAccounts() {
  const { id } = useParams();
  const { data, isFetching } = useGetAllBanksByCompanyIdQuery({
    companyId: id,
  });
  const { data: dataInfo, isFetching: isLoading } =
    useGetFinancialOverviewByCompanyQuery({
      id,
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
            amount={isLoading ? 0 : dataInfo?.networth}
          />
          <FinancialOverviewCard
            title="Cash In Hand"
            amount={isLoading ? 0 : dataInfo?.cashInHand}
          />
          <FinancialOverviewCard
            title="Debit"
            amount={isLoading ? 0 : dataInfo?.debit}
          />
          <FinancialOverviewCard
            title="Monthly Income"
            amount={isLoading ? 0 : dataInfo?.monthlyIncome}
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
            data={isFetching ? [] : data?.data}
            isFetching={isFetching}
          />
        </div>
      </div>
    </div>
  );
}

export default BanksAccounts;
