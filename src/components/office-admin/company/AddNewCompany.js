"use client";

import LoadingButton from "@/components/shared/LoadingButton";
import FormTextInput from "@/components/shared/customInputs/FormTextInput";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  ownerCompanySchema,
  childCompanySchema,
  parentCompanySchema,
} from "@/lib/validationSchema/userSchema";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { toast } from "@/components/ui/use-toast";
import { useAddCompanyMutation } from "@/states/services/companyServices";
import { CompaniesDropDown } from "../owner/CompaniesDropDown";
import { Label } from "@/components/ui/label";
import { useGetOwnersQuery } from "@/states/services/usersServices";

export function AddNewCompany({
  parentId,
  title = "Add New Company",
  isRoot = 1,
  ownerId = "",
}) {
  const [openDialog, setOpenDialog] = useState(false);
  const [addCompanyAPI, { isLoading }] = useAddCompanyMutation();

  const { data: ownerData, isFetching: isOwnerFetching } = useGetOwnersQuery();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      isRoot === 0 ? childCompanySchema : parentCompanySchema
    ),
  });

  const onSubmit = (data) => {
    const newDataObj = {
      ...data,
      is_root: isRoot,
    };
    if (isRoot === 0) {
      newDataObj["parent_id"] = parentId;
      newDataObj["owner_id"] = ownerId;
    }

    addCompanyAPI(newDataObj)
      .unwrap()
      .then((payload) => {
        setOpenDialog(false);
        toast({
          title: "Success/Add Company",
          description: "Company created successfully",
        });
      })
      .catch((error) => {
        console.log("=>->>>", error);
        toast({
          title: "Error/Add Company",
          description: error?.data?.message,
        });
      });
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Dialog open={openDialog}>
      <Button
        onClick={handleOpenDialog}
        className="bg-secondary h-9 gap-2 text-xs md:text-sm text-white w-fit md:px-5"
      >
        {title}
      </Button>
      <DialogContent className="rounded-md max-w-sm sm:max-w-md py-3">
        {isLoading && (
          <div className="bg-[rgba(0,0,0,0.01)] absolute top-0 right-0 bottom-0 left-0 z-50" />
        )}

        <DialogHeader>
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold text-md text-black">{title}</p>
            <MdClose
              onClick={handleCloseDialog}
              className="h-5 w-5 text-gray-600 cursor-pointer hover:text-black"
            />
          </div>
          <DialogDescription>
            <div className="my-2">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-1.5 space-y-3 text-left"
              >
                {isRoot !== 0 && (
                  <div className="w-full">
                    <Label className="text-xs">Select Owner</Label>
                    <CompaniesDropDown
                      name="owner_id"
                      control={control}
                      data={isOwnerFetching ? [] : ownerData?.data}
                      isFetching={isOwnerFetching}
                    />
                    <p className="text-[10px] text-red-600 font-medium mt-1">
                      {errors?.owner_id?.message}
                    </p>
                  </div>
                )}
                <FormTextInput
                  type="text"
                  name="name"
                  label="Company Name"
                  register={register}
                  errorMessage={errors?.name?.message}
                />
                {/* <FormTextInput
                  type="text"
                  name="email"
                  label="Email"
                  register={register}
                  errorMessage={errors?.email?.message}
                /> */}
                {/* <div className="flex gap-4">
                  <FormTextInput
                    type="text"
                    name="phone"
                    label="Phone Number"
                    register={register}
                    errorMessage={errors?.phone?.message}
                  />
                  <FormTextInput
                    type="number"
                    name="company_size"
                    label="Company Size"
                    register={register}
                    errorMessage={errors?.company_size?.message}
                  />
                </div> */}
                {/* <FormTextInput
                  type="text"
                  name="address"
                  label="Address"
                  register={register}
                  errorMessage={errors?.address?.message}
                /> */}

                <LoadingButton title="Save" isLoading={isLoading} />
              </form>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
