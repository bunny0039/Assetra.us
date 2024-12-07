"use client";

import CompanyBanner from "@/components/office-admin/office-admin-shared/companyProfileBanner/CompanyBanner";
import { useParams } from "next/navigation";

export default function RootLayout({ children }) {
  const { id, companyId } = useParams();

  const routesPath = {
    financialOverview: `/owner/${id}/companies/${companyId}/financial-overview`,
    assets: `/owner/${id}/companies/${companyId}/assets`,
    users: `/owner/${id}/companies/${companyId}/users`,
    drive: `/owner/${id}/companies/${companyId}/drive`,
    subCompanies: `/owner/${id}/companies/${companyId}/sub-companies`,
    rolePermissions: `/owner/${id}/companies/${companyId}/role-permissions`,
  };
  return (
    <>
      <CompanyBanner routesPath={routesPath} id={companyId} />
      {children}
    </>
  );
}
