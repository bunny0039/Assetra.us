"use client";
import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { FiMinus } from "react-icons/fi";

const FAQ = () => {
  const [active, setActive] = useState(1);
  const [state] = useState([
    {
      id: 1,
      heading: "What is Assetra?",
      body: "Assetra is all-in-one toolbox to streamline, track and secure payments in digital currencies",
    },
    {
      id: 2,
      heading: "Which blockchain Assetra is available?",
      body: "Assetra provides its services for NEAR Protocol, ETH, Tron, Polygon and BSC. We support payments in stablecoins and native tokens",
    },
    {
      id: 3,
      heading: "How we help you?",
      body: "Assetra will automate data collection of your payments: chain identification, wallet address, status of payment. We will provide you the ability to get your payment back if the wallet access was lost by the recipient. You will be able to see payments in different chains in one place and evaluate your spends",
    },
    {
      id: 4,
      heading: "Which wallets does Assetra support?",
      body: "Currently, Assetra supports the following wallets: MyNearWallet (NEAR), Metamask (ETH, Polygon, BSC), TronLink (Tron). In the future, Assetra should become wallet agnostic",
    },
    {
      id: 5,
      heading: "If I need support or immediate feedback?",
      body: "Assetra team will back you up anytime 24/7. We organize our onboarding process for our customers in the way that they don`t feel lonely during and could feel the full scope of our services on the way. You can always reach out to us and send your request either over telegram @Assetrateam or email info@Assetra.co",
    },
  ]);
  return (
    <div
      className="max-w-[1400px] px-4 mx-auto"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="flex flex-wrap gap-10">
        <div className="w-full lg:w-3/12">
          <h1 className="text-[40px] md:text-[62px] uppercase">faq</h1>
        </div>
        <div className="flex-1">
          {state.map((item) => (
            <div key={item.id} className="w-full border-b py-4">
              <div
                className="flex items-center justify-between space-x-10"
                onClick={() => setActive(item.id)}
              >
                <h2 className="text-xl md:text-[26px] flex-1">
                  {item.heading}
                </h2>
                <span className="flex w-[48px] h-[48px] rounded-full items-center justify-center bg-[#dbd6f8] cursor-pointer">
                  {active === item.id ? <FiMinus /> : <LuPlus />}
                </span>
              </div>
              <p
                className={` transition-all duration-100 text-sm md:text-base ${
                  active === item.id ? "scale-y-1 h-auto pt-6" : "scale-y-0 h-0"
                }`}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
