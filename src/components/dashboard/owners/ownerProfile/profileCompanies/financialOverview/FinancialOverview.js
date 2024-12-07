import React from "react";
import FinancialOverviewCard from "../../../FinancialOverviewCard";

function FinancialOverview() {
  return (
    <div>
      <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-4 md:gap-7 mt-2.5 md:mt-4">
        <FinancialOverviewCard index={0} />
        <FinancialOverviewCard />
        <FinancialOverviewCard />
        <FinancialOverviewCard />
      </div>
    </div>
  );
}

export default FinancialOverview;
