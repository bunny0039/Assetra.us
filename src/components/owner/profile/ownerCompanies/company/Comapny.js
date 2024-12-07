import React from "react";
import CompanyCard from "./CompanyCard";

function Comapny() {
  return (
    <div className="grid grid-cols-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
    </div>
  );
}

export default Comapny;
