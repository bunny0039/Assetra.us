import MainOwnerProfile from "@/components/dashboard/owners/ownerProfile/MainOwnerProfile";
import React from "react";

function page({ params }) {
  return <MainOwnerProfile params={params} />;
}

export default page;
