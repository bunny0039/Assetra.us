import EmployeeProfileHeader from "@/components/employee/EmployeeProfileHeader";
import OwnerNavbar from "@/components/owner/OwnerNavbar";

export default function RootLayout({ children }) {
  return (
    <div>
      <OwnerNavbar />
      <EmployeeProfileHeader />
      {children}
    </div>
  );
}
