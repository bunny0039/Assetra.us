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

export function SelectTenant({ name, control }) {
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
              <SelectLabel>Tenants</SelectLabel>
              <SelectItem value="tenant">Tenant 1</SelectItem>
              <SelectItem value="tenant">Tenant 1</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  );
}
