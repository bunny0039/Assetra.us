"use client";
import { DataTable } from "@/components/shared/tables/data-table";
import React from "react";
import { usersColumns } from "../usersColumns";
import { useGetTenantsQuery } from "@/states/services/usersServices";

function TenantsUser() {
  const { data, isFetching } = useGetTenantsQuery();

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

export default TenantsUser;
