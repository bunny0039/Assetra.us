import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function TotalCounts({ title = "", counts = 0 }) {
  return (
    <div className={`bg-gray-50 p-4 rounded-md w-full border border-gray-200`}>
      <div className="flex items-center gap-1">
        {/* <div
          className={`h-7 w-7 rounded-full ${
            index === 0 ? "bg-[rgba(0,0,0,.1)]" : "bg-[rgba(0,0,0,.1)]"
          } flex justify-center items-center overflow-hidden`}
        >
          <Image src="/images/networth.svg" alt="" width={16} height={16} />
        </div> */}
        <p className={`text-balck text-sm font-medium`}>{title}</p>
      </div>
      <p className={`text-black text-lg md:text-xl font-semibold mt-2.5`}>
        {counts}
      </p>
    </div>
  );
}

export default TotalCounts;
