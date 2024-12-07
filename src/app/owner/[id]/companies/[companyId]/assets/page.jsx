import React from "react";
import AssetsTab from "./AssetsTab";

export const metadata = {
  title: "Assets - Company | Assetra",
  description: "",
};

function page() {
  return (
    <div className="bg-gray-100 pb-20">
      <AssetsTab />
    </div>
  );
}

export default page;
