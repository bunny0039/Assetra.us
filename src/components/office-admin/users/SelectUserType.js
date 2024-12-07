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

export function SelectUserType({ name, control, from, defaultValue = "" }) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Select onValueChange={field.onChange} defaultValue={defaultValue}>
          <SelectTrigger className="w-full h-9">
            <SelectValue placeholder="Select User Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>User Type</SelectLabel>
              {from !== "company" && (
                <SelectItem value="owner">Owner</SelectItem>
              )}

              <SelectItem value="employee">Employee</SelectItem>
              {from !== "office" && (
                <SelectItem value="tenant">Tenant</SelectItem>
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  );
}
