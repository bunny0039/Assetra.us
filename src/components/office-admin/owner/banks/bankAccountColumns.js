"use client";

import { Eye, PencilLine, Trash2 } from "lucide-react";

export const bankAccountColumns = [
  {
    accessorKey: "ownerName",
    header: "Owner Name",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "accountSince",
    header: "Account Since",
  },
  {
    accessorKey: "accountBalance",
    header: "Account Balance",
  },
  {
    accessorKey: "bankName",
    header: "Bank Name",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      console.log("=>", row);
      return (
        <div className="flex justify-center">
          <div className="bg-green-200 p-1 w-fit h-fit rounded-sm text-green-700">
            {row?.original?.status}
          </div>
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
