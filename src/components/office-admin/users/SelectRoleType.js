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

export function SelectRoleType({ name, control, defaultValue = "", data }) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Select onValueChange={field.onChange} defaultValue={defaultValue}>
          <SelectTrigger className="w-full h-9">
            <SelectValue placeholder="Select Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>User Role</SelectLabel>
              {data?.map((item) => {
                return (
                  <SelectItem value={item?.id?.toString()}>
                    {item?.name}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  );
}
