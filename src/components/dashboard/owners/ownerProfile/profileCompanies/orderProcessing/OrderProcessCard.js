import React from "react";
import { OwnerProfileDropdown } from "../../OwnerProfileDropdown";
import { CheckCircle } from "lucide-react";
import ProductServiceCard from "../productAndServices/ProductServiceCard";

const OrderProcessCard = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between gap-2 md:gap-5">
      <div className="">
        <ProductServiceCard />
      </div>
      <div className="bg-white border border-gray-200 rounded-md p-2 md:p-4 flex-1 flex justify-between">
        <div>
          <div className="space-y-2 md:space-y-1">
            <div className="flex gap-2">
              <p className="text-sm text-gray-800 font-medium">Order:</p>
              <p className="text-sm text-gray-600 font-normal">#214</p>
            </div>
            <div className="flex gap-2">
              <p className="text-sm text-gray-800 font-medium">Custome Name:</p>
              <p className="text-sm text-gray-600 font-normal">John Han</p>
            </div>
            <div className="flex gap-2">
              <p className="text-sm text-gray-800 font-medium">Phone No:</p>
              <p className="text-sm text-gray-600 font-normal">+00-000000000</p>
            </div>
            <div className="flex gap-2">
              <p className="text-sm text-gray-800 font-medium">Address:</p>
              <p className="text-sm text-gray-600 font-normal">
                20448 Alec Shoal,New York
              </p>
            </div>
            <div className="flex gap-2">
              <p className="text-sm text-gray-800 font-medium">City:</p>
              <p className="text-sm text-gray-600 font-normal">New York</p>
            </div>
          </div>
          <div className="bg-green-200 rounded-sm px-2 py-1 mt-5 flex items-center gap-3 w-fit">
            <CheckCircle size={18} color="#fff" fill="green" />
            <p className="text-sm text-green-800 font-semibold">Completed</p>
          </div>
        </div>
        <div>
          <OwnerProfileDropdown />
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-md p-2 md:p-6 space-y-6">
        <p className="text-lg text-gray-800 font-semibold">Payment</p>
        <div className="flex justify-between items-center gap-5">
          <div>
            <p className="text-sm text-gray-800 font-medium">Price</p>
            <p className="text-sm text-gray-600 font-normal">$25,000</p>
          </div>
          <div>
            <p className="text-sm text-gray-800 font-medium">Tax</p>
            <p className="text-sm text-gray-600 font-normal">$90</p>
          </div>
          <div>
            <p className="text-sm text-gray-800 font-medium">Amount</p>
            <p className="text-sm text-gray-600 font-normal">$25,000</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="bg-gray-200 px-2 py-1 rounded-sm">
            <p className="text-sm text-gray-800 font-medium">Total Price</p>
          </div>
          <p className="text-md text-gray-800 font-medium">$25,000</p>
        </div>
      </div>
    </div>
  );
};

export default OrderProcessCard;
