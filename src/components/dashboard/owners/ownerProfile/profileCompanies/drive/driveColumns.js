"use client";

import { CircleEllipsis, FileText } from "lucide-react";
import Image from "next/image";

export const driveColumns = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          <div className="flex items-center gap-1">
            <FileText size={18} color="rgba(0,0,0,.8)" />
            <p>{row?.original?.owner}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "owner",
    header: "Owner",
    cell: ({ row }) => {
      console.log("=>", row);
      return (
        <div className="flex justify-center">
          <div className="flex items-center gap-1.5">
            <div className="relative h-8 w-8 rounded-full overflow-hidden border border-gray-200 bg-gray-500">
              {/* <Image
                src="/images/signup.svg"
                alt=""
                fill
                className="absolute h-full w-full object-cover rounded-full"
              /> */}
            </div>

            <p>{row?.original?.owner}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "uploadedDate",
    header: "Uploaded Date",
  },
  {
    accessorKey: "uploadedTime",
    header: "Uploaded Time",
  },
  {
    accessorKey: "fileSize",
    header: "File Size",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center">
          <CircleEllipsis />
        </div>
      );
    },
  },
];
