"use client";

import LoadingButton from "@/components/shared/LoadingButton";
import FormTextInput from "@/components/shared/customInputs/FormTextInput";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { realEstateSchema } from "@/lib/validationSchema/userSchema";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { CompaniesDropDown } from "../CompaniesDropDown";
import { useGetAllCompaniesQuery } from "@/states/services/companyServices";
import { Label } from "@/components/ui/label";
import { useGetTenantsQuery } from "@/states/services/usersServices";
import { useAddRealEstatesMutation } from "@/states/services/assets/realEstateServices";
import { toast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";

export function AddNewRealEstates() {
  const [openDialog, setOpenDialog] = useState(false);
  const { data, isFetching } = useGetAllCompaniesQuery();

  const [addRealEstate, { isLoading }] = useAddRealEstatesMutation();

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(realEstateSchema),
  });
  const companyIdByField = watch("company_id");
  const is_financed = watch("is_financed");

  const onSubmit = (data) => {
    addRealEstate(data)
      .unwrap()
      .then((payload) => {
        setOpenDialog(false);
        toast({
          title: "Success/Add Real Estate",
          description: "Realestate created successfully",
        });
      })
      .catch((error) => {
        console.log("=>->>>", error);
        toast({
          title: "Error/Add Real Estate",
          description: error?.data?.message
            ? error?.data?.message
            : "Something went wrong",
        });
      });
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Dialog open={openDialog}>
      <Button
        onClick={handleOpenDialog}
        className="bg-secondary h-9 gap-2 text-xs md:text-sm text-white w-fit md:px-5"
      >
        Add New
      </Button>
      <DialogContent className="rounded-md max-w-sm md:max-w-3xl py-3 overflow-y-scroll max-h-[85vh] md:max-h-[95vh]">
        {isLoading && (
          <div className="bg-[rgba(0,0,0,0.01)] absolute top-0 right-0 bottom-0 left-0 z-50" />
        )}

        <DialogHeader>
          <div className="flex items-center justify-between mb-1">
            <p className="font-semibold text-md text-black">
              Add New Real Estate
            </p>
            <MdClose
              onClick={handleCloseDialog}
              className="h-5 w-5 text-gray-600 cursor-pointer hover:text-black"
            />
          </div>
          <DialogDescription>
            <div className="my-1">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-1 text-left "
              >
                <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-5">
                  {/* <div className="w-full">
                    <Label className="text-xs">Select Company</Label>
                    <CompaniesDropDown
                      name="company_id"
                      control={control}
                      data={isFetching ? [] : data?.data}
                      isFetching={isFetching}
                    />
                    <p className="text-[10px] text-red-600 font-medium mt-1">
                      {errors?.company_id?.message}
                    </p>
                  </div> */}

                  {/* <FormTextInput
                    type="text"
                    name="name"
                    label="Name"
                    register={register}
                    errorMessage={errors?.name?.message}
                  /> */}
                  <FormTextInput
                    type="text"
                    name="address"
                    label="Address"
                    register={register}
                    errorMessage={errors?.address?.message}
                  />
                </div>
                {/* <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-5">
                  <FormTextInput
                    type="text"
                    name="address"
                    label="Address"
                    register={register}
                    errorMessage={errors?.address?.message}
                  />

                  <FormTextInput
                    type="text"
                    name="square_foot"
                    label="Square Foot"
                    register={register}
                    errorMessage={errors?.square_foot?.message}
                  />
                </div> */}
                <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-5">
                  <FormTextInput
                    type="date"
                    name="purchase_date"
                    label="Purchase Date"
                    register={register}
                    errorMessage={errors?.purchase_date?.message}
                  />

                  <FormTextInput
                    type="text"
                    name="purchase_price"
                    label="Purchase Price"
                    register={register}
                    errorMessage={errors?.purchase_price?.message}
                  />
                </div>
                {/* <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-5">
                  <div className="w-full">
                    <Label className="text-xs">Select Tenant</Label>
                    <CompaniesDropDown
                      name="tenant_id"
                      control={control}
                      data={isTenantFetching ? [] : tenantData?.data}
                      isFetching={isTenantFetching}
                    />
                    <p className="text-[10px] text-red-600 font-medium mt-1">
                      {errors?.tenant_id?.message}
                    </p>
                  </div>

                  <FormTextInput
                    type="text"
                    name="financing_values"
                    label="Financing Values"
                    register={register}
                    errorMessage={errors?.financing_values?.message}
                  />
                </div> */}
                <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-5">
                  <FormTextInput
                    type="text"
                    name="annual_tax"
                    label="Annual Tax"
                    register={register}
                    errorMessage={errors?.annual_tax?.message}
                  />
                  <FormTextInput
                    type="text"
                    name="square_foot"
                    label="Square Foot"
                    register={register}
                    errorMessage={errors?.square_foot?.message}
                  />

                  {/* <FormTextInput
                    type="text"
                    name="amenities"
                    label="Amenities"
                    register={register}
                    errorMessage={errors?.amenities?.message}
                  /> */}
                </div>
                <div>
                  <input
                    // checked={false}
                    type="checkbox"
                    id="is_financed"
                    name="is_financed"
                    {...register("is_financed")}
                    // onCheckedChange={(value) => console.log("vvvl=>>", value)}
                  />
                  <Label className="text-xs ml-2">Is Property Financed?</Label>
                </div>
                {is_financed && (
                  <>
                    <div className="flex justify-between gap-5">
                      <FormTextInput
                        type="text"
                        name="amount_financed"
                        label="Amount Financed"
                        register={register}
                        errorMessage={errors?.amount_financed?.message}
                      />

                      <FormTextInput
                        type="text"
                        name="term_0f_loan"
                        label="Term Of Loan"
                        register={register}
                        errorMessage={errors?.term_0f_loan?.message}
                      />
                    </div>
                    <div className="flex justify-between gap-5">
                      <FormTextInput
                        type="text"
                        name="rate_of_loan"
                        label="Rate Of Loan"
                        register={register}
                        errorMessage={errors?.rate_of_loan?.message}
                      />
                    </div>
                  </>
                )}
                {/* <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-5">
                  <FormTextInput
                    type="text"
                    name="price"
                    label="Price"
                    register={register}
                    errorMessage={errors?.price?.message}
                  />

                  <FormTextInput
                    type="text"
                    name="price_includes_tax"
                    label="Price Includes Tax"
                    register={register}
                    errorMessage={errors?.price_includes_tax?.message}
                  />
                </div> */}
                {/* <div className="flex justify-between gap-5">
                  <FormTextInput
                    type="text"
                    name="bank_name"
                    label="Bank Name"
                    register={register}
                    errorMessage={errors?.bank_name?.message}
                  />

                  <FormTextInput
                    type="text"
                    name="bank_type"
                    label="Bank Type"
                    register={register}
                    errorMessage={errors?.bank_type?.message}
                  />
                </div> */}
                {/* <div className="flex justify-between gap-5">
                  <FormTextInput
                    type="number"
                    name="bank_account_number"
                    label="Bank Account Number"
                    register={register}
                    errorMessage={errors?.bank_account_number?.message}
                  />

                  <FormTextInput
                    type="number"
                    name="bank_balance"
                    label="Bank Balance"
                    register={register}
                    errorMessage={errors?.bank_balance?.message}
                  />
                </div> */}
                {/* <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-5">
                  <FormTextInput
                    type="text"
                    name="summary"
                    label="Summary"
                    register={register}
                    errorMessage={errors?.summary?.message}
                  />

                  <FormTextInput
                    type="text"
                    name="asset_summary"
                    label="Asset Summary"
                    register={register}
                    errorMessage={errors?.asset_summary?.message}
                  />
                </div> */}
                <div className="w-full flex justify-end items-end">
                  <div className="w-fit">
                    <LoadingButton title="Save" isLoading={isLoading} />
                  </div>
                </div>
              </form>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
