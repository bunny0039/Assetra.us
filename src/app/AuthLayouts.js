import { routes } from "@/routes/routes";
import { setUserAuthData } from "@/states/reducers/authReducer";
import { usePathname, useRouter } from "next/navigation";
import React, { useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";

function AuthLayouts({ children }) {
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  useLayoutEffect(() => {
    setLoader(true);
    const jsonValue = localStorage.getItem("userData");
    let jsonOBJ = JSON.parse(jsonValue);
    if (jsonValue !== null) {
      if (pathname !== "/") {
        if (jsonOBJ?.role === "superadmin") {
          router.replace(routes.ADD_NEW_SUBSCRIPTION);
        } else if (
          jsonOBJ?.role === "officeadmin" ||
          jsonOBJ?.role === "admin"
        ) {
          router.replace(
            "/office-admin/dashboard/family-office/financial-overview"
          );
        } else if (jsonOBJ?.role === "tenant") {
          router.replace(routes.TENANT_LEASE_CONTRACT);
        } else if (jsonOBJ?.role === "owner") {
          router.replace(`/owner/${jsonOBJ?.id}/financial-overview`);
        } else if (jsonOBJ?.role === "employee") {
          router.replace(`/employee/companies`);
        }
        dispatch(setUserAuthData(jsonOBJ));
      } else {
        dispatch(setUserAuthData(jsonOBJ));
      }
    }
    setLoader(false);
  }, []);

  return (
    <>
      {loader ? (
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
      ) : (
        <div>{children}</div>
      )}
    </>
  );
}

export default AuthLayouts;
