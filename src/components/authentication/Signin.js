"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { routes } from "@/routes/routes";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormTextInput from "../shared/customInputs/FormTextInput";
import { signinSchema } from "@/lib/validationSchema/authSchema";
import { useToast } from "../ui/use-toast";
import { useUserLoginMutation } from "@/states/services/authServices";
import LoadingButton from "../shared/LoadingButton";
import { useDispatch } from "react-redux";
import { setUserAuthData } from "@/states/reducers/authReducer";

function Signin() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { toast } = useToast();
  const [loginAPI, { isLoading }] = useUserLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signinSchema),
  });

  const onSubmit = (data) => {
    loginAPI(data)
      .unwrap()
      .then((payload) => {
        toast({
          title: "Success/Account Sign In",
          description: "You are signed in successfully",
        });
        const { user, role, token } = payload?.data;
        console.log("payload", payload);

        if (role === "superadmin") {
          router.replace(routes.ADD_NEW_SUBSCRIPTION);
        } else if (role === "officeadmin") {
          router.replace(
            "/office-admin/dashboard/family-office/financial-overview"
          );
        } else if (role === "tenant") {
          router.replace(routes.TENANT_LEASE_CONTRACT);
        } else if (role === "owner") {
          router.replace(`/owner/${user?.id}/financial-overview`);
        } else if (
          role === "employee" ||
          payload?.data?.user?.user_role === "employee"
        ) {
          router.replace(`/employee/companies`);
        }

        let userData = {
          userToken: token,
          userName: user?.name,
          id: user?.id,
          role:
            payload?.data?.user?.user_role === "employee"
              ? payload?.data?.user?.user_role === "employee"
              : role,
        };

        // if (role === "officeadmin") {
        //   userData["hasRootCompany"] = payload?.data?.hasRootCompany;
        // }
        localStorage.setItem("userData", JSON.stringify(userData));
        dispatch(setUserAuthData(userData));
      })
      .catch((error) => {
        console.log("=>", error);
        toast({
          title: "Error/Account Sign In",
          description: error?.data?.message
            ? error?.data?.message
            : "Something went wrong",
        });
      });
  };

  return (
    <div className="relative min-h-screen min-w-screen bg-cover bg-no-repeat">
      {/* <div className="relative min-h-screen min-w-screen bg-[url('/images/signup.svg')] bg-cover bg-no-repeat"> */}
      <div className="bg-[rgba(0,0,0,.8)] w-full h-screen flex justify-center items-center px-3 md:px-0">
        <div className="w-full max-w-4xl bg-white flex rounded-2xl shadow-xl overflow-hidden py-8">
          <div className="hidden md:flex flex-1 h-auto relative">
            <Image
              src="/images/signin.svg"
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
            <div className="px-4 md:px-0 w-full md:w-80 mt-6 md:mt-4">
              <h1 className="font-semibold text-xl text-gray-700">Sign In</h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-3 space-y-3"
              >
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
                <LoadingButton title="Continue" isLoading={isLoading} />

                <div className="flex items-center justify-center">
                  <p className="font-medium text-xs text-primary">
                    Forgot Password?
                  </p>
                </div>
                <div className="h-[0.7px] bg-gray-300" />
                <div className="flex items-center gap-1 justify-center">
                  <p className="font-medium text-xs text-gray-700">
                    Don't have an account?
                  </p>
                  <Link
                    href={routes.SIGN_UP}
                    className="font-medium text-xs text-primary"
                  >
                    Sign Up
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

export default Signin;
