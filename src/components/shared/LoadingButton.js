import React from "react";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

function LoadingButton({ title, isLoading }) {
  return (
    <>
      {isLoading ? (
        <Button disabled className="bg-primary text-white w-full">
          <Loader2 className="mr-2 h-5 w-5 animate-spin text-white" />
          Please wait...
        </Button>
      ) : (
        <Button type="submit" className="bg-primary text-white w-full">
          {title}
        </Button>
      )}
    </>
  );
}

export default LoadingButton;
