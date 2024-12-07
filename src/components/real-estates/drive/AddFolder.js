import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Loader2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AddFolder({ handleAddFolder, isLoading, open, setOpen }) {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        className="bg-gray-700 h-9 gap-2 text-xs md:text-sm text-white w-fit md:px-5"
      >
        <Upload size={16} color="#fff" />
        <p>Add Folder</p>
      </Button>
      <Dialog
        open={open}
        onClose={handleClickOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <div className="flex justify-between items-center">
            <p className="text-sm md:text-md font-semibold text-gray-700">
              Add Folder
            </p>
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
              <div>
                <Label className="text-xs">Folder Name</Label>
                <Input className="h-8 mt-1.5 w-fit md:w-72" />
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className="bg-secondary w-full h-9 gap-2 text-xs md:text-sm text-white m-2"
            onClick={handleAddFolder}
            disabled={isLoading}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
