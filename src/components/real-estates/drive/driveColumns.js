"use client";

import { format } from "date-fns";
import { CircleEllipsis, Eye, FileText, Trash2 } from "lucide-react";

export const driveColumns = ({ handleView, handleDelete }) => [
  {
    accessorKey: "name",
    header: "File Name",
    cell: ({ row }) => {
      let splitted = row?.original?.file?.split("_");
      let fileName = splitted?.length > 1 ? splitted[1] : splitted[0];
      return (
        <div className="flex justify-start">
          <div className="flex items-center gap-1">
            <FileText size={18} color="rgba(0,0,0,.8)" />
            <p>{fileName}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: "Uploaded Date",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-start gap-3 md:gap-6">
          <p>{format(new Date(row?.original?.created_at), "PP")}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: "Uploaded Time",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-start gap-3 md:gap-6">
          <p>{format(new Date(row?.original?.created_at), "h:m aa")}</p>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-start gap-3 md:gap-6">
          <a
            href={`/${row?.original?.file}`}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Eye
              size={20}
              className="text-gray-500 cursor-pointer hover:text-black"
              onClick={() => handleView(row?.original)}
            />
          </a>

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
