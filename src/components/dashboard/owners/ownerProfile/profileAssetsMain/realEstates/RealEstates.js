import React from "react";
import RealEstateCard from "./RealEstateCard";

function RealEstates() {
  return (
    <div className="mt-6">
      <div className="flex flex-wrap gap-5">
        {[1, 2, 3, 4, 5, 6, , 7, 8, 9, 10, 11, 12].map((item) => {
          return <RealEstateCard key={item} />;
        })}
      </div>
    </div>
  );
}

export default RealEstates;
