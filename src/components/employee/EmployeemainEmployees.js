"use client";
import React from "react";
import { TransactionTable } from "../dashboard/owners/TransactionTable";

function EmployeemainEmployees() {
  return (
    <div className="px-4 md:px-10">
      {/* ===== */}
      <div className="bg-transparent mt-8">
        <p className="text-gray-700 text-md md:text-xl font-semibold">
          Employees
        </p>
        <div className="flex items-center justify-between mt-2.5 md:mt-4">
          <TransactionTable />
        </div>
      </div>
    </div>
  );
}

export default EmployeemainEmployees;
