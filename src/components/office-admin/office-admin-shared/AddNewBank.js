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
import { bankSchema } from "@/lib/validationSchema/userSchema";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useGetAllCompaniesQuery } from "@/states/services/companyServices";
import { Label } from "@/components/ui/label";
import { useGetTenantsQuery } from "@/states/services/usersServices";
import { toast } from "@/components/ui/use-toast";
import { useAddBanksMutation } from "@/states/services/assets/bankServices";
import { CompaniesDropDown } from "@/components/shared/CompaniesDropDown";
import { SelectDropDownCustom } from "@/components/shared/SelectDropDownCustom";

export function AddNewBank({ rootCompanyId }) {
  const [openDialog, setOpenDialog] = useState(false);
  const { data, isFetching } = useGetAllCompaniesQuery();
  const { data: tenantData, isFetching: isTenantFetching } =
    useGetTenantsQuery();
  const [addBank, { isLoading }] = useAddBanksMutation();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bankSchema),
  });

  const onSubmit = (data) => {
    // console.log(data);
    addBank({ company_id: rootCompanyId, ...data })
      .unwrap()
      .then((payload) => {
        setOpenDialog(false);
        toast({
          title: "Success/Add Bank",
          description: "Bank created successfully",
        });
      })
      .catch((error) => {
        console.log("=>->>>", error);
        toast({
          title: "Error/Add Bank",
          description: error?.data?.message
            ? error?.data?.message
            : "Something went wrong",
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
        Add New
      </Button>
      <DialogContent className="rounded-md max-w-3xl py-3">
        {isLoading && (
          <div className="bg-[rgba(0,0,0,0.01)] absolute top-0 right-0 bottom-0 left-0 z-50" />
        )}

        <DialogHeader>
          <div className="flex items-center justify-between mb-1">
            <p className="font-semibold text-md text-black">Add New Bank</p>
            <MdClose
              onClick={handleCloseDialog}
              className="h-5 w-5 text-gray-600 cursor-pointer hover:text-black"
            />
          </div>
          <DialogDescription>
            <div className="my-1">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-1 text-left "
              >
                <div className="flex justify-between gap-5">
                  {/* <div className="w-full">
                    <Label className="text-xs">Select Company</Label>
                    <CompaniesDropDown
                      name="company_id"
                      control={control}
                      data={isFetching ? [] : data?.data}
                      isFetching={isFetching}
                    />
                    <p className="text-[10px] text-red-600 font-medium mt-1">
                      {errors?.company_id?.message}
                    </p>
                  </div> */}

                  <FormTextInput
                    type="text"
                    name="name"
                    label="Name"
                    register={register}
                    errorMessage={errors?.name?.message}
                  />
                </div>
                <div className="flex justify-between gap-5">
                  <FormTextInput
                    type="text"
                    name="account_number"
                    label="Account Number"
                    register={register}
                    errorMessage={errors?.account_number?.message}
                  />
                  <div className="w-full">
                    <Label className="text-xs">Status</Label>
                    <SelectDropDownCustom
                      name="status"
                      control={control}
                      data={["Pending", "Active", "InActive"]}
                      isFetching={false}
                    />
                    <p className="text-[10px] text-red-600 font-medium mt-1">
                      {errors?.status?.message}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between gap-5">
                  <FormTextInput
                    type="text"
                    name="balance"
                    label="Balance"
                    register={register}
                    errorMessage={errors?.balance?.message}
                  />

                  <div className="w-full">
                    <Label className="text-xs">Type</Label>
                    <SelectDropDownCustom
                      name="type"
                      control={control}
                      data={["Business", "Normal"]}
                      isFetching={false}
                    />
                    <p className="text-[10px] text-red-600 font-medium mt-1">
                      {errors?.type?.message}
                    </p>
                  </div>
                </div>
                <div className="w-full flex justify-end items-end">
                  <div className="w-fit">
                    <LoadingButton title="Save" isLoading={isLoading} />
                  </div>
                </div>
              </form>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
