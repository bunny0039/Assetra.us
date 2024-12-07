import Users from "@/components/office-admin/users/Users";
import React from "react";

export const metadata = {
  title: "Users | Assetra",
  description: "",
};

function page() {
  return <Users from="office" />;
}

export default page;
