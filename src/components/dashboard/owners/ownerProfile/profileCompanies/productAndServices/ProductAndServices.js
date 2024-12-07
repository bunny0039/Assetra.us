import React from "react";
import ProductServiceCard from "./ProductServiceCard";

function ProductAndServices({ setActiveMenu }) {
  return (
    <div className="mt-5">
      <div className="flex flex-wrap gap-5">
        {[1, 2, 3, 4, 5, 6, , 7, 8, 9, 10, 11, 12].map((item) => {
          return (
            <ProductServiceCard key={item} setActiveMenu={setActiveMenu} />
          );
        })}
      </div>
    </div>
  );
}

export default ProductAndServices;
