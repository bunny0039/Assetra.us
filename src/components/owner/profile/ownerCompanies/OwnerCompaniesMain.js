"use client";

import React from "react";
import { useGetCompaniesByOwnerQuery } from "@/states/services/companyServices";
import { useSelector } from "react-redux";
import CompanyCard from "@/components/office-admin/company/CompanyCard";
import Loader from "@/components/shared/Loader";
import { AddNewCompanyOwner } from "@/components/office-admin/owner/AddNewCompanyOwner";

function OwnerCompaniesMain() {
  const { ownerData } = useSelector((state) => state.companyReducer);

  const { data, isFetching } = useGetCompaniesByOwnerQuery({
    ownerId: ownerData?.id,
    companyId: ownerData?.company_id,
  });

  return (
    <div className="px-4 md:px-10">
      <div className="w-full flex justify-between items-center">
        <p className="text-gray-700 text-md md:text-xl font-semibold capitalize">
          Companies
        </p>
        <AddNewCompanyOwner
          ownerId={ownerData?.id}
          parentId={ownerData?.company_id}
        />
      </div>
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
                    companyRoute={`/owner/${ownerData?.id}/companies/${item?.id}/financial-overview`}
                  />
                );
              })
            ) : (
              <p className="text-primary font-medium text-sm">No data found</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default OwnerCompaniesMain;
