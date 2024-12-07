import RealEstateCard from "@/components/office-admin/office-admin-shared/RealEstateCard";
import { useGetAllRealEstatesByCompanyIdQuery } from "@/states/services/assets/realEstateServices";
import { useParams } from "next/navigation";
import React from "react";

function RealEstates() {
  const { id } = useParams();

  const { data, isFetching } = useGetAllRealEstatesByCompanyIdQuery({
    companyId: id,
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
                return <RealEstateCard key={item?.id} item={item} from="COM" />;
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
