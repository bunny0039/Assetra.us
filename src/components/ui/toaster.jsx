"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { FaCircleCheck, FaCircleInfo } from "react-icons/fa6";
import { MdError } from "react-icons/md";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        let splitValue = title?.split("/");
        let type = splitValue[0];
        let heading = splitValue[1];
        return (
          <Toast key={id} {...props}>
            <div className="flex gap-4">
              <div style={{ height: 12, width: 12, marginTop: 1 }}>
                {type === "Success" && (
                  <FaCircleCheck className="text-green-500 h-4 w-4" />
                )}
                {type === "Error" && (
                  <MdError className="text-red-600 h-5 w-5" />
                )}
                {type === "Info" && (
                  <FaCircleInfo className="text-primary h-4 w-4" />
                )}
              </div>
              <div className="grid gap-1">
                {heading && <ToastTitle>{heading}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
