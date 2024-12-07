import React from "react";

function ProfilesGroups({ size = "size-[35px]" }) {
  return (
    <div className="flex -space-x-2">
      <img
        className={`${size} inline-block rounded-full ring-2 ring-white object-cover`}
        src="/images/signup.svg"
        alt="Image Description"
      />
      <img
        className={`${size} inline-block rounded-full ring-2 ring-white object-cover `}
        src="/images/signup.svg"
        alt="Image Description"
      />
      <div className="hs-dropdown relative inline-flex [--placement:top-left]">
        <button
          id="hs-avatar-group-dropdown"
          className={`${size} hs-dropdown-toggle inline-flex items-center justify-center rounded-full bg-primary border-2 border-white font-medium text-white shadow-sm align-middle hover:bg-gray-300 focus:outline-none focus:bg-blue-100 focus:text-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-800 dark:text-gray-400 dark:hover:text-white dark:focus:bg-blue-100 dark:focus:text-blue-600 dark:focus:ring-offset-gray-800`}
        >
          <span className="font-medium leading-none">9+</span>
        </button>
      </div>
    </div>
  );
}

export default ProfilesGroups;
