import RolePermissions from "@/components/office-admin/roles/RolePermissions";
import React, { Suspense } from "react";

export const metadata = {
  title: "Role Permissions | Assetra",
  description: "",
};

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RolePermissions />
    </Suspense>
  );
}

export default page;
