"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RealEstates from "./RealEstates";
import BanksAccounts from "./BanksAccounts";
import Tenants from "./Tenants";
import { AddNewRealEstates } from "@/components/office-admin/office-admin-shared/AddNewRealEstate";
import { AddNewBank } from "@/components/office-admin/office-admin-shared/AddNewBank";
import { AddNewTenant } from "@/components/office-admin/office-admin-shared/AddNewTenant";
import { useParams } from "next/navigation";

function AssetsTab() {
  const [activeTab, setActiveTab] = useState(1);
  const { companyId } = useParams();

  const handleSelectTab = (index) => {
    setActiveTab(index);
  };

  const tabsComponents = {
    1: <RealEstates rootCompanyId={companyId} />,
    2: <BanksAccounts rootCompanyId={companyId} />,
    3: <Tenants rootCompanyId={companyId} />,
  };

  return (
    <div className="px-4 md:px-10">
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center">
        <div>
          <Tabs defaultValue="realEstate" className="w-full rounded-none p-0">
            <TabsList className="grid grid-cols-3 bg-white w-full md:w-fit rounded-sm overflow-hidden p-0">
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
              <TabsTrigger
                value="tenants"
                className="rounded-none font-medium text-gray-800 px-5"
                onClick={() => handleSelectTab(3)}
              >
                Tenants
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex justify-end md:justify-normal mt-6 md:mt-0">
          {activeTab === 1 && <AddNewRealEstates rootCompanyId={companyId} />}
          {activeTab === 2 && <AddNewBank rootCompanyId={companyId} />}
          {activeTab === 3 && <AddNewTenant rootCompanyId={companyId} />}
        </div>
      </div>
      {/* ================ */}
      <div>{tabsComponents[activeTab]}</div>
    </div>
  );
}

export default AssetsTab;
