"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { Eye, PencilLine, Trash2 } from "lucide-react";
import { Check, CircleDotDashed, TrendingUp } from "lucide-react";

export const transactionsColumn = [
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
    accessorKey: "no",
    header: "No",
  },
  {
    accessorKey: "transactionType",
    header: "Transaction Type",
  },
  {
    accessorKey: "userName",
    header: "User Name",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center gap-3 md:gap-6">
          <p>{row?.original?.date}</p>
          {/* <p>{format(new Date(row?.original?.updated_at), "PP")}</p> */}
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
          {row?.original?.status === "Pending" ? (
            <div className="bg-amber-100 p-2 flex items-center justify-center gap-1 rounded-sm w-24">
              <CircleDotDashed size={16} className="text-amber-700" />
              <p className="text-amber-700 text-xs">{row?.original?.status}</p>
            </div>
          ) : row?.original?.status === "Progress" ? (
            <div className="bg-blue-100 p-2 flex items-center justify-center gap-1 rounded-sm w-24">
              <TrendingUp size={16} className="text-blue-700" />
              <p className="text-blue-700 text-xs">{row?.original?.status}</p>
            </div>
          ) : (
            <div className="bg-green-100 p-2 flex items-center justify-center gap-1 rounded-sm w-24">
              <Check size={16} className="text-green-700" />
              <p className="text-green-700 text-xs">{row?.original?.status}</p>
            </div>
          )}
        </div>
      );
    },
  },
  // {
  //   id: "actions",
  //   header: "Actions",
  //   cell: ({ row }) => {
  //     return (
  //       <div className="flex items-center justify-center gap-3 md:gap-6">
  //         <Eye
  //           size={20}
  //           className="text-gray-500 cursor-pointer hover:text-black"
  //         />
  //         <PencilLine
  //           size={20}
  //           className="text-gray-500 cursor-pointer hover:text-green-600"
  //         />
  //         <Trash2
  //           size={20}
  //           className="text-gray-500 cursor-pointer hover:text-red-600"
  //         />
  //       </div>
  //     );
  //   },
  // },
];
