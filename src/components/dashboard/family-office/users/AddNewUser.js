"use client";

import LoadingButton from "@/components/shared/LoadingButton";
import FormTextInput from "@/components/shared/customInputs/FormTextInput";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SelectUserType } from "./SelectUserType";
import { userSchema } from "@/lib/validationSchema/userSchema";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useAddUserMutation } from "@/states/services/usersServices";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export function AddNewUser({ type = "" }) {
  const [openDialog, setOpenDialog] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });
  const [addUserAPI, { isLoading }] = useAddUserMutation();

  const onSubmit = (data) => {
    // console.log(data);
    addUserAPI(data)
      .unwrap()
      .then((payload) => {
        console.log("pay=>", payload);
        setOpenDialog(false);
        toast({
          title: "Success/Add User",
          description: "User created successfully",
        });
      })
      .catch((error) => {
        console.log("=>->>>", error);
        toast({
          title: "Error/Add User",
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
      <Toaster />
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
            <p className="font-semibold text-md text-black">Add New User</p>
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
                  <SelectUserType
                    name="user_role"
                    control={control}
                    type="owner"
                  />
                  <p className="text-[10px] text-red-600 font-medium mt-1">
                    {errors?.user_role?.message}
                  </p>
                </div>

                <FormTextInput
                  type="text"
                  name="name"
                  label="Name"
                  register={register}
                  errorMessage={errors?.name?.message}
                />
                <FormTextInput
                  type="text"
                  name="email"
                  label="Email"
                  register={register}
                  errorMessage={errors?.email?.message}
                />
                {/* <FormTextInput
                  type="password"
                  name="password"
                  label="Password"
                  register={register}
                  errorMessage={errors?.password?.message}
                />
                <FormTextInput
                  type="password"
                  name="password_confirmation"
                  label="Confirm Pasword"
                  register={register}
                  errorMessage={errors?.password_confirmation?.message}
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
