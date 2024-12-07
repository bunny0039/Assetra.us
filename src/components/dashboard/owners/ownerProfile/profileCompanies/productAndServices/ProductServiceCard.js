import { Heart, MapPin } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function ProductServiceCard({ setActiveMenu }) {
  const router = useRouter();

  const handleProductDetails = () => {
    setActiveMenu({
      id: 6,
      accessor: "productDeatils",
      title: "Product & Services",
    });
  };
  return (
    <div
      className="w-full relative sm:w-fit bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all"
      onClick={handleProductDetails}
    >
      <div className="absolute top-2 right-2 z-50">
        <Heart size={22} color="#fff" />
      </div>
      <div className="absolute top-0 left-0 bg-gray-200 py-1 px-2 rounded-br-md z-50">
        <p className="text-gray-900 text-[10px] font-semibold">New</p>
      </div>
      <div className="relative h-32 w-full aspect-video bg-gray-500">
        {/* <Image
          src="/images/signup.svg"
          fill
          className="absolute w-full h-full object-cover "
        /> */}
        <div className="absolute bottom-2 right-2 bg-white rounded-sm py-1 px-2">
          <p className="text-gray-900 text-xs font-semibold">$ 25,000</p>
        </div>
      </div>
      <div className="px-2 pb-4 pt-3">
        <p className="text-gray-900 text-md font-semibold">Blue Horizon</p>
        <div className="flex mt-2">
          <div className="w-6 h-6">
            <MapPin size={16} color="rgba(0,0,0,.5)" />
          </div>
          <p className="text-gray-600 text-xs font-medium">
            St Road 145 street, Newyork
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductServiceCard;
