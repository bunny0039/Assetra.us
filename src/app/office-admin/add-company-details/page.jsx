import Wrapper from "@/components/office-admin/Wrapper";
import CompanyDetailsForm from "@/components/office-admin/CompanyDetailsForm";

function page() {
  return (
    <Wrapper bgImg="/images/office-admin/company-bg.svg">
      <CompanyDetailsForm />
    </Wrapper>
  );
}

export default page;
