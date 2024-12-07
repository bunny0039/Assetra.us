"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OwnersUser from "./owners/OwnersUser";
import TenantsUser from "./tenants/TenantsUser";
import EmployeeUser from "./employee/EmployeeUser";

export function UsersCustomTabs() {
  return (
    <Tabs defaultValue="owner" className="w-full rounded-none p-0">
      <TabsList className="grid grid-cols-3 bg-white w-96 rounded-none p-0">
        <TabsTrigger
          value="owner"
          className="rounded-none font-semibold text-black"
        >
          Owner
        </TabsTrigger>
        <TabsTrigger
          value="tenants"
          className="rounded-none font-semibold text-black"
        >
          Tenants
        </TabsTrigger>
        <TabsTrigger
          value="employee"
          className="rounded-none font-semibold text-black"
        >
          Employee
        </TabsTrigger>
      </TabsList>
      <TabsContent value="owner">
        <OwnersUser />
      </TabsContent>
      <TabsContent value="tenants">
        <TenantsUser />
      </TabsContent>
      <TabsContent value="employee">
        <EmployeeUser />
      </TabsContent>
    </Tabs>
  );
}
