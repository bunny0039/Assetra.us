import CompanyProfileBanner from "@/components/office-admin/office-admin-shared/companyProfileBanner/CompanyProfileBanner";

export default function RootLayout({ children }) {
  const routesPath = {
    financialOverview: `/office-admin/dashboard/family-office/financial-overview`,
    assets: `/office-admin/dashboard/family-office/assets`,
    users: `/office-admin/dashboard/family-office/users`,
    rolePermissions: `/office-admin/dashboard/family-office/role-permissions`,
  };
  return (
    <>
      <CompanyProfileBanner routesPath={routesPath} />
      {children}
    </>
  );
}
