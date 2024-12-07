"use client";

import { useState } from "react";

const Cards = () => {
  const [state] = useState([
    {
      id: 1,
      number: "01",
      heading: "Companies Management",
      body: "Manage your companies by simple registration and onboarding process",
    },
    {
      id: 2,
      number: "02",
      heading: "Employee Management",
      body: "Manage staff of the company",
    },
    {
      id: 3,
      number: "03",
      heading: "Tenants Management",
      body: "Identify and validate the tenants",
    },
    {
      id: 4,
      number: "04",
      heading: "Data & Analytics Management",
      body: "Create and analyse data",
    },
    {
      id: 5,
      number: "05",
      heading: "Role Based Permissions",
      body: "Manage staff based on roles",
    },
  ]);
  return (
    <div className="max-w-[1400px] px-4 w-full mx-auto pt-[330px] pb-[120px]">
      <h1 className="text-[35px] md:text-[48px] leading-[130%] max-w-[677px] mb-10">
        What we provide
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        {state.map((item) => (
          <div key={item.id}>
            <h1 className="text-xl font-medium pb-6">{item.number}</h1>
            <div className="line"></div>
            <h1 className="pt-6 text-[26px] mb-[32px]">{item.heading}</h1>
            <p className="text-base leading-[24px]">{item.body}</p>
          </div>
        ))}
      </div>
      <h1 className="mt-[200px] text-center text-[34px] leading-[134%]">
        Assetra made this process clean, clear and manageable
      </h1>
    </div>
  );
};

export default Cards;
