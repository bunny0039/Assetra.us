"use client";

import { routes } from "@/routes/routes";
import { setUserAuthData } from "@/states/reducers/authReducer";
import { useRouter } from "next/navigation";
import React, { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

function withAuth(Component) {
  return function WithAuth(props) {
    const dispatch = useDispatch();
    const router = useRouter();

    useLayoutEffect(() => {
      const jsonValue = localStorage.getItem("userData");
      let jsonOBJ = JSON.parse(jsonValue);
      if (jsonValue !== null) {
        dispatch(setUserAuthData(jsonOBJ));
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
      }
    }, []);

    return <Component {...props} />;
  };
}

export default withAuth;
