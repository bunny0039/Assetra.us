"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";

export function AskForDeleteModal({
  isOpen,
  closeModal,
  handleActionYes,
  title,
  description,
  loader,
}) {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="rounded-md max-w-sm sm:max-w-md">
        <DialogHeader>
          <div className="mb-2">
            <p className="font-semibold text-md text-black">{title}</p>
            <div className="mt-1">
              <p className="text-sm text-gray-700">{description}</p>
            </div>
          </div>
          <DialogDescription>
            <div className="mt-6 flex justify-end items-center gap-3">
              {!loader && (
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={closeModal}
                >
                  No, Cancel
                </button>
              )}
              {loader ? (
                <button className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                  <div
                    className="animate-spin inline-block w-5 h-5 border-[2px] border-current border-t-transparent text-red-900 rounded-full"
                    role="status"
                    aria-label="loading"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                </button>
              ) : (
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={handleActionYes}
                >
                  Yes
                </button>
              )}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
