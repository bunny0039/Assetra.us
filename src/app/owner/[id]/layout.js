"use client";

import OwnerProfileHeader from "@/components/owner/OwnerProfileHeader";
import { useParams } from "next/navigation";

export default function RootLayout({ children }) {
  const { companyId } = useParams();
  return (
    <div className="w-full bg-gray-100 pb-20">
      {!companyId && <OwnerProfileHeader />}
      {children}
    </div>
  );
}
