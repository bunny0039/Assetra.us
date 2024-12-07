"use client";

import React, { useState } from "react";
import ProfileHeader from "../shared/ProfileHeader";
import Image from "next/image";
import { Button } from "../ui/button";
import SendingForms from "./SendingForms";

function SendInvitationLink() {
  const [invitationLink, setInvitationLink] = useState("");
  return (
    <div className="bg-white min-h-screen">
      <div className="w-full flex flex-col justify-center items-center pt-12 pb-24 bg-[#D3ECF5] px-4 md:px-0">
        <div className="text-center">
          <h1 className="font-semibold text-primary text-md md:text-xl uppercase">
            INVITATION LINK
          </h1>
          <h6 className="font-medium text-gray-700 text-xs md:text-lg">
            Choose the best way that suits your needs
          </h6>
        </div>
        {/* == */}
        <div className="flex items-center justify-between w-full md:max-w-2xl mt-12">
          <div className="h-16 w-16 md:h-24 md:w-24 border border-gray-800 rounded-full overflow-hidden relative bg-gray-500">
            {/* <Image
              src="/images/signup.svg"
              alt=""
              className="absolute object-cover"
              fill
            /> */}
          </div>
          <Image
            src="/images/arrow.svg"
            className="object-contain hidden md:flex"
            alt=""
            height={20}
            width={60}
          />
          <Image
            src="/images/arrow.svg"
            className="object-contain flex md:hidden"
            alt=""
            height={10}
            width={40}
          />
          <div className="h-16 w-16 md:h-24 md:w-24 border border-gray-800 rounded-full overflow-hidden relative bg-gray-500">
            {/* <Image
              src="/images/signup.svg"
              alt=""
              className="absolute object-cover"
              fill
            /> */}
          </div>
          <Image
            src="/images/arrow.svg"
            className="object-contain hidden md:flex"
            alt=""
            height={20}
            width={60}
          />
          <Image
            src="/images/arrow.svg"
            className="object-contain flex md:hidden"
            alt=""
            height={10}
            width={40}
          />
          <div className="h-16 w-16 md:h-24 md:w-24 border border-gray-800 rounded-full overflow-hidden relative bg-gray-500">
            {/* <Image
              src="/images/signup.svg"
              alt=""
              className="absolute object-cover"
              fill
            /> */}
          </div>
        </div>
      </div>
      {/* === */}
      <div className="w-full h-full flex justify-center rounded-sm md:rounded-lg -mt-5 md:-mt-6">
        {invitationLink && (
          <div
            className="flex items-center md:h-12 rounded-sm md:rounded-lg bg-white"
            style={{ boxShadow: "2px 2px 15px 2px rgba(22,154,200,0.75)" }}
          >
            <div className="flex-1 px-5 md:px-16">
              <p className="text-xs md:text-sm text-gray-700 text-medium">
                {invitationLink}
              </p>
            </div>
            <Button
              disabled={!invitationLink}
              className="bg-primary text-white px-3 md:px-10 md:h-12 font-semibold text-xs md:text-md uppercase"
            >
              Copy Link
            </Button>
          </div>
        )}
      </div>
      {/* ==== */}
      <div>
        <SendingForms setInvitationLink={setInvitationLink} />
      </div>
    </div>
  );
}

export default SendInvitationLink;
