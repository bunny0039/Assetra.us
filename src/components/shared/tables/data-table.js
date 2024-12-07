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
import { toast } from "@/components/ui/use-toast";
import { useDeleteDriveMutation } from "@/states/services/assets/driveServices";
import { AskForDeleteModal } from "../AskForDeleteModal";

export function DataTable({ columns, data, isFetching }) {
  const [rowSelection, setRowSelection] = useState({});
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [deleteDriveAPI, { isLoading }] = useDeleteDriveMutation();

  const handleView = (rowData) => {
    setSelectedData(rowData);
  };

  const handleDelete = (rowData) => {
    setIsShowDeleteModal(true);
    setSelectedData(rowData);
  };

  // Enhance the columns with the action methods
  const enhancedColumns = useMemo(
    () => columns({ handleView, handleDelete }),
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
    deleteDriveAPI({
      driveId: selectedData?.id,
    })
      .unwrap()
      .then(async (payload) => {
        closeModal();
        toast({
          title: "Success/Delete Drive",
          description: "Drive has been deleted",
        });
      })
      .catch((error) => {
        console.log("=>error", error);
        toast({
          title: "Error/Delete Drive",
          description: error?.data?.message
            ? error?.data?.message
            : "Drive not deleted. Try again",
        });
      });
  };

  const closeModal = () => {
    setIsShowDeleteModal(false);
    setSelectedData(null);
  };

  return (
    <div className="w-full bg-white overflow-hidden">
      {isShowDeleteModal && (
        <AskForDeleteModal
          isOpen={isShowDeleteModal}
          closeModal={closeModal}
          handleActionYes={handleActionYes}
          title="Delete Drive"
          description={`Are you sure, you want to delete this drive ${
            selectedData?.file?.split("_")[1]
          }?`}
          loader={isLoading}
        />
      )}
      <Table className="text-left">
        <TableHeader className="bg-secondary text-left">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="text-left">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className="text-white font-semibold text-left"
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
        <TableBody className="text-left">
          {isFetching ? (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-left w-full"
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
                    className="text-left"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="text-gray-500 text-left m-2"
                      >
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
