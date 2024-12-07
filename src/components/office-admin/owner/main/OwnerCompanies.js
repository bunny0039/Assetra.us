"use client";

import React from "react";
import CompanyCard from "../../company/CompanyCard";
import { useGetAllCompaniesByOwnerQuery } from "@/states/services/office-admin/rootCompanyServices";
import { useParams } from "next/navigation";
import Loader from "@/components/shared/Loader";

function OwnerCompanies() {
  const { id } = useParams();
  const { data, isFetching } = useGetAllCompaniesByOwnerQuery({
    ownerId: id,
  });

  return (
    <div className="px-4 md:px-10">
      <div className="w-full flex justify-between items-center">
        <p className="text-gray-700 text-md md:text-xl font-semibold capitalize">
          Companies
        </p>
      </div>
      <div className="grid grid-cols-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {isFetching ? (
          <Loader />
        ) : (
          <>
            {data?.data?.length < 1 ? (
              <div className="w-full gap-2">
                <p className="text-gray-700 text-sm md:text-sm font-medium capitalize">
                  No company found
                </p>
                <p className="text-gray-500 text-sm md:text-sm">
                  This owner has no company
                </p>
              </div>
            ) : (
              <>
                {data?.data?.map((item) => {
                  return <CompanyCard key={item?.id} item={item} />;
                })}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default OwnerCompanies;
