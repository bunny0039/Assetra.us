import React from "react";
import RealEstateCard from "./RealEstateCard";
import { useParams } from "next/navigation";
import { useGetRealEstatesByOwnerIdQuery } from "@/states/services/assets/realEstateServices";

function RealEstates() {
  const { id } = useParams();
  const { data, isFetching } = useGetRealEstatesByOwnerIdQuery({
    ownerId: id,
  });

  console.log("data=>>", id);
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
                return <RealEstateCard key={item?.id} item={item} from="OWN" />;
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
