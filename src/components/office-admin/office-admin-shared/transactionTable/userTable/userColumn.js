"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { PencilLine, Plus, Trash2 } from "lucide-react";

export const userColumn = ({
  handleEdit,
  handleDelete,
  handleAssignCompany,
}) => [
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
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "joindSince",
    header: "Joind Since",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center gap-3 md:gap-6">
          {/* <p>{row?.original?.joindSince}</p> */}
          <p>
            {row?.original?.updated_at
              ? format(new Date(row?.original?.updated_at), "PP")
              : format(new Date(), "PP")}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "user_role",
    header: "User Type",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center gap-3 md:gap-6">
          <p>{row?.original?.status ? row?.original?.status : "Pending"}</p>
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
          {row?.original?.user_role === "employee" && (
            <Plus
              size={20}
              className="text-gray-500 cursor-pointer hover:text-black"
              onClick={() => handleAssignCompany(row?.original)}
            />
          )}
        </div>
      );
    },
  },
];
