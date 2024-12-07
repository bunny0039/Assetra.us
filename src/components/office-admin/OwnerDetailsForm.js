"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { routes } from "@/routes/routes";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { rootOwnerSchema } from "@/lib/validationSchema/authSchema";

import { useDispatch, useSelector } from "react-redux";
import { useToast } from "../ui/use-toast";
import FormTextInput from "../shared/customInputs/FormTextInput";
import LoadingButton from "../shared/LoadingButton";
import { useAddRootCompanyAndOwnerMutation } from "@/states/services/companyServices";
import { setUserAuthData } from "@/states/reducers/authReducer";

function OwnerDetailsForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { companyDetails } = useSelector((state) => state.companyReducer);
  const { toast } = useToast();
  const [addRootCompany, { isLoading }] = useAddRootCompanyAndOwnerMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(rootOwnerSchema),
  });

  const onSubmit = (data) => {
    console.log("data=>", { ...data, ...companyDetails });
    addRootCompany({ ...data, ...companyDetails })
      .unwrap()
      .then((payload) => {
        console.log("payload", payload);
        let localData = JSON.parse(localStorage.getItem("userData"));
        let { hasRootCompany, ...rest } = localData;
        let userData = {
          ...rest,
          hasRootCompany: true,
        };

        localStorage.setItem("userData", JSON.stringify(userData));
        dispatch(setUserAuthData(userData));

        toast({
          title: "Success/Create Company",
          description: "Company created successfully",
        });
        router.replace(
          "/office-admin/dashboard/family-office/1/financial-overview"
        );
      })
      .catch((error) => {
        console.log("=>", error);
        toast({
          title: "Error/Create Company",
          description: error?.data?.message
            ? error?.data?.message
            : "Something went wrong",
        });
      });
  };

  return (
    <div className="flex flex-col justify-center w-full h-full items-center py-0 md:py-5">
      {isLoading && (
        <div className="bg-[rgba(0,0,0,0.01)] w-full h-full absolute top-0 left-0 z-50" />
      )}
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
        <h1 className="font-semibold text-xl text-gray-700">Owner Details</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-2 space-y-2.5">
          <FormTextInput
            type="text"
            name="owner_name"
            label="Name"
            register={register}
            errorMessage={errors?.owner_name?.message}
          />
          <FormTextInput
            type="text"
            name="owner_email"
            label="Email"
            register={register}
            errorMessage={errors?.owner_email?.message}
          />
          <FormTextInput
            type="password"
            name="owner_password"
            label="Password"
            register={register}
            errorMessage={errors?.owner_password?.message}
          />
          <FormTextInput
            type="text"
            name="owner_phone"
            label="Phone No"
            register={register}
            errorMessage={errors?.owner_phone?.message}
          />

          <LoadingButton title="Continue" isLoading={isLoading} />
        </form>
      </div>
    </div>
  );
}

export default OwnerDetailsForm;
