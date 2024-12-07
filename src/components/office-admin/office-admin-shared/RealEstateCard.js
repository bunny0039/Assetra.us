import { format } from "date-fns";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function RealEstateCard({ item, from }) {
  console.log("iii=>", item);
  return (
    <Link href={`/real-estates/${item?.id}/property-details?from=${from}`}>
      <div className="w-full sm:w-fit bg-white border border-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-all">
        {/* <div className="relative h-32 w-full aspect-video bg-gray-500"> */}
        {/* <Image
            src="/images/signup.svg"
            fill
            className="absolute w-full h-full object-cover "
          /> */}
        {/* </div> */}
        <div className="p-3 w-40 space-y-4">
          <div className="">
            <p className="text-gray-500 text-xs font-medium">Location</p>
            <p className="text-gray-700 text-xs font-semibold">
              {item?.address}
            </p>
          </div>
          <div className="">
            <p className="text-gray-500 text-xs font-medium">Square Foot</p>
            <p className="text-gray-700 text-xs font-semibold">
              {item?.square_foot}
            </p>
          </div>
          {item?.created_at && (
            <div className="">
              <p className="text-gray-500 text-xs font-medium">Created At</p>
              <p className="text-gray-700 text-xs font-semibold">
                {format(new Date(item?.created_at), "PP")}
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default RealEstateCard;
