"use client";

import React from "react";
import ProfileHeader from "../shared/ProfileHeader";
import Image from "next/image";
import ProfilesGroups from "./ProfilesGroups";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { routes } from "@/routes/routes";

function InvitationAccept() {
  const router = useRouter();

  const handleAccept = () => {
    router.push(routes.DASHBOARD_FAMILY_OFFICE_USERS);
  };

  const handleDeclined = () => {
    router.push(routes.DASHBOARD_FAMILY_OFFICE_USERS);
  };

  return (
    <div className="bg-[#D3ECF5] min-h-screen">
      <ProfileHeader />
      <div className="w-full h-[90vh] md:flex-1 flex justify-center items-center">
        <div className="bg-white rounded-lg flex flex-col justify-center items-center w-fit px-6 md:px-12 py-7">
          <div
            className="bg-white w-full rounded-lg px-6 md:px-8 py-6 flex flex-col justify-center items-center"
            style={{ boxShadow: "2px 2px 12px 2px rgba(22,154,200,0.75)" }}
          >
            <div className="h-20 w-20 rounded-full overflow-hidden relative bg-gray-500">
              {/* <Image
                src="/images/signup.svg"
                className="absolute object-cover"
                fill
              /> */}
            </div>
            <div className="text-center mt-6 px-4">
              <h1 className="font-semibold text-gray-800 text-lg md:text-xl uppercase">
                INVITATION LINK
              </h1>
              <h6 className="font-normal text-gray-700 text-xs md:text-sm">
                Join this link for more details about property
              </h6>
            </div>
            {/* === */}
            <div className="flex justify-start items-center w-full mt-6 md:mt-4 gap-3">
              <ProfilesGroups />
              <p className="font-normal text-gray-700 text-xs">
                People already join this link
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-12 md:mt-8 w-full gap-10">
            <Button
              className="bg-primary h-11 px-10 font-semibold text-xs md:text-md text-white"
              onClick={handleAccept}
            >
              Accept
            </Button>
            <Button
              className="bg-white border border-primary text-primary px-10 h-11 font-semibold text-xs md:text-md hover:text-white"
              onClick={handleDeclined}
            >
              Decline
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvitationAccept;
