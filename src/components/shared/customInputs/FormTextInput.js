"use client";
import { Input } from "@/components/ui/input";
import { InputWithRightIcon } from "@/components/ui/inputWithRightIocn";
import { Label } from "@/components/ui/label";
import React from "react";

function FormTextInput({
  type,
  name,
  label,
  register,
  errorMessage,
  placeholder = "",
}) {
  return (
    <div className="w-full">
      <Label className="text-xs" htmlFor={name}>
        {label}
      </Label>
      <div className="mt-1.5">
        {type === "password" ? (
          <InputWithRightIcon
            type={type}
            id={name}
            {...register(name)}
            className="h-8"
          />
        ) : (
          <Input
            type={type}
            id={name}
            {...register(name)}
            className="h-8"
            placeholder={placeholder}
          />
        )}

        <p className="text-[10px] text-red-600 font-medium mt-1">
          {errorMessage}
        </p>
      </div>
    </div>
  );
}

export default FormTextInput;
