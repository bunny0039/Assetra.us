import DashboardNavbar from "@/components/shared/DashboardNavbar";

export default function RootLayout({ children }) {
  return (
    <>
      <DashboardNavbar />
      {children}
    </>
  );
}
