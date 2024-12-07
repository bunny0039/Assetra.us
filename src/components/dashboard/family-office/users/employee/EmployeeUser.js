"use client";
import { DataTable } from "@/components/shared/tables/data-table";
import React from "react";
import { usersColumns } from "../usersColumns";
import { useGetEmployeesQuery } from "@/states/services/usersServices";

function EmployeeUser() {
  const { data, isFetching } = useGetEmployeesQuery();

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

export default EmployeeUser;
