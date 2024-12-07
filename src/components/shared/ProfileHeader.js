import Image from "next/image";
import React from "react";

function ProfileHeader() {
  return (
    <nav className="flex-1 w-full bg-white h-12 flex justify-between items-center px-4 md:px-10">
      <div>
        <Image
          src="/images/logo.svg"
          height={60}
          width={100}
          className="object-contain hidden md:flex"
        />
        <Image
          src="/images/logo.svg"
          height={40}
          width={100}
          className="object-contain flex md:hidden"
        />
      </div>
      {/* <div className="flex items-center gap-5">
        <ProfileDropdown />
        <div className="flex justify-center items-center h-8 w-8 rounded-full bg-gray-200">
          <Bell size={16} color="rgba(0,0,0,.6)" />
        </div>
      </div> */}
    </nav>
  );
}

export default ProfileHeader;
