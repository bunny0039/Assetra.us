import React from "react";
import Tenants from "./Tenants";

export const metadata = {
  title: "Tenants - Real Estate | Assetra",
  description: "",
};

function page() {
  return (
    <div className="bg-gray-100 px-4 md:px-10 pb-16">
      <Tenants />
    </div>
  );
}

export default page;
