"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { Eye, PencilLine, Trash2 } from "lucide-react";

export const companyColumns = [
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
    accessorKey: "owner_id",
    header: "Owner Id",
  },
  {
    accessorKey: "name",
    header: "Company Name",
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
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center gap-3 md:gap-6">
          <Eye
            size={20}
            className="text-gray-500 cursor-pointer hover:text-black"
          />
          <PencilLine
            size={20}
            className="text-gray-500 cursor-pointer hover:text-green-600"
          />
          <Trash2
            size={20}
            className="text-gray-500 cursor-pointer hover:text-red-600"
          />
        </div>
      );
    },
  },
];
