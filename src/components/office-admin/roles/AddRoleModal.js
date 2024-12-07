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
import { Switch } from "@/components/ui/switch";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { bankSchema } from "@/lib/validationSchema/userSchema";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { useGetAllCompaniesQuery } from "@/states/services/companyServices";
import { Label } from "@/components/ui/label";
import { useGetTenantsQuery } from "@/states/services/usersServices";
import { toast } from "@/components/ui/use-toast";
import { useAddBanksMutation } from "@/states/services/assets/bankServices";
import { CompaniesDropDown } from "@/components/shared/CompaniesDropDown";
import { SelectDropDownCustom } from "@/components/shared/SelectDropDownCustom";
import {
  useAddRoleMutation,
  useGetAllPermissionQuery,
  useGetAssignedPermissionToRoleQuery,
  useGetUserPermissionQuery,
} from "@/states/services/office-admin/permissionServices";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import Loader from "@/components/shared/Loader";
import { useSelector } from "react-redux";

export function AddRoleModal({
  openDialog,
  setOpenDialog,
  adminId,
  selectedData,
}) {
  const [roleName, setRoleName] = useState("");
  const [permissions, setPermissions] = useState([]);
  const [updatedPermissions, setUpdatedPermissions] = useState([]);
  const [addRole, { isLoading }] = useAddRoleMutation();
  const { data, isFetching } = useGetAllPermissionQuery();
  const { userData } = useSelector((state) => state.authReducer);
  const { data: userPermissionData, isFetching: userPFetching } =
    useGetAssignedPermissionToRoleQuery({ roleId: selectedData?.id });

  useEffect(() => {
    setRoleName(selectedData?.name);
    const dataArray = [];
    const processedIds = new Set();

    // Add permissions from userPermissionData with granted=true
    userPermissionData?.data?.forEach((uPermission) => {
      dataArray.push({
        id: uPermission.id,
        granted: true,
        name: uPermission.name,
      });
      // Add processed ID to the set
      processedIds.add(uPermission.id);
    });
    setUpdatedPermissions([...processedIds]);

    // Add permissions from data with granted=false if not already added
    data?.data?.forEach((permission) => {
      if (!processedIds.has(permission.id)) {
        dataArray.push({
          id: permission.id,
          granted: false,
          name: permission.name,
        });
      }
    });

    // Sort dataArray based on id
    dataArray.sort((a, b) => parseInt(a?.id) - parseInt(b?.id));

    setPermissions(dataArray);
  }, [data, userPermissionData]);

  const handleToggle = (permissionName, permissionId) => {
    const response = permissions?.map((permission) => {
      if (permission?.name === permissionName) {
        return { ...permission, granted: !permission?.granted };
      }
      return permission;
    });
    setPermissions(response);

    if (!updatedPermissions?.includes(permissionId)) {
      setUpdatedPermissions([...updatedPermissions, permissionId]);
    } else {
      let filteredResult = updatedPermissions?.filter(
        (item) => item !== permissionId
      );
      setUpdatedPermissions(filteredResult);
    }
  };

  const handleAssignRole = () => {
    if (!roleName) {
      toast({
        title: "Error/Required",
        description: "Role name connot be empty",
      });
    } else if (updatedPermissions?.length < 1) {
      toast({
        title: "Error/Required",
        description: "Atleast one permission should be assigned",
      });
    } else {
      addRole({
        name: roleName,
        admin_office_id: userData?.id,
        permissions: updatedPermissions,
      })
        .unwrap()
        .then((payload) => {
          setOpenDialog(false);
          toast({
            title: "Success/Add Role",
            description: "Role created successfully",
          });
        })
        .catch((error) => {
          console.log("=>->>>error while adding role", error);
          toast({
            title: "Error/Add Role",
            description: error?.data?.message
              ? error?.data?.message
              : "Something went wrong",
          });
        });
    }
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
            <p className="font-semibold text-md text-black">Add New Role</p>
            <MdClose
              onClick={handleCloseDialog}
              className="h-5 w-5 text-gray-600 cursor-pointer hover:text-black"
            />
          </div>
          <DialogDescription>
            <div className="my-1">
              <div>
                <Label>Role Name</Label>
                <Input
                  type="text"
                  className="h-8 mt-1.5"
                  placeholder=""
                  value={roleName}
                  onChange={(e) => setRoleName(e.target.value)}
                />
              </div>
              <div className="bg-white border border-gray-300 rounded-md p-3 mt-5 max-h-72 overflow-y-scroll">
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 text-sm md:text-lg font-semibold">
                    Permissions
                  </p>
                </div>
                <div className="w-full bg-gray-100 p-3 md:p-5 mt-2 space-y-4 md:space-y-5 rounded-md relative">
                  {isLoading && (
                    <div className="bg-[rgba(0,0,0,.01)] z-50 w-full h-full absolute top-0 bottom-0 right-0 left-0" />
                  )}
                  {/* === */}
                  {isFetching ? (
                    <p className="text-primary text-sm">
                      <Loader title="Permissions Loading..." />
                    </p>
                  ) : (
                    <>
                      {permissions?.map((item) => {
                        return (
                          <div
                            key={item?.id}
                            className="w-full flex items-center justify-between"
                          >
                            <div className="flex items-center gap-1">
                              <p className="text-gray-700 text-xs md:text-sm font-medium capitalize">
                                {item?.name?.split(".")[1]}
                              </p>
                              <p className="text-gray-700 text-xs md:text-sm font-medium capitalize">
                                {item?.name?.split(".")[0]}
                              </p>
                            </div>
                            <div>
                              <Switch
                                checked={item?.granted}
                                onCheckedChange={() =>
                                  handleToggle(item?.name, item?.id)
                                }
                              />
                            </div>
                          </div>
                        );
                      })}
                    </>
                  )}

                  {/* === */}
                </div>
              </div>
              {/* ============================= */}

              {!isFetching && (
                <div className="flex justify-end mt-8 w-full gap-4">
                  {isLoading ? (
                    <Button
                      disabled
                      className="bg-primary text-white w-fit h-9"
                    >
                      <Loader2 className="mr-2 h-5 w-5 animate-spin text-white" />
                      Please wait...
                    </Button>
                  ) : (
                    <Button
                      className="w-fit bg-primary text-white h-9 px-5 font-medium text-xs"
                      onClick={() => handleAssignRole()}
                    >
                      Save Role
                    </Button>
                  )}
                </div>
              )}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
