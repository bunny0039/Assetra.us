"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { routes } from "@/routes/routes";
import { useParams, useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { activationSchema } from "@/lib/validationSchema/authSchema";
import {
  useGetActivationDetailsQuery,
  useUpdatePasswordMutation,
} from "@/states/services/authServices";
import FormTextInput from "@/components/shared/customInputs/FormTextInput";
import LoadingButton from "@/components/shared/LoadingButton";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import Loader from "@/components/shared/Loader";

function MainActivationUser() {
  const { token } = useParams();
  const { toast } = useToast();
  const { data, isFetching } = useGetActivationDetailsQuery({ token });
  const [updatePasswordAPI, { isLoading }] = useUpdatePasswordMutation();
  const userId = !isFetching && data?.data?.id;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(activationSchema),
  });

  const onSubmit = (data) => {
    const { password } = data;
    updatePasswordAPI({ password, token })
      .unwrap()
      .then((payload) => {
        toast({
          title: "Success/Account Activation",
          description: "Your account has been activated successfully",
        });
      })
      .catch((error) => {
        console.log("=>> Account Activation Error =>>", error);
        toast({
          title: "Error/Account Activation",
          description: error?.data?.message
            ? error?.data?.message
            : "Something went wrong",
        });
        reset({
          password: "",
          password_confirmation: "",
        });
      });
  };

  return (
    <div className="relative min-h-screen min-w-screen bg-cover bg-no-repeat">
      {/* <div className="relative min-h-screen min-w-screen bg-[url('/images/signup.svg')] bg-cover bg-no-repeat"> */}
      <div className="bg-[rgba(0,0,0,.8)] w-full h-screen flex justify-center items-center px-3 md:px-0">
        <div className="w-full max-w-2xl bg-white flex rounded-2xl shadow-xl overflow-hidden p-8">
          <div className="flex-1 w-fit min-h-fit h-auto bg-white flex flex-col justify-center items-center relative">
            {isLoading && (
              <div className="bg-[rgba(0,0,0,0.01)] w-full h-full absolute top-0 left-0 z-50" />
            )}
            <div className="px-4 md:px-0 w-full flex justify-start items-start">
              <Image
                src="/images/logo.svg"
                height={80}
                width={130}
                className="object-contain"
              />
            </div>
            {/* ===== */}
            {isFetching ? (
              <div className="mt-5">
                <Loader title="Fetching details..." />
              </div>
            ) : (
              <div className="px-4 md:px-0 w-full mt-6 md:mt-4">
                <h1 className="font-semibold text-xl text-gray-700">
                  Set Your Password
                </h1>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-3 space-y-3"
                >
                  <FormTextInput
                    type="password"
                    name="password"
                    label="Password"
                    register={register}
                    errorMessage={errors?.password?.message}
                  />
                  <FormTextInput
                    type="password"
                    name="password_confirmation"
                    label="Confirm Password"
                    register={register}
                    errorMessage={errors?.password_confirmation?.message}
                  />
                  <LoadingButton title="Continue" isLoading={isLoading} />
                  <div className="flex items-center gap-1 justify-center">
                    <Link
                      href={routes.SIGN_IN}
                      className="font-medium text-xs text-primary"
                    >
                      Sign In
                    </Link>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainActivationUser;
