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
import { updateRealEstateSchema } from "@/lib/validationSchema/userSchema";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { useUpdateRealEstatesMutation } from "@/states/services/assets/realEstateServices";
import { toast } from "@/components/ui/use-toast";
import { useParams } from "next/navigation";

export function UpdateRealEstates({ info }) {
  const [openDialog, setOpenDialog] = useState(false);
  const { id } = useParams();

  console.log("info=>>", info);

  const [updateRealEstate, { isLoading }] = useUpdateRealEstatesMutation();

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateRealEstateSchema),
  });

  useEffect(() => {
    setValue("name", info?.name, { shouldValidate: true });
    setValue("address", info?.address, { shouldValidate: true });
    setValue("square_foot", info?.square_foot, { shouldValidate: true });

    setValue("purchase_date", info?.purchase_date, { shouldValidate: true });
    setValue("purchase_price", info?.purchase_price, {
      shouldValidate: true,
    });
    setValue("financing_values", info?.financing_values, {
      shouldValidate: true,
    });
    setValue("annual_tax", info?.annual_tax, { shouldValidate: true });
    setValue("amenities", info?.amenities, {
      shouldValidate: true,
    });
    setValue("price", info?.price, { shouldValidate: true });
    setValue("price_includes_tax", info?.price_includes_tax, {
      shouldValidate: true,
    });
    setValue("summary", info?.summary, { shouldValidate: true });
    setValue("asset_summary", info?.asset_summary, { shouldValidate: true });
  }, [info]);

  const onSubmit = (data) => {
    updateRealEstate({ realEstateId: id, data })
      .unwrap()
      .then((payload) => {
        setOpenDialog(false);
        toast({
          title: "Success/Update Real Estate",
          description: "Realestate updated successfully",
        });
      })
      .catch((error) => {
        console.log("=>->>>", error);
        toast({
          title: "Error/Update Real Estate",
          description: "Something went wrong",
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
      <Button className="bg-secondary text-white" onClick={handleOpenDialog}>
        Edit Assets
      </Button>
      <DialogContent className="rounded-md max-w-3xl py-3 overflow-y-scroll max-h-[95vh]">
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
                <div className="flex justify-between gap-5">
                  <FormTextInput
                    type="text"
                    name="name"
                    label="Name"
                    register={register}
                    errorMessage={errors?.name?.message}
                  />
                  <FormTextInput
                    type="text"
                    name="address"
                    label="Address"
                    register={register}
                    errorMessage={errors?.address?.message}
                  />
                </div>
                <div className="flex justify-between gap-5">
                  <FormTextInput
                    type="text"
                    name="financing_values"
                    label="Financing Values"
                    register={register}
                    errorMessage={errors?.financing_values?.message}
                  />

                  <FormTextInput
                    type="text"
                    name="square_foot"
                    label="Square Foot"
                    register={register}
                    errorMessage={errors?.square_foot?.message}
                  />
                </div>
                <div className="flex justify-between gap-5">
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

                <div className="flex justify-between gap-5">
                  <FormTextInput
                    type="text"
                    name="annual_tax"
                    label="Annual Tax"
                    register={register}
                    errorMessage={errors?.annual_tax?.message}
                  />

                  <FormTextInput
                    type="text"
                    name="amenities"
                    label="Amenities"
                    register={register}
                    errorMessage={errors?.amenities?.message}
                  />
                </div>
                <div className="flex justify-between gap-5">
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
                </div>
                <div className="flex justify-between gap-5">
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
                </div>
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
