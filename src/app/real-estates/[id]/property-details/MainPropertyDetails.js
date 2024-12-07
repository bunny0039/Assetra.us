"use client";

import { UploadFileModal } from "@/components/real-estates/drive/UploadFileModal";
import { UpdateRealEstates } from "@/components/real-estates/UpdateRealEstate";
import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import { useGetRealEstateQuery } from "@/states/services/assets/realEstateServices";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AssignedTenantModal } from "./AssignedTenantModal";
import {
  useCreateLeaseContractMutation,
  useGetLeaseContractsQuery,
} from "@/states/services/assets/leaseContractServices";
import { toast } from "@/components/ui/use-toast";

function MainPropertyDetails() {
  const { id } = useParams();

  const { data, isFetching } = useGetRealEstateQuery({ realEstateId: id });
  const info = data?.data;

  const { isUserLoggedIn, userData } = useSelector(
    (state) => state.authReducer
  );
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
  const { data: leaseData, isFetching: isGetting } = useGetLeaseContractsQuery({
    realEstateId: id,
  });
  const [createContract, { isLoading }] = useCreateLeaseContractMutation();

  console.log("data>", data);
  let findObj =
    leaseData && leaseData?.data?.find((item) => item?.summary !== null);
  // console.log("--", info?.tenant_id, id, file);

  const handleUploadContract = () => {
    const formData = new FormData();

    formData.append("real_estate_id", id);
    formData.append("tenant_id", info?.tenant_id);
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
    <div className="bg-gray-100 px-4 md:px-10 pb-16">
      <div className="bg-white border border-gray-100 rounded-md p-5 flex gap-5">
        {isFetching ? (
          <Loader />
        ) : (
          <>
            <div className="w-full flex justify-between">
              <div className="">
                <div className="">
                  <p className="text-gray-500 text-xs font-medium">Address</p>
                  <p className="text-gray-800 text-sm font-semibold">
                    {info?.address}
                  </p>
                </div>
                <div className="flex mt-7 items-center gap-5">
                  <p className="text-gray-500 text-xs font-medium">
                    Purchase Rate
                  </p>
                  <p className="text-gray-900 text-xs font-semibold">
                    ${info?.purchase_price}
                  </p>
                </div>
              </div>
              <UpdateRealEstates info={info} />
            </div>
          </>
        )}
      </div>
      {/* ===== */}
      {/* <div className="flex justify-between gap-5 mt-5">
        <div className="flex-1 bg-white border border-gray-100 rounded-md p-5">
          <div className="flex items-center justify-between border-b border-b-gray-200 pb-5">
            <p className="text-gray-900 text-md font-semibold">
              Assigned Tenant
            </p>
            <AssignedTenantModal />
          </div>
          <div className="pt-5"> */}
      {/* <p>No tenant assigned to this real estate</p> */}
      {/* ===== */}
      {/* <div className="flex gap-5 items-center">
              <div className="relative h-16 w-16 rounded-full overflow-hidden bg-gray-500"> */}
      {/* <Image
                src="/images/signup.svg"
                alt=""
                fill
                className="absolute h-full w-full object-cover"
              /> */}
      {/* </div>
              <div>
                <p className="text-gray-600 text-sm font-semibold">
                  Tenant Name
                </p>
                <p className="text-gray-500 text-xs font-medium">
                  tenant email
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* ===== */}
      <div className="flex justify-between gap-5 mt-5">
        <div className="flex-1 bg-white border border-gray-100 rounded-md p-5">
          <p className="text-gray-900 text-md font-semibold">Asset Details</p>
          {isFetching ? (
            <Loader className="mt-5" />
          ) : (
            <div className="mt-3">
              <div className="flex justify-between items-center py-2 border-b">
                <p className="text-gray-500 text-xs font-medium">Square Foot</p>
                <p className="text-gray-900 text-xs font-medium">
                  {info?.square_foot}
                </p>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <p className="text-gray-500 text-xs font-medium">
                  Purchase Date
                </p>
                <p className="text-gray-900 text-xs font-medium">
                  {info?.purchase_date}
                </p>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <p className="text-gray-500 text-xs font-medium">
                  Purchase Price
                </p>
                <p className="text-gray-900 text-xs font-medium">
                  ${info?.purchase_price}
                </p>
              </div>
              <div className="flex justify-between items-center py-2">
                <p className="text-gray-500 text-xs font-medium">Annual Tax</p>
                <p className="text-gray-900 text-xs font-medium">
                  ${info?.annual_tax}
                </p>
              </div>
              {info?.is_financed && (
                <>
                  <p className="text-gray-900 text-md font-semibold mt-5 mb-2">
                    Financed Property
                  </p>
                  <div className="flex justify-between items-center py-2 border-b">
                    <p className="text-gray-500 text-xs font-medium">
                      Amount Financed
                    </p>
                    <p className="text-gray-900 text-xs font-medium">
                      {info?.amount_financed}
                    </p>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <p className="text-gray-500 text-xs font-medium">
                      Rate Of Loan
                    </p>
                    <p className="text-gray-900 text-xs font-medium">
                      {info?.rate_of_loan}
                    </p>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <p className="text-gray-500 text-xs font-medium">
                      Term Of Loan
                    </p>
                    <p className="text-gray-900 text-xs font-medium">
                      {info?.term_of_loan}
                    </p>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainPropertyDetails;
