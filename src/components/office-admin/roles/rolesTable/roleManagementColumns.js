"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { routes } from "@/routes/routes";
import { format } from "date-fns";
import { Eye, PencilLine, Trash2 } from "lucide-react";
import Link from "next/link";

export const roleManagementColumns = ({ handleEdit, handleDelete }) => [
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
    header: "User Name",
  },
  {
    accessorKey: "user_role",
    header: "User Role",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center gap-3 md:gap-6">
          <p>Employee</p>
        </div>
      );
    },
  },
  {
    accessorKey: "updated_at",
    header: "Created Date",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center gap-3 md:gap-6">
          <p>{format(new Date(row?.original?.updated_at), "PP")}</p>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row, table }) => {
      return (
        <div className="flex items-center justify-center gap-3 md:gap-6">
          {/* <Eye
            size={20}
            className="text-gray-500 cursor-pointer hover:text-black"
          /> */}
          {/* <Link
            href={`${table?.options?.meta?.routePath}?uid=${row?.original?.id}`}
          > */}
          <PencilLine
            size={20}
            className="text-gray-500 cursor-pointer hover:text-green-600"
            onClick={() => handleEdit(row?.original)}
          />
          {/* </Link> */}

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
