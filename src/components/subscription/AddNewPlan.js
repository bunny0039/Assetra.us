"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { routes } from "@/routes/routes";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormTextInput from "../shared/customInputs/FormTextInput";
import { packageSchema } from "@/lib/validationSchema/authSchema";
import FormTextArea from "../shared/customInputs/FormTextArea";
import LoadingButton from "../shared/LoadingButton";
import { useToast } from "../ui/use-toast";
import { useAddNewPlanMutation } from "@/states/services/plansServices";
import withAuth from "@/app/appComponents/withAuth";
import ProfileHeader from "../shared/ProfileHeader";

function AddNewPlan() {
  const router = useRouter();
  const { toast } = useToast();
  const [addNewPlanAPI, { isLoading }] = useAddNewPlanMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(packageSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    addNewPlanAPI(data)
      .unwrap()
      .then((payload) => {
        toast({
          title: "Success/Plan Creation",
          description: "New subscription plan has been created successfully",
        });
        router.push(routes.SUBSCRIPTION);
      })
      .catch((error) => {
        console.log("=>eror", error);
        toast({
          title: "Error/Plan Creation",
          description: "New subscription plan creation failed",
        });
      });
  };

  return (
    <div className="relative min-h-screen min-w-screen bg-[url('/images/signup.svg')] bg-cover bg-no-repeat">
      <ProfileHeader />
      <div className="bg-[rgba(0,0,0,.8)] w-full h-screen flex justify-center items-center px-3 md:px-0">
        <div className="w-full max-w-4xl bg-white flex rounded-2xl shadow-xl overflow-hidden py-3">
          <div className="hidden md:flex flex-1 h-auto relative">
            <Image
              src="/images/subscription.jpg"
              alt=""
              className="absolute object-cover rounded-2xl"
              fill
            />
          </div>
          <div className="flex-1 min-h-fit h-auto bg-white flex flex-col justify-center items-center py-0 md:py-5 relative">
            {isLoading && (
              <div className="bg-[rgba(0,0,0,0.01)] w-full h-full absolute top-0 left-0 z-50" />
            )}
            <div className="px-4 md:px-0 w-full md:w-80 flex justify-start items-start">
              <Image
                src="/images/logo.svg"
                height={80}
                width={130}
                className="object-contain"
              />
            </div>
            <div className="px-4 md:px-0 w-full md:w-80 mt-6 md:mt-4 relative">
              <h1 className="font-semibold text-xl text-gray-700">
                Add New Plan
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-3 space-y-3"
              >
                <FormTextInput
                  type="text"
                  name="name"
                  label="Package Name"
                  register={register}
                  errorMessage={errors?.name?.message}
                />
                <FormTextArea
                  type="text"
                  name="description"
                  label="Package Description"
                  register={register}
                  errorMessage={errors?.description?.message}
                />
                <FormTextInput
                  type="number"
                  name="price"
                  label="Package Price"
                  register={register}
                  errorMessage={errors?.price?.message}
                />

                <LoadingButton title="Save" isLoading={isLoading} />
              </form>
              <div className="mt-4 w-full flex justify-center items-center">
                <Link
                  href="/subscription"
                  className="font-medium text-xs text-gray-700 hover:text-primary"
                >
                  See All Subscription Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(AddNewPlan);
