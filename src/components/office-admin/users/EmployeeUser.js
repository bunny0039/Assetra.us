"use client";

import React from "react";
import { UserDataTable } from "../office-admin-shared/transactionTable/userTable/UserDataTable";
import { userColumn } from "../office-admin-shared/transactionTable/userTable/userColumn";
import { useGetEmployeesQuery } from "@/states/services/usersServices";

function EmployeeUser({ from }) {
  const { data, isFetching } = useGetEmployeesQuery();
  return (
    <div>
      <UserDataTable
        columns={userColumn}
        data={isFetching ? [] : data?.data}
        isFetching={isFetching}
        from={from}
      />
    </div>
  );
}

export default EmployeeUser;
