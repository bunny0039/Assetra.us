"use client";

import React, { useState } from "react";
import Comapny from "./company/Comapny";
import FinancialOverview from "./financialOverview/FinancialOverview";
import Drive from "./drive/Drive";
import ProductAndServices from "./productAndServices/ProductAndServices";
import OrderProcessing from "./orderProcessing/OrderProcessing";
import { TopHeaderFilter } from "./TopHeaderFilter.js";
import ProductDeatils from "./productAndServices/ProductDetails/ProductDeatils";

function ProfileCompaniesMain() {
  const [activeMenu, setActiveMenu] = useState({
    id: 1,
    accessor: "companies",
    title: "Companies",
  });

  const menusComponents = {
    companies: <Comapny />,
    financialOverview: <FinancialOverview />,
    drive: <Drive />,
    productServices: <ProductAndServices setActiveMenu={setActiveMenu} />,
    orderProcessing: <OrderProcessing />,
    productDeatils: <ProductDeatils />,
  };

  return (
    <div className="px-4 md:px-10">
      <div className="w-full flex justify-between items-center">
        <p className="text-gray-700 text-md md:text-xl font-semibold capitalize">
          {activeMenu?.title}
        </p>
        <TopHeaderFilter
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
      </div>
      <div>{menusComponents[activeMenu?.accessor]}</div>
    </div>
  );
}

export default ProfileCompaniesMain;
