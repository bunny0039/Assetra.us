import { DataTable } from "@/components/shared/tables/data-table";
import React from "react";
import { driveColumns } from "./driveColumns";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { UploadFileModal } from "./UploadFileModal";

const data = [
  {
    id: "728ed52f",
    name: "Environmental surveys",
    owner: "Alex Wong",
    uploadedDate: "10 Jan 2024",
    uploadedTime: "06:45 PM",
    fileSize: "2 MB",
  },
  {
    id: "728ed52f",
    name: "Environmental surveys",
    owner: "Alex Wong",
    uploadedDate: "10 Jan 2024",
    uploadedTime: "06:45 PM",
    fileSize: "2 MB",
  },
  {
    id: "728ed52f",
    name: "Environmental surveys",
    owner: "Alex Wong",
    uploadedDate: "10 Jan 2024",
    uploadedTime: "06:45 PM",
    fileSize: "2 MB",
  },
  {
    id: "728ed52f",
    name: "Environmental surveys",
    owner: "Alex Wong",
    uploadedDate: "10 Jan 2024",
    uploadedTime: "06:45 PM",
    fileSize: "2 MB",
  },
  {
    id: "728ed52f",
    name: "Environmental surveys",
    owner: "Alex Wong",
    uploadedDate: "10 Jan 2024",
    uploadedTime: "06:45 PM",
    fileSize: "2 MB",
  },
];

function Drive() {
  return (
    <div>
      <div className="w-full flex justify-between items-center mt-4">
        <p className="font-medium text-gray-700 text-sm">All Files</p>
        <UploadFileModal />
      </div>
      <div className="mt-5">
        <DataTable columns={driveColumns} data={data} />
      </div>
    </div>
  );
}

export default Drive;
