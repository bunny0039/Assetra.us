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
import { tenantSchema, userSchema } from "@/lib/validationSchema/userSchema";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useAddUserMutation } from "@/states/services/usersServices";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useAssignTenantToRealEstateMutation } from "@/states/services/assets/realEstateServices";

export function AddNewTenant({ rootCompanyId, realEstateId }) {
  const [openDialog, setOpenDialog] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(tenantSchema),
  });
  const [addUserAPI, { isLoading }] = useAddUserMutation();
  const [assignTenantAPI, { isLoading: assigning }] =
    useAssignTenantToRealEstateMutation();

  const onSubmit = (data) => {
    const userData = {
      ...data,
      user_role: "tenant",
      company_id: rootCompanyId,
    };
    addUserAPI(userData)
      .unwrap()
      .then((payload) => {
        console.log("payload user id ==>>>", payload?.data?.id);
        assignTenant(payload?.data?.id);
      })
      .catch((error) => {
        console.log("=>->>>", error);
        toast({
          title: "Error/Assign Tenant",
          description: "Something went wrong",
        });
      });
  };

  const assignTenant = (tenantId) => {
    assignTenantAPI({ tenant_id: tenantId, real_estate_id: realEstateId })
      .unwrap()
      .then((payload) => {
        console.log("pay=>", payload);
        setOpenDialog(false);
        toast({
          title: "Success/Assign Tenant",
          description: "Tenant assigned successfully",
        });
      })
      .catch((error) => {
        console.log("=>->>>", error);
        toast({
          title: "Error/Assign Tenant",
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

  let loading = isLoading ? isLoading : assigning;

  return (
    <Dialog open={openDialog}>
      <Toaster />
      <Button
        onClick={handleOpenDialog}
        className="bg-secondary h-9 gap-2 text-xs md:text-sm text-white w-fit md:px-5"
      >
        Assign Tenant
      </Button>
      <DialogContent className="rounded-md max-w-sm sm:max-w-md py-3">
        {loading && (
          <div className="bg-[rgba(0,0,0,0.01)] absolute top-0 right-0 bottom-0 left-0 z-50" />
        )}

        <DialogHeader>
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold text-md text-black">
              Add & Assign Tenant
            </p>
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
                <LoadingButton title="Save" isLoading={loading} />
              </form>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
