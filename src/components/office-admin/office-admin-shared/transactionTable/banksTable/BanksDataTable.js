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
import { UpdateBank } from "../../UpdateBank";

export function BanksDataTable({ columns, data, isFetching }) {
  const [rowSelection, setRowSelection] = useState({});
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleEdit = (rowData) => {
    setIsShowModal(true);
    setSelectedData(rowData);
  };
  const handleDelete = (rowData) => {
    console.log("Delete Clicked >>>", rowData);
  };

  // Enhance the columns with the action methods
  const enhancedColumns = useMemo(
    () => columns({ handleEdit, handleDelete }),
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

  return (
    <div className="w-full bg-white overflow-hidden">
      <UpdateBank
        openDialog={isShowModal}
        setOpenDialog={setIsShowModal}
        selectedData={selectedData}
      />
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
