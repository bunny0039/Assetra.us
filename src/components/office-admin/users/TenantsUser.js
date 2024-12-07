"use client";

import React from "react";
import { UserDataTable } from "../office-admin-shared/transactionTable/userTable/UserDataTable";
import { userColumn } from "../office-admin-shared/transactionTable/userTable/userColumn";
import { useGetTenantsQuery } from "@/states/services/usersServices";

function TenantsUser({ companyId, from }) {
  const { data, isFetching } = useGetTenantsQuery({ companyId });

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

export default TenantsUser;
