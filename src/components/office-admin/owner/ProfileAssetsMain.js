"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddNewRealEstates } from "./realEstates/AddNewRealEstate";
import { AddNewBank } from "./banks/AddNewBank";
import RealEstates from "./realEstates/RealEstates";
import BankAccounts from "./banks/BankAccounts";

function ProfileAssetsMain() {
  const [activeTab, setActiveTab] = useState(1);

  const handleSelectTab = (index) => {
    setActiveTab(index);
  };

  const tabsComponents = {
    1: <RealEstates />,
    2: <BankAccounts />,
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
          {activeTab === 1 ? <AddNewRealEstates /> : <AddNewBank />}
        </div>
      </div>
      {/* ================ */}
      <div>{tabsComponents[activeTab]}</div>
    </div>
  );
}

export default ProfileAssetsMain;
