"use client";

import { routes } from "@/routes/routes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import Loader from "../shared/Loader";

const Navbar = () => {
  const [links] = useState([
    { id: 1, title: "we provide", link: "#" },
    { id: 2, title: "how it works", link: "#" },
    { id: 3, title: "pricing", link: "#" },
    { id: 4, title: "FAQ", link: "#" },
    { id: 5, title: "about us", link: "#" },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const { isUserLoggedIn } = useSelector((state) => state.authReducer);
  const router = useRouter();

  const handleGetAssetra = () => {
    setIsLoading(true);
    let jsonOBJ = JSON.parse(localStorage.getItem("userData"));
    if (jsonOBJ !== null) {
      if (jsonOBJ?.role === "superadmin") {
        router.replace(routes.ADD_NEW_SUBSCRIPTION);
      } else if (jsonOBJ?.role === "officeadmin" || jsonOBJ?.role === "admin") {
        router.replace(
          "/office-admin/dashboard/family-office/financial-overview"
        );
      } else if (jsonOBJ?.role === "tenant") {
        router.replace(routes.TENANT_LEASE_CONTRACT);
      } else if (jsonOBJ?.role === "owner") {
        router.replace(`/owner/${jsonOBJ?.id}/financial-overview`);
      } else if (jsonOBJ?.role === "employee") {
        router.replace(`/employee/companies`);
      } else {
        router.replace(`/`);
      }
      setIsLoading(false);
    } else {
      router.push(routes.SIGN_IN);
      setIsLoading(false);
    }
  };

  return (
    <>
      <nav className="h-20 !z-[9999999] bg-white/65  fixed top-0 left-0 w-full hover:h-[100px] transition-all duration-200 group backdrop-blur">
        <div className="px-4 max-w-[1400px] w-full mx-auto flex items-center justify-between space-x-4 h-20 group-hover:h-[100px] transition-all duration-200 relative">
          <Link
            href="/"
            className="relative w-[120px] h-10 group-hover:w-20 group-hover:h-8 transition-all duration-200"
          >
            <Image
              src={"/images/logo.svg"}
              fill
              className="object-contain"
              alt="logo"
            />
          </Link>

          <ul className="hidden lg:flex items-center space-x-[60px]">
            {links.map((link) => (
              <Link
                href={link.link}
                key={link.id}
                className="capitalize text-xs font-medium decoration-clone flex items-center relative  h-20 group-hover:h-[100px] transition-all duration-200 group/link group/icon"
              >
                <span>{link.title}</span>{" "}
                <MdOutlineKeyboardArrowRight className="group-hover/icon:ml-3 text-gray-600 transition-all duration-200" />{" "}
                <span className="absolute w-0 group-hover/link:w-full transition-all duration-200 h-0.5 bg-black top-full"></span>
              </Link>
            ))}
          </ul>

          <div className="flex items-center space-x-6 md:space-x-16">
            {!isUserLoggedIn && (
              <Link
                href="/auth/signin"
                className="capitalize text-xs font-medium decoration-clone"
              >
                sign in
              </Link>
            )}

            {isLoading ? (
              <div className="bg-[#eaeaf3] rounded-[40px] cursor-pointer py-5 pl-[26px] pr-[36px] flex uppercase text-xs font-medium items-center space-x-4 z-50">
                <Loader />
              </div>
            ) : (
              <div
                onClick={handleGetAssetra}
                className="bg-[#eaeaf3] rounded-[40px] cursor-pointer py-5 pl-[26px] pr-[36px] flex uppercase text-xs font-medium items-center space-x-4 z-50"
              >
                <span>get assetra</span>{" "}
                <Image
                  src={
                    "https://assets-global.website-files.com/62cbe7a5c5049667d1ccf4b3/62cc1883903d3473092643bf_bubble.svg"
                  }
                  width={20}
                  height={20}
                  alt="fots"
                />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
