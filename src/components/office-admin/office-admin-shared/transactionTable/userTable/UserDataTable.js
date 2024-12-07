"use client";

import React, { useMemo, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2 } from "lucide-react";
import { UpdateUser } from "@/components/office-admin/users/UpdateUser";
import { AskForDeleteModal } from "@/components/shared/AskForDeleteModal";
import { useDeleteUserMutation } from "@/states/services/usersServices";
import { toast } from "@/components/ui/use-toast";
import { UploadFileModal } from "@/components/real-estates/drive/UploadFileModal";
import { useCreateLeaseContractMutation } from "@/states/services/assets/leaseContractServices";
import { DisplayLeaseContractModal } from "@/app/real-estates/[id]/tenants-management/DisplayLeaseContractModal";
import { AssignCompanyToEmployeeModal } from "@/components/office-admin/users/AssignCompanyToEmployeeModal";

export function UserDataTable({
  columns,
  data,
  isFetching,
  from = "",
  realEstateId = "",
}) {
  const [rowSelection, setRowSelection] = useState({});
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowLeaseModal, setIsShowLeaseModal] = useState(false);
  const [displayLeaseModal, setDisplayLeaseModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isAssignModalShow, setIsAssignModalShow] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [file, setFile] = useState(null);
  const [deleteUserAPI, { isLoading }] = useDeleteUserMutation();

  const [createContract, { isLoading: isLeaseUploading }] =
    useCreateLeaseContractMutation();

  const handleEdit = (rowData) => {
    setIsShowModal(true);
    setSelectedData(rowData);
  };

  const handleDelete = (rowData) => {
    setIsShowDeleteModal(true);
    setSelectedData(rowData);
  };

  const handleUploadLeaseContract = (rowData) => {
    setIsShowLeaseModal(true);
    setSelectedData(rowData);
  };

  const handleViewLeaseContract = (rowData) => {
    setDisplayLeaseModal(true);
    setSelectedData(rowData);
  };

  const handleAssignCompany = (rowData) => {
    setIsAssignModalShow(true);
    setSelectedData(rowData);
  };

  // Enhance the columns with the action methods
  const enhancedColumns = useMemo(
    () =>
      columns({
        handleEdit,
        handleDelete,
        handleUploadLeaseContract,
        handleViewLeaseContract,
        handleAssignCompany,
      }),
    []
  );

  const table = useReactTable({
    data,
    columns: enhancedColumns,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    state: {
      rowSelection,
    },
  });

  const handleActionYes = () => {
    deleteUserAPI({
      userId: selectedData?.id,
    })
      .unwrap()
      .then(async (payload) => {
        closeModal();
        toast({
          title: "Success/Delete User",
          description: "User has been deleted",
        });
      })
      .catch((error) => {
        console.log("=>error", error);
        toast({
          title: "Error/Delete User",
          description: "User not deleted. Try again",
        });
      });
  };

  const handleUploadContract = () => {
    const formData = new FormData();

    formData.append("real_estate_id", realEstateId);
    formData.append("tenant_id", selectedData?.id);
    formData.append("contract", file);

    createContract(formData)
      .unwrap()
      .then((payload) => {
        setSelectedData(null);
        setIsShowLeaseModal(false);
        toast({
          title: "Success/Lease Contract",
          description: "Lease contract created successfully",
        });
        console.log("payload", payload);
      })
      .catch((error) => {
        console.log("=>", error);
        toast({
          title: "Error/Lease Contract",
          description: error?.data?.message
            ? error?.data?.message
            : "Something went wrong, contract not created",
        });
      });
  };
  const closeModal = () => {
    setIsShowDeleteModal(false);
    setSelectedData(null);
  };

  return (
    <div className="w-full bg-white">
      {isShowDeleteModal && (
        <AskForDeleteModal
          isOpen={isShowDeleteModal}
          closeModal={closeModal}
          handleActionYes={handleActionYes}
          title="Delete User"
          description={`Are you sure, you want to delete this user ${selectedData?.name}?`}
          loader={isLoading}
        />
      )}
      {isShowModal && (
        <UpdateUser
          openDialog={isShowModal}
          setOpenDialog={setIsShowModal}
          selectedData={selectedData}
          from={from}
        />
      )}
      {isShowLeaseModal && (
        <UploadFileModal
          file={file}
          setFile={setFile}
          handleUploadContract={handleUploadContract}
          isLoading={isLeaseUploading}
          open={isShowLeaseModal}
          setOpen={setIsShowLeaseModal}
          isButtonShow={false}
        />
      )}
      {displayLeaseModal && (
        <DisplayLeaseContractModal
          open={displayLeaseModal}
          setOpen={setDisplayLeaseModal}
          selectedData={selectedData}
          realEstateId={realEstateId}
        />
      )}
      {isAssignModalShow && (
        <AssignCompanyToEmployeeModal
          open={isAssignModalShow}
          setOpen={setIsAssignModalShow}
          selectedData={selectedData}
        />
      )}
      <Table>
        <TableHeader className="bg-gray-300">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="bg-gray-300">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className="text-black font-semibold bg-gray-300"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {isFetching ? (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center w-full"
              >
                <div className="flex justify-center">
                  <Loader2 className="mr-2 h-5 w-5 animate-spin text-primary" />
                  <p>Fetching Data...</p>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            <>
              {table?.getRowModel()?.rows?.length ? (
                table.getRowModel()?.rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="text-gray-500">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns?.length}
                    className="h-24 text-center"
                  >
                    No Results
                  </TableCell>
                </TableRow>
              )}
            </>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
