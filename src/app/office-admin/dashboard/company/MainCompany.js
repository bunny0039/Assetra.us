"use client";

import { AddNewCompany } from "@/components/office-admin/company/AddNewCompany";
import CompanyCard from "@/components/office-admin/company/CompanyCard";
import Loader from "@/components/shared/Loader";
import { InputWithRightIcon } from "@/components/ui/inputWithRightIocn";
import { useGetAllCompaniesQuery } from "@/states/services/companyServices";
import { Search } from "lucide-react";

function MainCompany() {
  const { data, isFetching } = useGetAllCompaniesQuery();

  return (
    <div>
      <div className="bg-white w-full px-4 md:px-10 flex flex-col md:flex-row md:justify-end md:items-center py-3 gap-6 md:gap-0">
        <InputWithRightIcon
          type="text"
          placeholder="Search"
          IconName={Search}
          className="bg-gray-100 w-full md:w-72 h-9"
        />
      </div>
      <div className="w-full bg-gray-100 px-4 md:px-10 py-10 min-h-[90vh]">
        <div className="w-full flex justify-between items-center">
          <p className="text-gray-700 text-md md:text-xl font-semibold capitalize">
            Companies
          </p>
          <AddNewCompany />
        </div>
        <div className="grid grid-cols-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
          {isFetching ? (
            <Loader />
          ) : (
            <>
              {data?.data?.map((item) => {
                return <CompanyCard key={item?.id} item={item} />;
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainCompany;
