"use client";
import { useGetAllCompaniesQuery } from "@/states/services/companyServices";
import React from "react";
import { AddNewCompany } from "./AddNewCompany";
import { companyColumns } from "./companyColumn";
import { DataTable } from "@/components/shared/tables/data-table";

function MainCompany() {
  const { data, isFetching } = useGetAllCompaniesQuery();

  return (
    <div className="bg-gray-100 w-full min-h-screen h-full">
      <div className="px-4 md:px-20 pt-5 md:pt-10">
        <div className="flex justify-between items-center">
          <p className="text-gray-700 text-md md:text-lg font-semibold">
            Companies
          </p>
          <AddNewCompany />
        </div>
        <div className="pb-4 md:pb-20 mt-4 w-full">
          <DataTable
            columns={companyColumns}
            data={isFetching ? [] : data?.data}
            isFetching={isFetching}
          />
        </div>
      </div>
    </div>
  );
}

export default MainCompany;
