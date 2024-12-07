"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OwnersUser from "./OwnersUser";
import TenantsUser from "./TenantsUser";
import EmployeeUser from "./EmployeeUser";

export function UsersCustomTabs({ companyId, from }) {
  return (
    <Tabs
      defaultValue={from === "company" ? "employee" : "owner"}
      className="w-full rounded-none p-0"
    >
      <TabsList
        className={` ${
          from !== "office"
            ? from !== "company"
              ? "grid grid-cols-3"
              : "grid grid-cols-2"
            : "grid grid-cols-2"
        }  bg-white ${
          from !== "office" ? (from !== "company" ? "w-96" : "w-80") : "w-80"
        } rounded-none p-0`}
      >
        {from !== "company" && (
          <TabsTrigger
            value="owner"
            className="rounded-none font-semibold text-black"
          >
            Owner
          </TabsTrigger>
        )}

        <TabsTrigger
          value="employee"
          className="rounded-none font-semibold text-black"
        >
          Employee
        </TabsTrigger>
        {from !== "office" && (
          <TabsTrigger
            value="tenants"
            className="rounded-none font-semibold text-black"
          >
            Tenants
          </TabsTrigger>
        )}
      </TabsList>
      {from !== "company" && (
        <TabsContent value="owner">
          <OwnersUser from={from} />
        </TabsContent>
      )}

      <TabsContent value="employee">
        <EmployeeUser from={from} />
      </TabsContent>
      {from !== "office" && (
        <TabsContent value="tenants">
          <TenantsUser companyId={companyId} from={from} />
        </TabsContent>
      )}
    </Tabs>
  );
}
