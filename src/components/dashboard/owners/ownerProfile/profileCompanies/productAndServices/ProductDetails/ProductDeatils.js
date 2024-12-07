import { Button } from "@/components/ui/button";
import {
  CircleDollarSign,
  CircleUserRound,
  MapPin,
  Share,
  SquarePen,
  Star,
  ThumbsDown,
  ThumbsUp,
  View,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import RatingBreakdown from "./RatingBreakdown";

function ProductDeatils() {
  return (
    <div className="mt-5">
      <div className="bg-white border border-gray-200 rounded-md p-2 md:p-4 w-full flex flex-col md:flex-row justify-between">
        <div className="flex gap-2 md:gap-5 w-full">
          <div className="relative w-24 h-32 md:h-40 md:w-56 rounded-sm overflow-hidden bg-gray-500">
            {/* <Image
              src="/images/signup.svg"
              fill
              className="absolute h-full w-full object-cover"
            /> */}
          </div>
          <div className="w-fit space-y-3">
            <p className="text-md md:text-xl text-gray-800 font-semibold">
              AST House
            </p>
            <div className="flex gap-1 mt-4">
              <MapPin size={16} color="rgba(0,0,0,.5)" />
              <p className="text-xs font-semibold text-gray-500">
                St Road 145 street main garden town , Newyork
              </p>
            </div>
            <div className="flex items-center gap-1.5 md:gap-3">
              <div className="flex gap-1">
                <CircleDollarSign size={16} color="rgba(0,0,0,.5)" />
                <p className="text-xs font-semibold text-gray-500">
                  Purchase Rate:
                </p>
              </div>
              <p className="text-xs font-semibold text-gray-900">$25,000</p>
            </div>
            <div className="flex items-center gap-1.5 md:gap-3">
              <div className="flex gap-1">
                <CircleUserRound size={16} color="rgba(0,0,0,.5)" />
                <p className="text-xs font-semibold text-gray-500">Owned By:</p>
              </div>
              <p className="text-xs font-semibold text-gray-900">Alex Wong</p>
            </div>
          </div>
        </div>
        {/* -------- */}
        <div className="flex w-full md:w-fit gap-2 justify-between md:justify-normal mt-6 md:mt-0">
          <Button className="bg-secondary h-9 gap-2 text-xs md:text-sm text-white w-fit px-5">
            <View size={16} color="#fff" />
            <p>Hide</p>
          </Button>
          <Button className="bg-secondary h-9 gap-2 text-xs md:text-sm text-white w-fit px-5">
            <Share size={16} color="#fff" />
            <p>Share</p>
          </Button>
          <Button className="bg-secondary h-9 gap-2 text-xs md:text-sm text-white w-fit px-5">
            <SquarePen size={16} color="#fff" />
            <p>Edit Product</p>
          </Button>
        </div>
      </div>
      {/* ============== */}

      {/* ========================== */}
      <div className="flex flex-col md:flex-row w-full mt-5 gap-5">
        <div className="bg-white border border-gray-200 rounded-md p-2 md:p-4 flex-1">
          <p className="text-gray-800 font-semibold text-md">Product Details</p>
          <div className="mt-2">
            <div className="flex items-center justify-between w-full border-b py-2">
              <p className="text-gray-700 font-medium text-sm">Square Foot</p>
              <p className="text-gray-700 font-medium text-sm">5676 ft</p>
            </div>
            <div className="flex items-center justify-between w-full border-b py-2">
              <p className="text-gray-700 font-medium text-sm">Square Foot</p>
              <p className="text-gray-700 font-medium text-sm">5676 ft</p>
            </div>
            <div className="flex items-center justify-between w-full border-b py-2">
              <p className="text-gray-700 font-medium text-sm">Square Foot</p>
              <p className="text-gray-700 font-medium text-sm">5676 ft</p>
            </div>
            <div className="flex items-center justify-between w-full border-b py-2">
              <p className="text-gray-700 font-medium text-sm">Square Foot</p>
              <p className="text-gray-700 font-medium text-sm">5676 ft</p>
            </div>
            <div className="flex items-center justify-between w-full border-b py-2">
              <p className="text-gray-700 font-medium text-sm">Square Foot</p>
              <p className="text-gray-700 font-medium text-sm">5676 ft</p>
            </div>
          </div>
          <p className="text-gray-800 font-semibold text-md mt-6">
            Total Price
          </p>
          <div className="mt-2">
            <div className="flex items-center justify-between w-full border-b py-2">
              <p className="text-gray-700 font-medium text-sm">Price</p>
              <p className="text-gray-700 font-medium text-sm">$21,000</p>
            </div>
            <div className="flex items-center justify-between w-full border-b py-2">
              <p className="text-gray-700 font-medium text-sm">Tax Price</p>
              <p className="text-gray-700 font-medium text-sm">$21,000</p>
            </div>
          </div>
          <div>
            <p className="text-gray-800 font-semibold text-md mt-6">Summary</p>
            <p className="text-gray-500 font-medium mt-1 leading-5 tracking-wider text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <div className="bg-white border border-gray-200 rounded-md p-2 md:p-4">
            <p className="text-gray-800 font-semibold text-md">Reviews</p>
          </div>
          <div className="flex gap-3 w-full">
            <div className="bg-white border border-gray-200 rounded-md p-2 md:p-4 w-full flex flex-col justify-between">
              <p class="text-xs font-semibold text-gray-700">Overall Ratings</p>
              <div className="flex flex-col justify-center items-center mt-4">
                <p class="text-xl md:text-3xl font-semibold text-gray-800">
                  4.5 / 5
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <Star size={20} fill="#808080" color="#808080" />
                  <Star size={20} fill="#808080" color="#808080" />
                  <Star size={20} fill="#808080" color="#808080" />
                  <Star size={20} fill="#808080" color="#808080" />
                  <Star size={20} fill="#d1d5db" color="#d1d5db" />
                </div>
              </div>
              <p class="text-xs md:text-sm font-medium text-gray-700 text-center">
                2k+ Reviews
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-md p-2 md:p-4 w-full">
              <RatingBreakdown />
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-white border border-gray-200 rounded-md p-2 md:p-4">
              {/* === */}
              <div className="flex items-start gap-4">
                <div className="relative h-10 w-20 rounded-sm overflow-hidden bg-gray-500">
                  {/* <Image
                    src="/images/signup.svg"
                    fill
                    className="absolute h-full w-full object-cover"
                  /> */}
                </div>
                <div className="">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex gap-3 items-center">
                      <p class="text-xs font-semibold text-gray-900">
                        Alex Wong
                      </p>
                      <p class="text-xs font-medium text-gray-500">
                        10 days ago
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <ThumbsDown size={16} color="#808080" fill="#808080" />
                      <ThumbsUp size={16} color="#808080" fill="#808080" />
                    </div>
                  </div>
                  {/* ====== */}
                  <div className="mt-3">
                    <div className="flex items-center gap-1">
                      <Star size={14} fill="#808080" color="#808080" />
                      <Star size={14} fill="#808080" color="#808080" />
                      <Star size={14} fill="#808080" color="#808080" />
                      <Star size={14} fill="#808080" color="#808080" />
                      <Star size={14} fill="#d1d5db" color="#d1d5db" />
                    </div>
                    <p class="text-xs font-semibold text-gray-900 mt-1.5">
                      This was nice in buy
                    </p>
                    <p class="text-xs font-normal text-gray-700 mt-0.5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                  </div>
                </div>
              </div>
              {/* === */}
            </div>
            <div className="bg-white border border-gray-200 rounded-md p-2 md:p-4">
              {/* === */}
              <div className="flex items-start gap-4">
                <div className="relative h-10 w-20 rounded-sm overflow-hidden bg-gray-500">
                  {/* <Image
                    src="/images/signup.svg"
                    fill
                    className="absolute h-full w-full object-cover"
                  /> */}
                </div>
                <div className="">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex gap-3 items-center">
                      <p class="text-xs font-semibold text-gray-900">
                        Alex Wong
                      </p>
                      <p class="text-xs font-medium text-gray-500">
                        10 days ago
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <ThumbsDown size={16} color="#808080" fill="#808080" />
                      <ThumbsUp size={16} color="#808080" fill="#808080" />
                    </div>
                  </div>
                  {/* ====== */}
                  <div className="mt-3">
                    <div className="flex items-center gap-1">
                      <Star size={14} fill="#808080" color="#808080" />
                      <Star size={14} fill="#808080" color="#808080" />
                      <Star size={14} fill="#808080" color="#808080" />
                      <Star size={14} fill="#808080" color="#808080" />
                      <Star size={14} fill="#d1d5db" color="#d1d5db" />
                    </div>
                    <p class="text-xs font-semibold text-gray-900 mt-1.5">
                      This was nice in buy
                    </p>
                    <p class="text-xs font-normal text-gray-700 mt-0.5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                  </div>
                </div>
              </div>
              {/* === */}
            </div>
            <div className="flex items-center justify-between">
              <Button className="bg-white h-9 gap-2 text-xs md:text-sm text-secondary w-fit px-5 border border-gray-200">
                Load More
              </Button>
              <Button className="bg-secondary h-9 gap-2 text-xs md:text-sm text-white w-fit px-5 border border-gray-200">
                Show Less
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDeatils;
