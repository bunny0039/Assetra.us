import Wrapper from "@/components/office-admin/Wrapper";
import OwnerDetailsForm from "@/components/office-admin/OwnerDetailsForm";

function page() {
  return (
    <Wrapper bgImg="/images/office-admin/owner-bg.svg">
      <OwnerDetailsForm />
    </Wrapper>
  );
}

export default page;
