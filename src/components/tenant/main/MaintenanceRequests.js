"use client";
import LoadingButton from "@/components/shared/LoadingButton";
import { SelectInput } from "@/components/shared/customInputs/SelectInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { issueSchema } from "@/lib/validationSchema/userSchema";
import FormTextArea from "@/components/shared/customInputs/FormTextArea";
import { FaCircleCheck } from "react-icons/fa6";
import { RiErrorWarningFill } from "react-icons/ri";
import { ChevronRight } from "lucide-react";
import CustomFileInput from "@/components/dashboard/owners/ownerProfile/profileCompanies/drive/CustomFileInput";
import FormTextInput from "@/components/shared/customInputs/FormTextInput";
import {
  useCreateMaintenanceRequestMutation,
  useGetMaintenanceQuery,
} from "@/states/services/assets/maintenanceServices";
import { toast } from "@/components/ui/use-toast";
import { useSelector } from "react-redux";
import { useGetTenantDetailsQuery } from "@/states/services/usersServices";
import { useGetAllRealEstatesByCompanyIdQuery } from "@/states/services/assets/realEstateServices";
import { format } from "date-fns";
import Loader from "@/components/shared/Loader";

function MaintenanceRequests() {
  let isFetching = false;
  const [file, setFile] = useState(null);
  const [createMaintenanceRequest, { isLoading }] =
    useCreateMaintenanceRequestMutation();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(issueSchema),
  });

  const { isUserLoggedIn, userData } = useSelector(
    (state) => state.authReducer
  );

  const { data } = useGetTenantDetailsQuery({
    tenantId: userData?.id,
  });

  let skip = data?.data?.company_id ? false : true;
  let sendData = data?.data?.company_id
    ? {
        companyId: data?.data?.company_id,
      }
    : undefined;

  const { data: realEstateData } = useGetAllRealEstatesByCompanyIdQuery(
    sendData,
    {
      skip: skip,
    }
  );

  let realEstateId =
    realEstateData &&
    realEstateData?.data?.find((item) => item?.tenant_id === userData?.id);

  const { data: requestData, isFetching: reuestFetching } =
    useGetMaintenanceQuery({ realEstateId: realEstateId?.id });

  const onSubmit = (data) => {
    let realEstateId = realEstateData?.data?.find(
      (item) => item?.tenant_id === userData?.id
    );
    const { description, issue, category, price } = data;
    const formData = new FormData();

    formData.append("attachments", file);
    formData.append("real_estate_id", realEstateId?.id);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("type", issue);
    formData.append("price", price);

    createMaintenanceRequest({
      description,
      type: issue,
      category,
      price,
      real_estate_id: realEstateId?.id,
    })
      .unwrap()
      .then((payload) => {
        toast({
          title: "Success/Maintenance Request",
          description: "Maintenance request sent successfully",
        });
        reset({
          category: "",
          issue: "",
          price: "",
          description: "",
        });
      })
      .catch((error) => {
        console.log("Maintenance Error=>", error);
        toast({
          title: "Error/Maintenance Request",
          description: error?.data?.message
            ? error?.data?.message
            : "Something went wrong, maintenance request failed",
        });
      });
  };

  return (
    <main className="px-4 md:px-10 py-6 md:py-12 bg-gray-50 min-h-screen">
      <div>
        <div className="flex items-center gap-3">
          <p className="text-gray-700 uppercase font-semibold text-md md:text-lg">
            Raise an Issue
          </p>
        </div>
        <div className="mt-4 md:mt-7 bg-white rounded-md border border-gray-100 p-3 md:p-5">
          <div>
            <p className="text-gray-700 font-medium text-sm">
              Please select category before selecting issue
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-3 mt-1.5 md:mt-0"
            >
              <div className="flex flex-col md:flex-row gap-2 md:gap-5 w-full">
                <div className="w-full">
                  <SelectInput
                    name="category"
                    control={control}
                    data={
                      isFetching
                        ? []
                        : [
                            { id: 1, title: "Preventive maintenance" },
                            { id: 2, title: "Electrical Problems" },
                            { id: 3, title: "Leaky Faucets" },
                            { id: 4, title: "Corrective Maintenance" },
                            { id: 5, title: "Pest Control" },
                          ]
                    }
                    isFetching={isFetching}
                    placeholder="Category"
                  />
                  <p className="text-[10px] text-red-600 font-medium mt-1">
                    {errors?.category?.message}
                  </p>
                </div>
                <div className="w-full">
                  <SelectInput
                    name="issue"
                    control={control}
                    data={
                      isFetching
                        ? []
                        : [
                            {
                              id: 1,
                              title: "Inspect plumbing fixtures and systems",
                            },
                            { id: 2, title: "Service air conditioners" },
                            {
                              id: 3,
                              title:
                                "Test smoke and recharge fire extinguishers",
                            },
                            {
                              id: 4,
                              title: "Clean window wells and gutters",
                            },
                            {
                              id: 5,
                              title: "Seal gaps in windows, doors, and walls",
                            },
                          ]
                    }
                    isFetching={isFetching}
                    placeholder="Issue"
                  />
                  <p className="text-[10px] text-red-600 font-medium mt-1">
                    {errors?.issue?.message}
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-5 w-full">
                <div className="w-full">
                  <FormTextArea
                    type="text"
                    name="description"
                    label=""
                    register={register}
                    errorMessage={errors?.description?.message}
                    placeholder="Can you elaborate more on the issue"
                    maxHeight="max-h-[160px] min-h-[160px]"
                    marginTop="mt-0"
                  />
                </div>
                <div className="w-full">
                  <CustomFileInput file={file} setFile={setFile} />
                </div>
              </div>
              <div>
                <FormTextInput
                  type="number"
                  name="price"
                  label=""
                  register={register}
                  errorMessage={errors?.price?.message}
                  placeholder="Price"
                />
              </div>
              <div className="w-full flex justify-end items-end mt-8">
                <div className="w-fit">
                  <LoadingButton title="POST ISSUE" isLoading={isLoading} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-7 md:mt-12">
        <div className="flex items-center gap-3">
          <p className="text-gray-700 uppercase font-semibold text-md md:text-lg">
            Past Issues
          </p>
        </div>
        <div className="mt-4 md:mt-7 space-y-5">
          {reuestFetching ? (
            <Loader />
          ) : (
            <>
              {requestData?.data?.length > 0 ? (
                <>
                  {requestData?.data?.map((item) => {
                    return (
                      <div className="bg-white border rounded-md">
                        <div className="flex justify-between items-center border-b border-gray-200 p-3 md:p-5">
                          <p className="text-gray-900 font-semibold text-xs md:text-md">
                            {item?.type}
                          </p>
                          <p className="text-gray-900 font-semibold text-xs hidden md:flex">
                            id-{item?.id}
                          </p>
                          <p className="text-gray-600 font-medium text-xs hidden md:flex">
                            Last Updated:{" "}
                            {format(new Date(item?.updated_at), "PPp")}
                          </p>
                          <div className="flex items-center gap-2">
                            <p className="text-gray-700 font-semibold text-xs md:text-sm capitalize">
                              {item?.status}
                            </p>
                            {item?.status === "pending" && (
                              <RiErrorWarningFill color="#FF9100" size={18} />
                              // <FaCircleCheck color="#4ade80" size={14} />
                            )}
                          </div>
                        </div>
                        {/* -- */}
                        <div className="flex items-center gap-5 px-3 pt-3 md:hidden">
                          <p className="text-gray-900 font-semibold text-sm md:hidden flex">
                            id-{item?.id}
                          </p>
                          <p className="text-gray-900 font-semibold text-xs md:hidden flex">
                            Last Updated:{` `}{" "}
                            {format(new Date(item?.updated_at), "PPp")}
                          </p>
                        </div>
                        <div className="p-3 md:p-5 py-4 md:py-7">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1">
                              <p className="text-gray-700 font-medium text-sm md:text-md">
                                {item?.category}
                              </p>
                              <ChevronRight color="rgba(0,0,0,.6)" size={15} />
                              <p className="text-gray-500 font-medium text-sm">
                                {item?.type}
                              </p>
                            </div>
                            <p className="text-gray-700 font-medium text-xs md:text-sm">
                              Created At:{" "}
                              {format(new Date(item?.created_at), "PPp")}
                            </p>
                          </div>
                          <p className="text-gray-700 font-normal mt-4 text-sm">
                            {item?.description}
                          </p>
                        </div>
                        {/* -- */}
                      </div>
                    );
                  })}
                </>
              ) : (
                <div>
                  <p className="text-gray-700 text-sm text-medium">
                    No past issue found
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default MaintenanceRequests;
