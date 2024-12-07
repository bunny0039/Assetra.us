import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function FinancialOverviewCard({ index = 1, title, amount }) {
  return (
    <div
      className={`${
        index === 0 ? "bg-secondary" : "bg-white"
      } p-4 rounded-md w-full border border-gray-200`}
    >
      <div className="flex items-center gap-1.5">
        <div
          className={`h-7 w-7 rounded-full ${
            index === 0 ? "bg-[rgba(0,0,0,.1)]" : "bg-[rgba(0,0,0,.1)]"
          } flex justify-center items-center overflow-hidden`}
        >
          <Image src="/images/networth.svg" alt="" width={16} height={16} />
        </div>
        <p
          className={`${
            index === 0 ? "text-white" : "text-black"
          } text-sm font-medium`}
        >
          {title}
        </p>
      </div>
      <p
        className={`${
          index === 0 ? "text-white" : "text-black"
        } text-lg md:text-xl font-semibold mt-4`}
      >
        ${amount ? amount?.toFixed(2) : 0.0}
      </p>
      {/* <div className="w-full md:w-fit flex items-center justify-between md:justify-normal gap-3 bg-transparent">
        <div className="flex items-center gap-1">
          <ArrowUpRight
            size={20}
            strokeWidth={2.5}
            className={index === 0 ? "text-green-700" : "text-red-700"}
          />
          <p
            className={`${
              index === 0 ? "text-white" : "text-gray-700"
            } text-sm font-medium`}
          >
            21.9%
          </p>
        </div>
        <p
          className={`${
            index === 0 ? "text-white" : "text-gray-500"
          } text-sm font-medium`}
        >
          +$67k today
        </p>
      </div> */}
    </div>
  );
}

export default FinancialOverviewCard;
