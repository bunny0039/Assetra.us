"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import RealEstates from "./ownerRealEstates/RealEstates";
import BankAccounts from "./ownerBanks/BankAccounts";
import { AddNewRealEstates } from "./ownerRealEstates/AddNewRealEstate";
import { AddNewBank } from "./ownerBanks/AddNewBank";
import { useSelector } from "react-redux";
import { useGetCompaniesByOwnerQuery } from "@/states/services/companyServices";

function OwnerAssetsMain() {
  const [activeTab, setActiveTab] = useState(1);
  const { ownerData } = useSelector((state) => state.companyReducer);

  const handleSelectTab = (index) => {
    setActiveTab(index);
  };

  const { data } = useGetCompaniesByOwnerQuery({ ownerId: ownerData?.id });

  const tabsComponents = {
    1: <RealEstates ownerId={ownerData?.id} />,
    2: <BankAccounts companyId={data?.data[0]?.id} ownerId={ownerData?.id} />,
  };

  return (
    <div className="px-4 md:px-10">
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center">
        <div>
          <Tabs defaultValue="realEstate" className="w-full rounded-none p-0">
            <TabsList className="grid grid-cols-2 bg-white w-full md:w-fit rounded-sm overflow-hidden p-0">
              <TabsTrigger
                value="realEstate"
                className="rounded-none font-medium text-gray-800 px-5"
                onClick={() => handleSelectTab(1)}
              >
                Real Estate
              </TabsTrigger>
              <TabsTrigger
                value="bankAccount"
                className="rounded-none font-medium text-gray-800 px-5"
                onClick={() => handleSelectTab(2)}
              >
                Bank Account
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex justify-end md:justify-normal mt-6 md:mt-0">
          {activeTab === 1 ? (
            <AddNewRealEstates type="Owner" />
          ) : (
            <AddNewBank type="Owner" />
          )}
        </div>
      </div>
      {/* ================ */}
      <div>{tabsComponents[activeTab]}</div>
    </div>
  );
}

export default OwnerAssetsMain;
