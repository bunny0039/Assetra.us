import React from "react";
import MainFinancialOverview from "./MainFinancialOverview";

export const metadata = {
  title: "Financial Overview - Company | Assetra",
  description: "",
};

function page() {
  return (
    <div className="bg-gray-100 w-full min-h-screen h-full">
      <MainFinancialOverview />
    </div>
  );
}

export default page;
