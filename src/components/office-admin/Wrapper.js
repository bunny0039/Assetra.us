"use client";
import React from "react";
import Image from "next/image";

function Wrapper({ children, bgImg }) {
  return (
    <main className="flex">
      <div className="hidden md:flex flex-1 relative h-screen w-full bg-gray-500">
        {/* <Image
          src={`${bgImg}`}
          fill
          alt=""
          className="absolute h-full w-full object-cover"
        /> */}
      </div>
      <div className="flex flex-1 bg-gray-50 justify-center items-center w-full h-screen">
        {children}
      </div>
    </main>
  );
}

export default Wrapper;
