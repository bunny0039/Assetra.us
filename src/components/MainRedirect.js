"use client";

import React, { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import withAuth from "@/app/appComponents/withAuth";
import { setUserAuthData } from "@/states/reducers/authReducer";

function MainRedirect() {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const jsonValue = localStorage.getItem("userData");
    if (!jsonValue && jsonValue !== null) {
      dispatch(setUserAuthData(JSON.parse(jsonValue)));
    }
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-center items-center gap-4">
      <div
        class="animate-spin inline-block size-6 border-[2px] border-current border-t-transparent text-primary rounded-full"
        role="status"
        aria-label="loading"
      >
        <span class="sr-only">Loading...</span>
      </div>
      <p className="text-md font-medium text-gray-500 tracking-wider">
        Loading...
      </p>
    </div>
  );
}

export default withAuth(MainRedirect);
