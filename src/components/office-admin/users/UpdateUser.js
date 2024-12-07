"use client";

import LoadingButton from "@/components/shared/LoadingButton";
import FormTextInput from "@/components/shared/customInputs/FormTextInput";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SelectUserType } from "./SelectUserType";
import { roleSchema, userSchema } from "@/lib/validationSchema/userSchema";
import { MdClose } from "react-icons/md";
import { useUpdateUserMutation } from "@/states/services/usersServices";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { SelectRoleType } from "./SelectRoleType";
import {
  useAssignRoleMutation,
  useGetRolesQuery,
} from "@/states/services/office-admin/permissionServices";

export function UpdateUser({ openDialog, setOpenDialog, selectedData, from }) {
  const { userData } = useSelector((state) => state.authReducer);
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      selectedData?.user_role === "employee" ? roleSchema : userSchema
    ),
  });
  const { data, isFetching } = useGetRolesQuery();
  const [updateUserAPI, { isLoading }] = useUpdateUserMutation();
  const [updateRole, { isLoading: isUpdating }] = useAssignRoleMutation();

  useEffect(() => {
    setValue("role", selectedData?.role, { shouldValidate: true });
    setValue("user_role", selectedData?.user_role, { shouldValidate: true });
    setValue("name", selectedData?.name, { shouldValidate: true });
    setValue("email", selectedData?.email, { shouldValidate: true });
  }, [selectedData]);

  console.log("selectedData", selectedData);

  const onSubmit = (data) => {
    if (selectedData?.user_role === "employee") {
      updateRole({ role_id: data?.role, employee_id: selectedData?.id })
        .unwrap()
        .then((payload) => {
          console.log("pay=>", payload);
          setOpenDialog(false);
          toast({
            title: "Success/Assign Role",
            description: "Role assigned successfully",
          });
        })
        .catch((error) => {
          console.log("=>->>>", error);
          toast({
            title: "Error/Assign Role",
            description: "Role not assign. Try again",
          });
        });
    } else {
      updateUserAPI({ ...data, userId: userData?.id })
        .unwrap()
        .then((payload) => {
          // console.log("pay=>", payload);
          setOpenDialog(false);
          toast({
            title: "Success/Update User",
            description: "User updated successfully",
          });
        })
        .catch((error) => {
          console.log("=>->>>", error);
          toast({
            title: "Error/Update User",
            description: "User not update. Try again",
          });
        });
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Dialog open={openDialog}>
      <Toaster />
      <DialogContent className="rounded-md max-w-sm sm:max-w-md py-3">
        {isLoading
          ? isLoading
          : isUpdating && (
              <div className="bg-[rgba(0,0,0,0.01)] absolute top-0 right-0 bottom-0 left-0 z-50" />
            )}

        <DialogHeader>
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold text-md text-black">Update User</p>
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
                {selectedData?.user_role === "employee" && (
                  <div>
                    <SelectRoleType
                      name="role"
                      control={control}
                      defaultValue={
                        selectedData?.role ? selectedData?.role?.toString() : ""
                      }
                      data={data?.data || []}
                    />
                    <p className="text-[10px] text-red-600 font-medium mt-1">
                      {errors?.role?.message}
                    </p>
                  </div>
                )}
                {/* <div>
                  <SelectUserType
                    name="user_role"
                    control={control}
                    from={from}
                    defaultValue={selectedData?.user_role}
                  />
                  <p className="text-[10px] text-red-600 font-medium mt-1">
                    {errors?.user_role?.message}
                  </p>
                </div> */}

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
                <LoadingButton
                  title="Save"
                  isLoading={isLoading ? isLoading : isUpdating}
                />
              </form>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
