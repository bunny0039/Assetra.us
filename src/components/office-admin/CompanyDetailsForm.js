"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { routes } from "@/routes/routes";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { rootCompanySchema } from "@/lib/validationSchema/authSchema";

import { useDispatch } from "react-redux";
import { useToast } from "../ui/use-toast";
import FormTextInput from "../shared/customInputs/FormTextInput";
import LoadingButton from "../shared/LoadingButton";
import { setCompanyDetailsReducer } from "@/states/reducers/companyReducer";

function CompanyDetailsForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { toast } = useToast();
  let isLoading = false;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(rootCompanySchema),
  });

  const onSubmit = (data) => {
    console.log("data=>", data);
    dispatch(setCompanyDetailsReducer(data));
    toast({
      title: "Success/Add Company Deatils",
      description: "Company details saved successfully",
    });
    router.push("/office-admin/add-owner-details");
  };

  return (
    <div className="flex flex-col justify-center w-full h-full items-center py-0 md:py-5">
      <div className="px-4 md:px-0 w-full md:w-80 flex justify-center items-center">
        <Image
          src="/images/logo.svg"
          height={70}
          width={100}
          className="object-contain"
        />
      </div>
      <div className="px-4 py-6 md:py-4 bg-white border border-gray-100 rounded-lg mt-4 w-96 relative">
        {isLoading && (
          <div className="bg-[rgba(0,0,0,0.01)] w-full h-full absolute top-0 left-0 z-50 rounded-lg" />
        )}
        <h1 className="font-semibold text-xl text-gray-700">Company Details</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-2 space-y-2.5">
          <FormTextInput
            type="text"
            name="company_name"
            label="Name"
            register={register}
            errorMessage={errors?.company_name?.message}
          />
          <FormTextInput
            type="text"
            name="company_email"
            label="Email"
            register={register}
            errorMessage={errors?.company_email?.message}
          />
          <div className="flex gap-3">
            <FormTextInput
              type="text"
              name="company_phone"
              label="Phone No"
              register={register}
              errorMessage={errors?.company_phone?.message}
            />
            <FormTextInput
              type="number"
              name="company_size"
              label="Company Size"
              register={register}
              errorMessage={errors?.company_size?.message}
            />
          </div>
          <FormTextInput
            type="text"
            name="company_address"
            label="Location"
            register={register}
            errorMessage={errors?.company_address?.message}
          />
          <LoadingButton title="Continue" isLoading={isLoading} />
        </form>
      </div>
    </div>
  );
}

export default CompanyDetailsForm;
