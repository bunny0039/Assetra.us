import RealEstateCard from "@/components/office-admin/office-admin-shared/RealEstateCard";
import { useGetRootCompanyRealEstatesQuery } from "@/states/services/office-admin/rootCompanyServices";
import React from "react";

function RealEstates({ rootCompanyId }) {
  const { data, isFetching } = useGetRootCompanyRealEstatesQuery({
    companyId: rootCompanyId,
  });
  return (
    <div className="mt-6">
      {isFetching ? (
        <div>
          <p className="text-md font-semibold text-primary">Data Loading...</p>
        </div>
      ) : (
        <>
          {data?.data?.length > 0 ? (
            <div className="flex flex-wrap gap-5">
              {data?.data?.map((item) => {
                return <RealEstateCard key={item?.id} item={item} from="FO" />;
              })}
            </div>
          ) : (
            <div>
              <p className="text-md font-semibold text-primary">
                Data not found
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default RealEstates;
