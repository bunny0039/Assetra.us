"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { Eye, PencilLine, Trash2 } from "lucide-react";
import { Check, CircleDotDashed, TrendingUp } from "lucide-react";
import { BsCloudUpload } from "react-icons/bs";

export const tenantColumn = ({
  handleEdit,
  handleDelete,
  handleUploadLeaseContract,
  handleViewLeaseContract,
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
    header: "Role",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center gap-2 capitalize">
          <div
            className={`h-2 w-2 ${
              row?.original?.status === "active"
                ? "bg-green-600"
                : "bg-orange-600"
            } rounded-full`}
          />
          <p>{row?.original?.status ? row?.original?.status : "Pending"}</p>
        </div>
      );
    },
  },
  {
    id: "leaseContract",
    header: "Lease Contract",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center gap-3 md:gap-6">
          <BsCloudUpload
            size={20}
            className="text-gray-500 cursor-pointer hover:text-black"
            onClick={() => handleUploadLeaseContract(row?.original)}
          />
          <Eye
            size={20}
            className="text-gray-500 cursor-pointer hover:text-black"
            onClick={() => handleViewLeaseContract(row?.original)}
          />
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
