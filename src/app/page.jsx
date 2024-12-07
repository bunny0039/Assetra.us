// import MainRedirect from "@/components/MainRedirect";

import MainRedirect from "@/components/MainRedirect";
import About from "@/components/landing/About";
import Cards from "@/components/landing/Cards";
import Contact from "@/components/landing/Contact";
import Content from "@/components/landing/Content";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import ImageContainer from "@/components/landing/ImageContainer";
import Navbar from "@/components/landing/Navbar";
import PricingTable from "@/components/landing/PricingTable";
import "animate.css/animate.compat.css";

export const metadata = {
  title: "Assetra",
  description: "",
};

export default function Home() {
  return (
    // <MainRedirect />
    <main className="">
      <div className="relative min-h-[800px] h-auto">
        <ImageContainer />
      </div>
      <Navbar />
      <Cards />
      <Content
        direction="right"
        image="/images/landing/one.png"
        details="Invite your contractor to Assetra"
        heading="FOR THE COMPANY"
      />
      <Content
        direction="left"
        image="/images/landing/company.png"
        details="Create companies"
        heading="FOR THE COMPANY"
        mt={true}
      />
      <Content
        direction="right"
        image="/images/landing/onboard.png"
        details="Streamline the onboarding with a click of a button"
        heading="FOR THE COMPANY"
        mt={true}
      />
      <Content
        direction="left"
        image="/images/landing/invitation.png"
        details="Get invitation from the company to Assetra"
        heading="FOR THE COMPANY"
        mt={true}
      />
      <Content
        direction="right"
        image="/images/landing/staff.png"
        details="Manage your staff with Assetra"
        heading="FOR THE CONTRACTOR"
        mt={true}
      />

      <PricingTable />
      <FAQ />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
