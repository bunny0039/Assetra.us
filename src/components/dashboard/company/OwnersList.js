"use client";

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
import { Loader2 } from "lucide-react";

export function OwnersList({ name, control, data, isFetching }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Select onValueChange={field.onChange}>
          <SelectTrigger className="w-full h-9">
            <SelectValue placeholder="Select Owner" />
          </SelectTrigger>
          <SelectContent>
            {isFetching ? (
              <div className="flex justify-center items-center py-3">
                <Loader2 className="mr-2 h-4 w-4 animate-spin text-primary" />
                <p className="text-xs">Fetching Data...</p>
              </div>
            ) : (
              <SelectGroup>
                <SelectLabel>Owner's Name</SelectLabel>
                {data?.length > 0 ? (
                  <>
                    {data?.map((item) => {
                      return (
                        <SelectItem
                          value={`${item?.id}`}
                          className="capitalize"
                        >
                          {item?.name}
                        </SelectItem>
                      );
                    })}
                  </>
                ) : (
                  <div>
                    <p className="text-xs font-medium text-center">
                      No Owner Found
                    </p>
                  </div>
                )}
              </SelectGroup>
            )}
          </SelectContent>
        </Select>
      )}
    />
  );
}
