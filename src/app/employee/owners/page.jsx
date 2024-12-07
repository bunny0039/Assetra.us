import { InputWithRightIcon } from "@/components/ui/inputWithRightIocn";
import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const metadata = {
  title: "Owners - Employee | Assetra",
  description: "",
};

function page() {
  return (
    <div className="w-full bg-gray-100 pb-20 min-h-[90vh]">
      {/* ===== */}
      <div className="bg-transparent px-4 md:px-10">
        <div className="w-full flex justify-between items-center">
          <p className="text-gray-700 text-md md:text-xl font-semibold capitalize">
            Owners
          </p>
          {/* <AddNewUser type="owner" /> */}
        </div>
        <div className="w-full flex justify-center items-center mt-2.5 md:mt-4">
          <div className="w-full border border-gray-300 rounded-lg md:rounded-xl p-2 md:p-5 flex flex-wrap gap-5 md:gap-7 justify-between md:justify-stretch items-stretch">
            {/* {isFetching ? (
              <Loader />
            ) : ( */}
            <>
              {true ? (
                <>
                  {[1, 2, 3, 4, 5]?.map((item) => {
                    return (
                      <div className="w-[47%] md:w-fit bg-white py-2 md:py-4 px-2.5 md:px-5 flex flex-col justify-center items-center rounded-sm">
                        <Avatar className="relative h-16 md:h-20 w-16 md:w-20 rounded-full overflow-hidden border border-primary flex justify-center items-center bg-gray-50">
                          <AvatarImage src="" alt={"A"} />
                          <AvatarFallback>{"A"}</AvatarFallback>
                        </Avatar>
                        <p className="text-gray-800 text-sm md:text-md font-semibold mt-3">
                          {"A"}
                        </p>
                        <div className="bg-gray-200 rounded-sm py-1 px-2 w-fit flex justify-center items-center mt-2 capitalize">
                          <p className="text-gray-700 text-xs font-normal">
                            Owner
                          </p>
                        </div>
                        {/* {"address" in item && ( */}
                        <div className="flex items-center justify-center gap-2 mt-4">
                          <Image
                            src="/images/owner_icon.svg"
                            alt=""
                            height={16}
                            width={16}
                          />
                          <p className="text-gray-700 text-xs font-normal">
                            Lahore, Pak
                          </p>
                        </div>
                        {/* )} */}

                        <Button
                          className="bg-secondary h-8 mt-5 text-xs font-normal md:text-sm text-white w-full md:w-44"
                          asChild
                        >
                          <Link href={`/`}>View Profile</Link>
                        </Button>
                      </div>
                    );
                  })}
                </>
              ) : (
                <div className="w-full flex justify-center items-center h-20">
                  <p>No data found</p>
                </div>
              )}
            </>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
