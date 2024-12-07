"use client";

import Image from "next/image";
import { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const PricingTable = () => {
  const [state] = useState([
    {
      id: 1,
      name: "solo",
      image: "/images/solo.svg",
      price: "50",
      description: "Manage payouts yourself",
      features: [
        "Wallet Management",
        "Money Transfers",
        "Contractor Management",
        "Reports and Analytics",
        "Human Support",
      ],
      buttonText: "try it for 2 months",
    },
    {
      id: 2,
      name: "Team",
      image: "/images/team.svg",
      price: "80",
      description: "Manage payouts with a team",
      features: [
        "Everything in Solo",
        "Collaborate with your Team",
        "Payment Approval Flow",
        "Team onboarding per request",
        "Human Support",
      ],
      buttonText: "try it for 2 months",
    },
    {
      id: 3,
      name: "escrow",
      image: "/images/escrow.svg",
      price: "399",
      description: "Your own escrow smart contract",
      features: [
        "Everything in Team",
        "Self Owned Escrow Contract",
        "Escrow Flows Management",
        "Security training per request",
        "Human Support",
      ],
      buttonText: "try it for 2 months",
    },
  ]);
  return (
    <div
      className="max-w-[1280px] w-full mx-auto px-4 my-[150px]"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <h3 className={`heading mb-7 w-full text-center`}>pricing</h3>
      <h1 className="text-[35px] md:text-[44px] mb-[15px] text-center">
        Choose plan that suits you
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14 mt-20">
        {state.map((item) => (
          <div
            key={item.id}
            className={`m-shadow ${
              item.id !== 2
                ? "rounded-[24px]"
                : "rounded-br-[24px] rounded-bl-[24px]"
            } ${
              item.id === 2 && "mt-16 lg:mt-0"
            }  border  border-[#eff0f6] relative`}
          >
            {item.id === 2 && (
              <div className="bg-[#6a4fed] text-center text-white uppercase px-4 h-[60px] text-lg font-semibold absolute w-full -top-[60px] flex items-center justify-center rounded-tr-[24px] rounded-tl-[24px]">
                most popular
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center space-x-5">
                <Image src={item.image} width={74} height={74} alt="image" />
                <div>
                  <span className="capitalize text-lg font-medium block text-[#6f6c90]">
                    Assetra
                  </span>
                  <span className="text-[#170f49] text-[30px] font-bold capitalize">
                    {item.name}
                  </span>
                </div>
              </div>
              <p className="mt-12 text-[#6f6c90] mb-2.5 text-lg">
                {item.description}
              </p>
              <div className="flex items-center">
                <span className="text-[#170f49] text-[35px] md:text-[54px] font-bold">
                  ${item.price}
                </span>
                <span className="text-[#6f6c90] text-xl font-medium block mt-3">
                  /monthly
                </span>
              </div>
              <span className="text-[#170f49] text-lg font-medium block mt-3 mb-7">
                What’s included
              </span>
              {item.features.map((feature, index) => (
                <div className="flex items-center space-x-3 mb-4" key={index}>
                  <IoIosCheckmarkCircle color="#6a4fed" size={25} />
                  <span className="text-[#170f49] text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
