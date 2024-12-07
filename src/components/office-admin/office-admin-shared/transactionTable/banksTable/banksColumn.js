"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { Eye, PencilLine, Trash2 } from "lucide-react";
import { Check, CircleDotDashed, TrendingUp } from "lucide-react";

export const banksColumn = ({ handleEdit, handleDelete }) => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "id",
    header: "No",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "name",
    header: "User Name",
  },
  {
    accessorKey: "balance",
    header: "Amount",
  },
  {
    accessorKey: "updated_at",
    header: "Date",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center gap-3 md:gap-6">
          {/* <p>{row?.original?.updated_at}</p> */}
          <p>{format(new Date(row?.original?.updated_at), "PPp")}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div className="flex justify-center items-center">
          {row?.original?.status === "inactive" ? (
            <div className="bg-amber-100 p-2 flex items-center justify-center gap-1 rounded-sm w-24">
              <CircleDotDashed size={16} className="text-amber-700" />
              <p className="text-amber-700 text-xs capitalize">
                {row?.original?.status}
              </p>
            </div>
          ) : (
            <div className="bg-green-100 p-2 flex items-center justify-center gap-1 rounded-sm w-24">
              <Check size={16} className="text-green-700" />
              <p className="text-green-700 text-xs capitalize">
                {row?.original?.status}
              </p>
            </div>
          )}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center gap-3 md:gap-6">
          {/* <Eye
            size={20}
            className="text-gray-500 cursor-pointer hover:text-black"
          /> */}
          <PencilLine
            size={20}
            className="text-gray-500 cursor-pointer hover:text-green-600"
            onClick={() => handleEdit(row?.original)}
          />
          <Trash2
            size={20}
            className="text-gray-500 cursor-pointer hover:text-red-600"
            onClick={() => handleDelete(row?.original)}
          />
        </div>
      );
    },
  },
];
