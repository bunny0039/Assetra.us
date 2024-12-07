"use client";

import CompanyBanner from "@/components/office-admin/office-admin-shared/companyProfileBanner/CompanyBanner";
import { useParams } from "next/navigation";

export default function RootLayout({ children }) {
  const { id } = useParams();

  const routesPath = {
    financialOverview: `/office-admin/dashboard/company/${id}/financial-overview`,
    assets: `/office-admin/dashboard/company/${id}/assets`,
    users: `/office-admin/dashboard/company/${id}/users`,
    drive: `/office-admin/dashboard/company/${id}/drive`,
    subCompanies: `/office-admin/dashboard/company/${id}/sub-companies`,
    // rolePermissions: `/office-admin/dashboard/company/${id}/role-permissions`,
  };
  return (
    <>
      <CompanyBanner routesPath={routesPath} id={id} />
      {children}
    </>
  );
}
