import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function RealEstateCard({ item, from }) {
  return (
    <Link href={`/real-estates/${item?.id}/property-details?from=${from}`}>
      <div className="w-full sm:w-fit bg-white border border-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-all">
        <div className="relative h-32 w-full aspect-video bg-gray-500">
          {/* <Image
            src="/images/signup.svg"
            fill
            className="absolute w-full h-full object-cover "
          /> */}
        </div>
        <div className="px-2 pb-4 pt-3">
          <p className="text-gray-900 text-md font-semibold">{item?.name}</p>
          <div className="flex mt-2">
            <div className="w-6 h-6">
              <MapPin size={18} color="rgba(0,0,0,.5)" />
            </div>
            <p className="text-gray-600 text-xs font-medium w-40">
              {item?.address}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RealEstateCard;
