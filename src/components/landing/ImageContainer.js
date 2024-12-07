"use client";
import Image from "next/image";

const ImageContainer = () => {
  return (
    <div className="z-10">
      <div className="w-full absolute inset-0 min-h-[800px] h-auto  top-auto left-auto overflow-hidden">
        <Image
          src="/images/header.jpg"
          alt="header"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute left-0 right-0 top-0 w-full h-auto !z-[99999] bg-gradient-to-t from-white from-[5%] to-[95%] to-transparent pt-[100px]">
        <div className=" px-4 max-w-[1200px] mx-auto flex items-start ">
          <div data-aos="fade-up" data-aos-duration="3000">
            <h1 className="text-black text-[40px] md:text-[60px] font-light text-center">
              <span className="block">Meet Assetra.</span>
              <span className="block">
                Companies Management Operations Online Platform
              </span>
            </h1>
            <h3 className="text-center text-[#36353c] text-[26px] max-w-[900px] mx-auto mt-20">
              Optimize your companies management process and get full control of
              the companies.
            </h3>
          </div>
        </div>
        <h2 className="max-w-[677px] leading-[130%] mx-auto text-center text-[25px] md:text-[48px] pt-[210px]">
          Assetra supports: Companies, Staff, Payment, and Tenants
        </h2>
      </div>
    </div>
  );
};

export default ImageContainer;
