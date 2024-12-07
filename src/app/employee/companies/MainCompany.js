"use client";

import { AddNewCompany } from "@/components/office-admin/company/AddNewCompany";
import CompanyCard from "@/components/office-admin/company/CompanyCard";
import Loader from "@/components/shared/Loader";
import { InputWithRightIcon } from "@/components/ui/inputWithRightIocn";
import { useGetAllCompaniesQuery } from "@/states/services/companyServices";
import { Search } from "lucide-react";
import { useSelector } from "react-redux";

function MainCompany() {
  const { employeePermission } = useSelector(
    (state) => state.permissionReducer
  );

  let company = employeePermission && employeePermission["manage_company"];

  let dataSend = company
    ? company?.companies_view
      ? "12"
      : undefined
    : undefined;
  let skipAPI = company ? (company?.companies_view ? false : true) : true;

  const { data, isFetching } = useGetAllCompaniesQuery(dataSend, {
    skip: skipAPI,
  });

  return (
    <div>
      <div className="w-full bg-gray-100 px-4 md:px-10 min-h-[90vh]">
        <div className="w-full flex justify-between items-center">
          <p className="text-gray-700 text-md md:text-xl font-semibold capitalize">
            Companies
          </p>
          {company ? company?.company_create ? <AddNewCompany /> : "" : ""}
        </div>
        {company ? (
          company?.companies_view ? (
            <div className="grid grid-cols-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
              {isFetching ? (
                <Loader />
              ) : (
                <>
                  {data?.data?.length > 0 ? (
                    data?.data?.map((item) => {
                      return (
                        <CompanyCard
                          key={item?.id}
                          item={item}
                          company={company}
                          from="employee"
                        />
                      );
                    })
                  ) : (
                    <div className="bg-red-100 border border-red-700 rounded-md p-4 mt-5 w-full">
                      <p className="text-red-700 text-xs font-medium">
                        No company assigned to you
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          ) : (
            <div className="bg-red-100 border border-red-700 rounded-md p-4 mt-5 w-full">
              <p className="text-red-700 text-xs font-medium">
                You don't have the necessary permissions to view the list of
                companies.
              </p>
            </div>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default MainCompany;
