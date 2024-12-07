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

export function SelectInput({ name, control, data, isFetching, placeholder }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Select onValueChange={field.onChange}>
          <SelectTrigger className="w-full h-9 mt-1.5">
            <SelectValue placeholder={`Select ${placeholder}`} />
          </SelectTrigger>
          <SelectContent>
            {isFetching ? (
              <div className="flex justify-center items-center py-3">
                <Loader2 className="mr-2 h-4 w-4 animate-spin text-primary" />
                <p className="text-xs">Fetching Data...</p>
              </div>
            ) : (
              <SelectGroup>
                {data?.length > 0 ? (
                  <>
                    {data?.map((item) => {
                      return (
                        <SelectItem
                          value={`${item?.title}`}
                          className="capitalize"
                        >
                          {item?.title}
                        </SelectItem>
                      );
                    })}
                  </>
                ) : (
                  <div>
                    <p className="text-xs font-medium text-center">
                      No data found
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
