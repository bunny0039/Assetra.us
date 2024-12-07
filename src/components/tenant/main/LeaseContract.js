"use client";

import { Button } from "@/components/ui/button";
import {
  Calendar,
  CheckCircle,
  Clock,
  Download,
  FilePenLine,
  Share,
  Share2,
  Upload,
} from "lucide-react";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import LeaseContractCard from "../LeaseContractCard";
import { useSelector } from "react-redux";
import { useGetTenantDetailsQuery } from "@/states/services/usersServices";
import { UploadFileModal } from "@/components/real-estates/drive/UploadFileModal";
import { useGetAllRealEstatesByCompanyIdQuery } from "@/states/services/assets/realEstateServices";
import {
  useCreateLeaseContractMutation,
  useGetLeaseContractsQuery,
} from "@/states/services/assets/leaseContractServices";
import { toast } from "@/components/ui/use-toast";

function LeaseContract() {
  const { isUserLoggedIn, userData } = useSelector(
    (state) => state.authReducer
  );
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);

  const { data, isFetching } = useGetTenantDetailsQuery({
    tenantId: userData?.id,
  });

  let skip = data?.data?.company_id ? false : true;
  let sendData = data?.data?.company_id
    ? {
        companyId: data?.data?.company_id,
      }
    : undefined;

  const { data: realEstateData, isFetching: realFetching } =
    useGetAllRealEstatesByCompanyIdQuery(sendData, {
      skip: skip,
    });

  const [createContract, { isLoading }] = useCreateLeaseContractMutation();
  let realEstateId =
    !realFetching &&
    realEstateData?.data?.find((item) => item?.tenant_id === userData?.id);

  const { data: contractData, isFetching: contractFetching } =
    useGetLeaseContractsQuery(realEstateId ? { realEstateId: 5 } : undefined, {
      skip: realEstateId ? false : true,
    });

  // console.log("contractData", contractData);

  const handleUploadContract = () => {
    let realEstateId = realEstateData?.data?.find(
      (item) => item?.tenant_id === userData?.id
    );

    const formData = new FormData();

    formData.append("real_estate_id", realEstateId?.id);
    formData.append("tenant_id", userData?.id);
    formData.append("contract", file);

    createContract(formData)
      .unwrap()
      .then((payload) => {
        setOpen(false);
        toast({
          title: "Success/Lease Contract",
          description: "Lease contract created successfully",
        });
        console.log("payload", payload);
      })
      .catch((error) => {
        console.log("=>", error);
        toast({
          title: "Error/Lease Contract",
          description: error?.data?.message
            ? error?.data?.message
            : "Something went wrong, contract not created",
        });
      });
  };

  return (
    <main className="px-4 md:px-10 py-6 md:py-12 bg-gray-50 min-h-screen">
      <div>
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <p className="text-gray-700 uppercase font-semibold text-sm md:text-xl">
              Lease Contract
            </p>
            <FilePenLine color="rgba(0,0,0,0.7)" size={22} />
          </div>
          <div className="flex items-center gap-3 justify-end md:justify-normal mt-5 md:mt-0">
            <UploadFileModal
              file={file}
              setFile={setFile}
              handleUploadContract={handleUploadContract}
              isLoading={isLoading}
              open={open}
              setOpen={setOpen}
            />
            {/* <Button className="group bg-transparent border border-secondary h-9 gap-2 text-xs md:text-sm text-secondary hover:text-white w-fit md:px-5">
              Download Letter
              <Download
                className="text-gray-700 group-hover:text-white"
                size={16}
              />
            </Button>
            <Button className="bg-secondary h-9 gap-2 text-xs md:text-sm text-white w-fit md:px-5">
              Share
              <Share2 color="#fff" size={16} />
            </Button> */}
          </div>
        </div>
        <div className="bg-white rounded-md border border-gray-100 my-4 md:my-7 flex flex-col md:flex-row">
          <div className="flex-1 px-3 md:px-5 py-5">
            <div className="flex items-center justify-between">
              <p className="text-gray-700 font-medium text-sm md:text-md">
                Contract Details
              </p>
              <p className="text-gray-700 font-normal text-xs md:text-md">
                12 March, 2024
              </p>
            </div>
            <div className="mt-3 md:mt-6">
              <p className="text-gray-600 font-normal text-xs md:text-sm tracking-wider leading-5 md:leading-6">
                No Contract
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LeaseContract;
