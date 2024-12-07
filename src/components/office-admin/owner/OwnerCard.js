import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function OwnerCard({ item, routePath }) {
  return (
    <div className="w-[47%] md:w-fit bg-white py-2 md:py-4 px-2.5 md:px-5 flex flex-col justify-center items-center rounded-sm">
      <Avatar className="relative h-16 md:h-20 w-16 md:w-20 rounded-full overflow-hidden border border-primary flex justify-center items-center bg-gray-50">
        <AvatarImage src="" alt={item?.name} />
        <AvatarFallback>{item?.name[0]}</AvatarFallback>
      </Avatar>
      <p className="text-gray-800 text-sm md:text-md font-semibold mt-3">
        {item?.name}
      </p>
      <div className="bg-gray-200 rounded-sm py-1 px-2 w-fit flex justify-center items-center mt-2 capitalize">
        <p className="text-gray-700 text-xs font-normal">{item?.user_role}</p>
      </div>
      {"address" in item && (
        <div className="flex items-center justify-center gap-2 mt-4">
          <Image src="/images/owner_icon.svg" alt="" height={16} width={16} />
          <p className="text-gray-700 text-xs font-normal">{item?.address}</p>
        </div>
      )}

      <Button
        className="bg-secondary h-8 mt-5 text-xs font-normal md:text-sm text-white w-full md:w-44"
        asChild
      >
        <Link href={`${routePath}/${item?.id}/financial-overview`}>
          View Profile
        </Link>
      </Button>
    </div>
  );
}

export default OwnerCard;
