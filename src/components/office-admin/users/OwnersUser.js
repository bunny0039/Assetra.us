"use client";

import React from "react";
import { UserDataTable } from "../office-admin-shared/transactionTable/userTable/UserDataTable";
import { userColumn } from "../office-admin-shared/transactionTable/userTable/userColumn";
import { useGetOwnersQuery } from "@/states/services/usersServices";

function OwnersUser({ from }) {
  const { data, isFetching } = useGetOwnersQuery();

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

export default OwnersUser;
