import React from "react";
import SubCompanies from "./SubCompanies";

export const metadata = {
  title: "Sub Companies - Company | Assetra",
  description: "",
};

function page() {
  return (
    <div className="bg-gray-100 w-full min-h-screen h-full">
      <SubCompanies />
    </div>
  );
}

export default page;
