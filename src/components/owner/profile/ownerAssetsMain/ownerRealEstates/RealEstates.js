import React from "react";
import RealEstateCard from "./RealEstateCard";
import { useGetRealEstatesByOwnerIdQuery } from "@/states/services/assets/realEstateServices";

function RealEstates({ ownerId }) {
  const { data, isFetching } = useGetRealEstatesByOwnerIdQuery({
    ownerId,
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
                return (
                  <RealEstateCard key={item?.id} item={item} from="OWNER" />
                );
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
