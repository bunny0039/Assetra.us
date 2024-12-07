import OwnerProfileBanner from "@/components/office-admin/office-admin-shared/ownerProfileBanner/OwnerProfileBanner";

export default function RootLayout({ children }) {
  const routesPath = {
    financialOverview: `/office-admin/dashboard/owners`,
    assets: `/office-admin/dashboard/owners`,
    companies: `/office-admin/dashboard/owners`,
  };
  return (
    <div className="w-full bg-gray-100 pb-20">
      <OwnerProfileBanner routesPath={routesPath} />
      {children}
    </div>
  );
}
