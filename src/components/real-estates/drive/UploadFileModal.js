import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Loader2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomFileInput from "./CustomFileInput";
import Image from "next/image";

export function UploadFileModal({
  file,
  setFile,
  handleUploadContract,
  isLoading,
  open,
  setOpen,
  isButtonShow = true,
}) {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFile(null);
  };

  return (
    <>
      {isButtonShow && (
        <Button
          onClick={handleClickOpen}
          className="bg-secondary h-9 gap-2 text-xs md:text-sm text-white w-fit md:px-5"
        >
          <Upload size={16} color="#fff" />
          <p>Upload File</p>
        </Button>
      )}
      <Dialog
        open={open}
        onClose={handleClickOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <div className="flex justify-between items-center">
            <p className="text-md">Choose File</p>
            <p
              className="text-xs cursor-pointer hover:text-black"
              onClick={handleClose}
            >
              Cancel
            </p>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div>
              <CustomFileInput file={file} setFile={setFile} />
              {isLoading && (
                <div className="w-full gap-3 flex items-center border border-gray-200 rounded-md p-4 mt-4">
                  <Image src="/images/file.svg" alt="" width={30} height={30} />
                  <div className="w-full flex justify-between items-center">
                    <p className="font-medium text-sm text-gray-700">
                      File Uploading...
                    </p>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin text-secondary" />
                  </div>
                </div>
              )}
            </div>
          </DialogContentText>
        </DialogContent>
        {file && (
          <DialogActions>
            <Button
              className="bg-secondary w-full h-9 gap-2 text-xs md:text-sm text-white m-2"
              onClick={handleUploadContract}
              disabled={isLoading}
            >
              Upload File
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </>
  );
}
