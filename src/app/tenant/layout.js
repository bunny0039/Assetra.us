import TenantNavbar from "@/components/tenant/TenantNavbar";

export default function RootLayout({ children }) {
  return (
    <>
      <TenantNavbar />
      {children}
    </>
  );
}
