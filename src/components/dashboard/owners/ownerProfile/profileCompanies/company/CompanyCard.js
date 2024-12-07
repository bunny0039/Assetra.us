import ProfilesGroups from "@/components/inivitation-accept/ProfilesGroups";
import { Button } from "@/components/ui/button";
import {
  CircleDollarSign,
  LineChart,
  Link as LinkIcons,
  Users,
} from "lucide-react";
import Image from "next/image";
import React from "react";

function CompanyCard() {
  return (
    <div className="w-full sm:w-fit px-6 py-6 bg-white rounded-2xl">
      <div className="flex gap-1.5 w-full items-center justify-between">
        <div className="flex items-center gap-1">
          <Image
            src="/images/company.png"
            width={40}
            height={40}
            resizeMode="contain"
            className="object-contain"
          />
          <div>
            <p className="text-md font-semibold text-gray-800">Google</p>
            <p className="text-xs font-normal text-gray-600">
              Technology Company
            </p>
          </div>
        </div>
        <div>
          <ProfilesGroups size="size-[28px]" />
        </div>
      </div>
      <div className="flex gap-2 items-center my-4">
        <div className="flex gap-1 px-2 py-1.5 bg-gray-200 rounded-sm">
          <LinkIcons size={14} color="rgba(0,0,0,.5)" />
          <p className="text-xs font-medium text-gray-900">10</p>
        </div>
        <div className="flex gap-1 px-2 py-1.5 bg-gray-200 rounded-sm">
          <LinkIcons size={14} color="rgba(0,0,0,.5)" />
          <p className="text-xs font-medium text-gray-900">All Updated</p>
        </div>
      </div>
      <div className="my-7 space-y-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Users size={17} color="rgba(0,0,0,.7)" />
            <p className="text-xs md:text-sm font-semibold text-gray-800">
              Company Size:
            </p>
          </div>
          <p className="text-xs font-medium text-gray-600">100 Members</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <CircleDollarSign size={17} color="rgba(0,0,0,.7)" />
            <p className="text-xs md:text-sm font-semibold text-gray-800">
              Revenue:
            </p>
          </div>
          <p className="text-xs font-medium text-gray-600">$1M / Per Year</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <LineChart size={17} color="rgba(0,0,0,.7)" />
            <p className="text-xs md:text-sm font-semibold text-gray-800">
              Open Projects:
            </p>
          </div>
          <p className="text-xs font-medium text-gray-600">10 Projects</p>
        </div>
      </div>
      {/* ==== */}
      <div className="flex justify-center">
        <Button className="bg-secondary h-9 text-xs md:text-sm text-white w-full mx-4">
          Visit Company
        </Button>
      </div>
    </div>
  );
}

export default CompanyCard;
