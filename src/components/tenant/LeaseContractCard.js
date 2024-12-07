import { Calendar, Clock } from "lucide-react";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";

function LeaseContractCard() {
  return (
    <div className="bg-gray-100 p-2.5 rounded-md">
      <div className="w-full flex justify-end">
        <IoMdMore className="h-6 w-6 text-gray-800" />
      </div>
      <div className="pb-5 pt-2 flex items-center gap-2">
        <FaCheckCircle className="h-5 w-5 text-gray-600" />
        <p className="text-xs font-medium text-gray-800">
          Contract approval from designated stake holder{" "}
        </p>
      </div>
      <div className="border-t-2 border-gray-400 pt-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-gray-200 p-1.5 rounded-sm w-fit">
            <Calendar color="rgba(0,0,0,.7)" size={14} />
            <p className="text-xs font-semibold text-gray-800">12, 4, 2024</p>
          </div>
          <div className="flex items-center gap-1 bg-gray-200 p-1.5 rounded-sm w-fit">
            <Clock color="rgba(0,0,0,.7)" size={14} />
            <p className="text-xs font-semibold text-gray-800">03</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-red-100 flex justify-center items-center">
            <p className="text-xs font-semibold text-gray-800">A</p>
          </div>
          <div className="-ml-1.5 w-6 h-6 rounded-full bg-blue-100 flex justify-center items-center">
            <p className="text-xs font-semibold text-gray-800">F</p>
          </div>
          <p className="ml-0.5 text-xs font-semibold text-gray-800">+5</p>
        </div>
      </div>
    </div>
  );
}

export default LeaseContractCard;
