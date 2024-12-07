import { Input } from "@/components/ui/input";
import { InputWithRightIcon } from "@/components/ui/inputWithRightIocn";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

function FormTextArea({
  type,
  name,
  label,
  register,
  errorMessage,
  placeholder = "",
  maxHeight = "max-h-[120px]",
  marginTop = "mt-1.5",
}) {
  return (
    <div className="w-full">
      <Label className="text-xs" htmlFor={name}>
        {label}
      </Label>
      <div className={`${marginTop}`}>
        <Textarea
          type={type}
          id={name}
          {...register(name)}
          className={`${maxHeight}`}
          placeholder={placeholder}
        />
        <p className="text-[10px] text-red-600 font-medium mt-1">
          {errorMessage}
        </p>
      </div>
    </div>
  );
}

export default FormTextArea;
