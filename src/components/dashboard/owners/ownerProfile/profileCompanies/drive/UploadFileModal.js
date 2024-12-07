import { Copy, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CustomFileInput from "./CustomFileInput";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

export function UploadFileModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-secondary h-9 gap-2 text-xs md:text-sm text-white w-fit md:px-5">
          <Upload size={16} color="#fff" />
          <p>Upload File</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-md max-w-sm sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center mt-3 md:mt-5">
            Choose File
          </DialogTitle>
          <DialogDescription>
            <div className="my-4">
              <CustomFileInput />
              <div className="w-full gap-5 flex items-center border border-gray-200 rounded-md p-4 mt-4">
                <Image src="/images/file.svg" alt="" width={30} height={30} />
                <div className="w-full space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm text-gray-700">
                      Uploading File
                    </p>
                    <p className="font-medium text-sm text-gray-700">75%</p>
                  </div>
                  <div>
                    <Progress value={75} className="w-full h-1" />
                  </div>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button className="bg-secondary w-full h-9 gap-2 text-xs md:text-sm text-white">
              Upload File
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
