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
import { signupSchema } from "@/lib/validationSchema/authSchema";
import { useToast } from "../ui/use-toast";
import { useUserRegisterMutation } from "@/states/services/authServices";
import { Loader2 } from "lucide-react";
import LoadingButton from "../shared/LoadingButton";

function Signup() {
  const router = useRouter();
  const { toast } = useToast();
  const [registerAPI, { isLoading }] = useUserRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data) => {
    registerAPI(data)
      .unwrap()
      .then((payload) => {
        toast({
          title: "Success/Account Creation",
          description: "Account has been created successfully",
        });
        router.push(routes.SIGN_IN);
      })
      .catch((error) => {
        console.log("=>", error);
        toast({
          title: "Error/Account Creation",
          description: "Account creation failed",
        });
      });
  };

  return (
    <div className="relative min-h-screen min-w-screen bg-cover bg-no-repeat">
      <div className="bg-[rgba(0,0,0,.8)] w-full h-screen flex justify-center items-center px-3 md:px-0">
        <div className="w-full max-w-4xl bg-white flex rounded-2xl shadow-xl overflow-hidden">
          <div className="hidden md:flex flex-1 h-auto relative ">
            <Image
              src="/images/signin.svg"
              alt=""
              className="absolute object-cover rounded-2xl"
              fill
            />
          </div>
          <div className="flex-1 min-h-fit h-auto bg-white flex flex-col justify-center items-center py-7 md:py-5 relative">
            {isLoading && (
              <div className="bg-[rgba(0,0,0,0.01)] w-full h-full absolute top-0 left-0 z-50" />
            )}

            <div className="px-4 md:px-0 w-full md:w-80 flex justify-start items-start">
              <Image
                src="/images/logo.svg"
                height={60}
                width={100}
                className="object-contain"
              />
            </div>
            <div className="px-4 md:px-0 w-full md:w-80 mt-5 md:mt-3">
              <h1 className="font-semibold text-xl text-gray-700">Sign Up</h1>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-3 space-y-3"
              >
                <FormTextInput
                  type="text"
                  name="name"
                  label="Name"
                  register={register}
                  errorMessage={errors?.name?.message}
                />
                <FormTextInput
                  type="text"
                  name="email"
                  label="Email"
                  register={register}
                  errorMessage={errors?.email?.message}
                />
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
                  label="Confirm Pasword"
                  register={register}
                  errorMessage={errors?.password_confirmation?.message}
                />
                <LoadingButton title="Create Account" isLoading={isLoading} />

                <div className="h-[0.7px] bg-gray-300" />
                <div className="flex items-center gap-1 justify-center">
                  <p className="font-medium text-xs text-gray-700">
                    Already have an account?
                  </p>
                  <Link
                    href={routes.SIGN_IN}
                    className="font-medium text-xs text-primary"
                  >
                    Sign In
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
