"use client";

import React from "react";
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
import { Input } from "@/components/ui/input";
import { ChevronDown, MapPin, Paperclip, Share } from "lucide-react";

export function OrderTable({ columns, data }) {
  const [rowSelection, setRowSelection] = React.useState({});
  const table = useReactTable({
    data,
    columns,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    state: {
      rowSelection,
    },
  });

  return (
    <div className="w-full bg-transparent overflow-hidden mt-5">
      <div className="overflow-x-scroll md:overflow-visible w-full px-3 md:px-5 py-3 bg-gray-300 rounded-tl-md rounded-tr-md flex items-center justify-between gap-7 md:gap-0">
        <div className="flex items-end gap-0.5">
          <p className="text-sm text-gray-800 font-medium">30 Days</p>
          <ChevronDown size={15} color="rgba(0,0,0,.7)" />
        </div>
        <div className="flex items-end gap-0.5">
          <p className="text-sm text-gray-800 font-medium">Orders</p>
          <p className="text-xs text-gray-500 font-medium">01</p>
          <ChevronDown size={15} color="rgba(0,0,0,.7)" />
        </div>
        <div className="flex items-end gap-0.5">
          <p className="text-sm text-gray-800 font-medium">Orders Item</p>
          <p className="text-xs text-gray-500 font-medium">01</p>
          <ChevronDown size={15} color="rgba(0,0,0,.7)" />
        </div>
        <div className="flex items-end gap-0.5">
          <p className="text-sm text-gray-800 font-medium">Returned Items</p>
          <p className="text-xs text-gray-500 font-medium">01</p>
          <ChevronDown size={15} color="rgba(0,0,0,.7)" />
        </div>
        <div className="flex items-end gap-0.5">
          <p className="text-sm text-gray-800 font-medium">Fulfilled Items</p>
          <p className="text-xs text-gray-500 font-medium">01</p>
          <ChevronDown size={15} color="rgba(0,0,0,.7)" />
        </div>
        <div className="flex items-end gap-0.5">
          <p className="text-sm text-gray-800 font-medium">Total Time</p>
          <p className="text-xs text-gray-500 font-medium">3h32mins</p>
          <ChevronDown size={15} color="rgba(0,0,0,.7)" />
        </div>
      </div>
      {/* =========== */}
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-6 my-5 md:my-6">
        <p className="text-sm text-gray-700 font-medium">All Orders</p>
        <div className="flex-1">
          <Input
            placeholder="Search for something..."
            className="h-10 bg-transparent border border-gray-400"
          />
        </div>
        <div className="flex items-center gap-2 justify-end md:justify-normal">
          <div className="border border-gray-400 rounded-md px-3 h-10 flex items-center gap-2 bg-transparent">
            <Paperclip size={17} color="rgba(0,0,0,.7)" />
            <p className="text-xs text-gray-700 font-normal">Attachment</p>
          </div>
          <div className="border border-gray-400 rounded-md px-3 h-10 flex items-center gap-2 bg-transparent">
            <Share size={17} color="rgba(0,0,0,.7)" />
            <p className="text-xs text-gray-700 font-normal">Export</p>
          </div>
          <div className="border border-gray-400 rounded-md px-3 h-10 flex items-center gap-2 bg-transparent">
            <MapPin size={17} color="rgba(0,0,0,.7)" />
          </div>
        </div>
      </div>
      {/* ========== */}
      <Table>
        <TableHeader className="bg-gray-200">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className="text-black font-semibold"
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
        <TableBody className="bg-white">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="text-gray-500">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
