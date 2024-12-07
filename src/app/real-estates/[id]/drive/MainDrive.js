"use client";

import Drive from "@/components/real-estates/drive/Drive";
import { useGetDrivesByCompanyAndReactEstateIdQuery } from "@/states/services/assets/driveServices";
import { useParams } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

function MainDrive() {
  const { id } = useParams();
  const { currentCompanyId } = useSelector((state) => state.companyReducer);

  const { data, isFetching } = useGetDrivesByCompanyAndReactEstateIdQuery({
    companyId: currentCompanyId,
    realEstateId: id,
  });

  return (
    <div className="bg-gray-100 px-4 md:px-10 pb-16">
      <Drive
        data={data?.data}
        isFetching={isFetching}
        currentCompanyId={currentCompanyId}
      />
    </div>
  );
}

export default MainDrive;
