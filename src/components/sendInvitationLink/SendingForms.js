import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { routes } from "@/routes/routes";
import { useSendInvitationMutation } from "@/states/services/office-admin/invitationsServices";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Loader2 } from "lucide-react";

function SendingForms() {
  const router = useRouter();
  const [role, setRole] = useState("employee");
  const [email, setEmail] = useState("");
  const [sendInvitation, { isLoading }] = useSendInvitationMutation();

  const handleSelectRole = (roleProp) => {
    setRole(roleProp);
  };

  const handleSend = (type) => {
    console.log("===>", type, role, email);
    // router.push("/invitation/retrdgfd43d");
    // process.env.NEXT_PUBLIC_LIVE_URL;
    // http://localhost:3000/invitation/${token}

    if (email) {
      sendInvitation({ user_role: role, email })
        .unwrap()
        .then((payload) => {
          console.log("pay=>", payload);
          // setInvitationLink(payload?.data?.token);
          // router.push(routes.EMPLOYEE_INVITATION_ACCEPT);
          toast({
            title: "Success/Invitation",
            description: "Invitation has been sent successfully",
          });
          setEmail("");
          router.replace(
            "/office-admin/dashboard/family-office/financial-overview"
          );
        })
        .catch((error) => {
          console.log("=>->>>", error);
          toast({
            title: "Error/Invitation",
            description:
              error?.data?.message || "Invitation sending failed. Try again",
          });
        });
    } else {
      toast({
        title: "Error/Add Email",
        description: "Email is required",
      });
    }
  };

  return (
    <div className="px-4 md:px-10 py-12 md:py-20 flex flex-col justify-center items-center">
      <p className="font-semibold text-gray-800 text-md md:text-xl uppercase">
        SHARE YOUR referral LINK
      </p>

      <div className="mt-10 flex gap-5 md:gap-10 flex-col md:flex-row items-center justify-between w-full space-y-5 md:space-y-0">
        <div className="w-fit flex md:items-center gap-5 flex-1">
          <div className="relative h-24 md:h-44 w-24 md:w-44">
            <Image
              src="/images/email_mobile.svg"
              alt=""
              className="absolute"
              fill
            />
          </div>
          <div className="w-full">
            <p className="text-md md:text-xl text-gray-800 font-semibold">
              Email
            </p>
            <p className="text-sm md:text-md text-gray-600 font-medium">
              Invite Friends
            </p>
            <Input
              type="email"
              placeholder="Email Address"
              className="mt-3 md:mt-2 w-full md:w-60"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
            <div className="flex justify-end md:justify-start">
              <Button
                className="bg-primary h-8 px-5 mt-5 self-end text-white"
                style={{ boxShadow: "2px 2px 8px 2px rgba(22,154,200,0.75)" }}
                onClick={() => handleSend("Email")}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin text-white" />
                ) : (
                  "Send"
                )}
              </Button>
            </div>
          </div>
        </div>
        <div className="w-fit flex md:items-center gap-5 flex-1">
          <div className="relative h-24 md:h-44 w-24 md:w-44">
            <Image
              src="/images/sms_mobile.svg"
              alt=""
              className="absolute"
              fill
            />
          </div>
          <div className="w-full">
            <p className="text-md md:text-xl text-gray-800 font-semibold">
              SMS
            </p>
            <p className="text-sm md:text-md text-gray-600 font-medium">
              Invite Friends
            </p>
            <Input
              type="email"
              placeholder="Phone Number"
              className="mt-2 w-full md:w-60"
              disabled
            />
            <div className="flex justify-end md:justify-start">
              <Button
                disabled
                className="bg-primary h-8 px-5 mt-5 text-white"
                style={{ boxShadow: "2px 2px 8px 2px rgba(22,154,200,0.75)" }}
                onClick={() => handleSend("SMS")}
              >
                Send
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-fit">
          <p className="text-md md:text-xl text-gray-800 font-semibold">
            Select Category
          </p>
          <p className="text-sm md:text-md text-gray-600 font-medium md:text-center">
            Send To
          </p>
          <div className="flex flex-row md:flex-col gap-2 mt-4">
            <Button
              className={`${
                role === "owner"
                  ? "bg-primary text-white"
                  : "bg-white text-primary border border-primary"
              }  md:h-8 w-full hover:text-white`}
              style={{
                boxShadow:
                  role === "owner"
                    ? "1px 1px 6px 1px rgba(22,154,200,0.75)"
                    : "none",
              }}
              onClick={() => handleSelectRole("owner")}
              disabled={isLoading}
            >
              Owner
            </Button>
            <Button
              className={`${
                role === "employee"
                  ? "bg-primary text-white"
                  : "bg-white text-primary border border-primary"
              }  md:h-8 w-full hover:text-white`}
              style={{
                boxShadow:
                  role === "employee"
                    ? "1px 1px 6px 1px rgba(22,154,200,0.75)"
                    : "none",
              }}
              onClick={() => handleSelectRole("employee")}
              disabled={isLoading}
            >
              Employee
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendingForms;
