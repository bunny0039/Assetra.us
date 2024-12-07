import RealEstateNavbar from "@/components/real-estates/RealEstateNavbar";
import RealEstateTopBanner from "@/components/real-estates/RealEstateTopBanner";

export default function RootLayout({ children }) {
  return (
    <div>
      <RealEstateNavbar />
      <RealEstateTopBanner />
      {children}
    </div>
  );
}
