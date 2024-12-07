"use client";
import { DataTable } from "@/components/shared/tables/data-table";
import React from "react";
import { usersColumns } from "../usersColumns";
import { useGetOwnersQuery } from "@/states/services/usersServices";

function OwnersUser() {
  const { data, isFetching } = useGetOwnersQuery();

  return (
    <div>
      <DataTable
        columns={usersColumns}
        data={isFetching ? [] : data?.data}
        isFetching={isFetching}
      />
    </div>
  );
}

export default OwnersUser;
