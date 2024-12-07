import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";

export function SelectUserType({ name, control, type = "" }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Select onValueChange={field.onChange}>
          <SelectTrigger className="w-full h-9">
            <SelectValue placeholder="Select User Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>User Roles</SelectLabel>
              <SelectItem value="owner">Owner</SelectItem>
              {type !== "owner" && (
                <SelectItem value="employee">Employee</SelectItem>
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  );
}
