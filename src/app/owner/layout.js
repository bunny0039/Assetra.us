import OwnerNavbar from "@/components/owner/OwnerNavbar";

export default function RootLayout({ children }) {
  return (
    <div>
      <OwnerNavbar />
      {children}
    </div>
  );
}
