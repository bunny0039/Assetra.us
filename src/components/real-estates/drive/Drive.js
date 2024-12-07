import { DataTable } from "@/components/shared/tables/data-table";
import React, { useState } from "react";
import { driveColumns } from "./driveColumns";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { UploadFileModal } from "./UploadFileModal";
import { toast } from "@/components/ui/use-toast";
import { useAddNewDriveMutation } from "@/states/services/assets/driveServices";
import { AddFolder } from "./AddFolder";

function Drive({ data, isFetching, currentCompanyId }) {
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [openFolderModal, setOpenFolderModal] = useState(false);

  const [addDrive, { isLoading }] = useAddNewDriveMutation();

  const handleUploadContract = () => {
    const formData = new FormData();

    formData.append("company_id", currentCompanyId);
    formData.append("file", file);

    addDrive(formData)
      .unwrap()
      .then((payload) => {
        setOpen(false);
        toast({
          title: "Success/Drive Added",
          description: "Drive added successfully",
        });
        console.log("payload", payload);
      })
      .catch((error) => {
        console.log("=> drive failed error", error);
        setOpen(false);
        toast({
          title: "Error/Drive",
          description: error?.data?.message
            ? error?.data?.message
            : "Something went wrong, drive not uploaded",
        });
      });
  };

  const handleAddFolder = () => {};

  return (
    <div>
      <div className="w-full flex justify-between items-center">
        <p className="font-semibold text-gray-800 text-md">All Drive Files</p>
        <div className="flex flex-row gap-5">
          {/* <AddFolder
            handleAddFolder={handleAddFolder}
            isLoading={false}
            open={openFolderModal}
            setOpen={setOpenFolderModal}
          /> */}
          <UploadFileModal
            file={file}
            setFile={setFile}
            handleUploadContract={handleUploadContract}
            isLoading={isLoading}
            open={open}
            setOpen={setOpen}
          />
        </div>
      </div>
      <div className="mt-5">
        <DataTable
          columns={driveColumns}
          data={isFetching ? [] : data}
          isFetching={isFetching}
        />
      </div>
    </div>
  );
}

export default Drive;
