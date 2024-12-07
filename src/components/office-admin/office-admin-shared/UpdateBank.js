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
import { updateBankSchema } from "@/lib/validationSchema/userSchema";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { useUpdateBankMutation } from "@/states/services/assets/bankServices";
import { SelectDropDownCustom } from "@/components/shared/SelectDropDownCustom";

export function UpdateBank({ openDialog, setOpenDialog, selectedData }) {
  console.log("__>>>>>", selectedData);

  const [updateBank, { isLoading }] = useUpdateBankMutation();

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateBankSchema),
  });

  useEffect(() => {
    setValue("name", selectedData?.name, { shouldValidate: true });
    setValue("account_number", selectedData?.account_number, {
      shouldValidate: true,
    });
    setValue("status", selectedData?.status, { shouldValidate: true });
    setValue("balance", selectedData?.balance, { shouldValidate: true });
  }, []);

  const onSubmit = (data) => {
    updateBank({ banksId: selectedData?.id, data })
      .unwrap()
      .then((payload) => {
        setOpenDialog(false);
        toast({
          title: "Success/Update Bank",
          description: "Bank updated successfully",
        });
      })
      .catch((error) => {
        console.log("=>->>>", error);
        toast({
          title: "Error/Update Bank",
          description: error?.data?.message
            ? error?.data?.message
            : "Something went wrong",
        });
      });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Dialog open={openDialog}>
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
                  <FormTextInput
                    type="text"
                    name="name"
                    label="Name"
                    register={register}
                    errorMessage={errors?.name?.message}
                  />
                  <FormTextInput
                    type="text"
                    name="account_number"
                    label="Account Number"
                    register={register}
                    errorMessage={errors?.account_number?.message}
                  />
                </div>
                <div className="flex justify-between gap-5">
                  <div className="w-full">
                    <Label className="text-xs">Status</Label>
                    <SelectDropDownCustom
                      name="status"
                      control={control}
                      data={["Pending", "Active", "InActive"]}
                      isFetching={false}
                      defaultValue={
                        selectedData?.status ? selectedData?.status : ""
                      }
                    />
                    <p className="text-[10px] text-red-600 font-medium mt-1">
                      {errors?.status?.message}
                    </p>
                  </div>
                  <FormTextInput
                    type="text"
                    name="balance"
                    label="Balance"
                    register={register}
                    errorMessage={errors?.balance?.message}
                  />
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
