"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { Eye, PencilLine, Trash2 } from "lucide-react";
import { Check, CircleDotDashed, TrendingUp } from "lucide-react";

export const userColumn = ({ handleEdit, handleDelete }) => [
  // export const userColumn = [

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
  // {
  //   id: "actions",
  //   header: "Actions",
  //   cell: ({ row }) => {
  //     return (
  //       <div className="flex items-center justify-center gap-3 md:gap-6">
  //         {/* <Eye
  //           size={20}
  //           className="text-gray-500 cursor-pointer hover:text-black"
  //         /> */}
  //         <PencilLine
  //           size={20}
  //           className="text-gray-500 cursor-pointer hover:text-green-600"
  //           onClick={() => handleEdit(row?.original)}
  //         />
  //         <Trash2
  //           size={20}
  //           className="text-gray-500 cursor-pointer hover:text-red-600"
  //           onClick={() => handleDelete(row?.original)}
  //         />
  //       </div>
  //     );
  //   },
  // },
];
