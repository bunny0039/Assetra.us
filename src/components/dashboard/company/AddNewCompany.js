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
import { companySchema } from "@/lib/validationSchema/userSchema";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useGetOwnersQuery } from "@/states/services/usersServices";
import { toast } from "@/components/ui/use-toast";
import { useAddCompanyMutation } from "@/states/services/companyServices";
import { OwnersList } from "./OwnersList";

export function AddNewCompany() {
  const [openDialog, setOpenDialog] = useState(false);
  const { data, isFetching } = useGetOwnersQuery();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(companySchema),
  });
  const [addCompanyAPI, { isLoading }] = useAddCompanyMutation();

  const onSubmit = (data) => {
    addCompanyAPI(data)
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
          description: "error?.data?.message",
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
      <DialogContent className="rounded-md max-w-sm sm:max-w-md py-3">
        {isLoading && (
          <div className="bg-[rgba(0,0,0,0.01)] absolute top-0 right-0 bottom-0 left-0 z-50" />
        )}

        <DialogHeader>
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold text-md text-black">Add New Company</p>
            <MdClose
              onClick={handleCloseDialog}
              className="h-5 w-5 text-gray-600 cursor-pointer hover:text-black"
            />
          </div>
          <DialogDescription>
            <div className="my-2">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-3 space-y-3 text-left"
              >
                <div>
                  <OwnersList
                    name="owner_id"
                    control={control}
                    data={isFetching ? [] : data?.data}
                    isFetching={isFetching}
                  />
                  <p className="text-[10px] text-red-600 font-medium mt-1">
                    {errors?.owner_id?.message}
                  </p>
                </div>

                <FormTextInput
                  type="text"
                  name="name"
                  label="Company Name"
                  register={register}
                  errorMessage={errors?.name?.message}
                />
                <LoadingButton title="Save" isLoading={isLoading} />
              </form>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
