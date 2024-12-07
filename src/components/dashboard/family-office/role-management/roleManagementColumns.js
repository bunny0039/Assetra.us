"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { routes } from "@/routes/routes";
import { Eye, PencilLine, Trash2 } from "lucide-react";
import Link from "next/link";

export const roleManagementColumns = [
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
    accessorKey: "roleName",
    header: "Role Name",
  },
  {
    accessorKey: "createdDate",
    header: "Created Date",
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
          <Link
            href={
              routes.DASHBOARD_FAMILY_OFFICE_ROLE_MANAGEMENT_PERMISSION_ROLE
            }
          >
            <PencilLine
              size={20}
              className="text-gray-500 cursor-pointer hover:text-green-600"
            />
          </Link>

          <Trash2
            size={20}
            className="text-gray-500 cursor-pointer hover:text-red-600"
          />
        </div>
      );
    },
  },
];
