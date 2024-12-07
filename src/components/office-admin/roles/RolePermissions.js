"use client";

import { Switch } from "@/components/ui/switch";
import React, { Suspense, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import TopTabHeaderPermissions from "./TopTabHeaderPermissions";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import {
  useAssignPermissionMutation,
  useGetAllPermissionQuery,
  useGetUserPermissionQuery,
} from "@/states/services/office-admin/permissionServices";
import { toast } from "@/components/ui/use-toast";

function RolePermissions() {
  const searchParams = useSearchParams();
  const userId = searchParams.get("uid");

  const [permissions, setPermissions] = useState([]);
  const [updatedPermissions, setUpdatedPermissions] = useState([]);
  const { data, isFetching } = useGetAllPermissionQuery();
  const { data: userPermissionData, isFetching: userPFetching } =
    useGetUserPermissionQuery({ userId });

  const [assignPermission, { isLoading }] = useAssignPermissionMutation();

  useEffect(() => {
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

  const handlePermissionAssign = () => {
    assignPermission({ user_id: userId, permissions: updatedPermissions })
      .unwrap()
      .then((payload) => {
        console.log("pay=>", payload);
        toast({
          title: "Success/Assign Permission",
          description: "Permission assign successfully",
        });
      })
      .catch((error) => {
        console.log("=>->>>", error);
        toast({
          title: "Error/Assign Permission",
          description: "Permission not assigned. Try again",
        });
      });
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen h-full pb-4 md:pb-20">
      <Suspense fallback={<div>Loading...</div>}>
        <TopTabHeaderPermissions />
      </Suspense>

      <div className="bg-white border border-gray-300 rounded-md p-3 md:p-7 mt-5 md:mt-5 mx-4 md:mx-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-xs md:text-sm font-normal">
              Role Management
            </p>
            <p className="text-gray-800 text-sm md:text-lg font-semibold">
              Permissions
            </p>
          </div>
          {/* <div className="bg-secondary rounded-sm px-3 w-fit h-8 flex justify-center items-center">
            <p className="text-white text-xs md:text-sm font-medium">Add New</p>
          </div> */}
        </div>
        <div className="w-full bg-gray-100 p-3 md:p-5 mt-5 space-y-4 md:space-y-5 rounded-md relative">
          {isLoading && (
            <div className="bg-[rgba(0,0,0,.01)] z-50 w-full h-full absolute top-0 bottom-0 right-0 left-0" />
          )}
          {/* === */}
          {isFetching ? (
            <p className="text-primary text-sm">Permissions Loading...</p>
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
        {/* ============================= */}
        {!isFetching && (
          <div className="flex justify-end mt-8 w-full gap-4">
            {/* {!isLoading && (
              <Button className="bg-white text-primary border border-primary px-5 h-9 font-medium text-xs hover:text-white">
                Cancel
              </Button>
            )} */}
            {isLoading ? (
              <Button disabled className="bg-primary text-white w-fit h-9">
                <Loader2 className="mr-2 h-5 w-5 animate-spin text-white" />
                Please wait...
              </Button>
            ) : (
              <Button
                className="w-fit bg-primary text-white h-9 px-5 font-medium text-xs"
                onClick={() => handlePermissionAssign()}
              >
                Update Permission
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default RolePermissions;
