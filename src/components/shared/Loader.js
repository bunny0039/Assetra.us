import React from "react";
import { Loader2 } from "lucide-react";

function Loader({ className, title = "Please wait..." }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <Loader2 className="mr-2 h-5 w-5 animate-spin text-primary" />
      <p className="text-primary text-sm text-medium">
        {title ? title : "Please wait..."}
      </p>
    </div>
  );
}

export default Loader;
