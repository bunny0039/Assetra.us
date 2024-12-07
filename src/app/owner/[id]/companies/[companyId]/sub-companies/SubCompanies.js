"use client";

import CompanyCard from "@/components/office-admin/company/CompanyCard";
import Loader from "@/components/shared/Loader";

function SubCompanies() {
  //   const { data, isFetching } = useGetAllCompaniesQuery();

  return (
    <div>
      <div className="w-full bg-gray-100 px-4 md:px-10 min-h-[90vh]">
        <div className="w-full flex justify-between items-center">
          <p className="text-gray-700 text-md md:text-xl font-semibold capitalize">
            Sub Companies
          </p>
        </div>
        <div className="grid grid-cols-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
          {/* {false ? (
            <Loader />
          ) : (
            <>
              {[1, 2, 3, 4]?.map((item) => {
                return <CompanyCard key={item?.id} item={item} />;
              })}
            </>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default SubCompanies;
