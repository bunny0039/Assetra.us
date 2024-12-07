"use client";

import Drive from "@/components/real-estates/drive/Drive";
import { useGetDrivesByCompanyAndReactEstateIdQuery } from "@/states/services/assets/driveServices";
import { useParams } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

function MainDrive() {
  const { id } = useParams();

  // const { data, isFetching } = useGetDrivesByCompanyAndReactEstateIdQuery({
  //   companyId: currentCompanyId,
  //   realEstateId: id,
  // });

  const d = [
    {
      id: "1",
      name: "Test file",
      created_at: "678767",
      actions: "22",
    },
  ];

  return (
    <div className="bg-gray-100 px-4 md:px-10 pb-16">
      <Drive data={d} isFetching={false} companyId={id} />
    </div>
  );
}

export default MainDrive;
