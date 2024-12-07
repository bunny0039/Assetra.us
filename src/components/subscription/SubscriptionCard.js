import { Loader2, Trash2 } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { routes } from "@/routes/routes";
import { useDeletePlanMutation } from "@/states/services/plansServices";
import { toast } from "../ui/use-toast";

function SubscriptionCard({ active = false, item, userData }) {
  const router = useRouter();

  const [deletePlanAPI, { isLoading }] = useDeletePlanMutation();

  const handleDeletePlanAPI = (planId) => {
    deletePlanAPI(planId)
      .unwrap()
      .then((payload) => {
        toast({
          title: "Success/Package Delete",
          description: "Package has been deleted",
        });
      })
      .catch((error) => {
        console.log("=>", error);
        toast({
          title: "Error/Package Delete",
          description: "Package deletion failed",
        });
      });
  };

  const handleSelectSubscription = () => {
    router.push(routes.SEND_INVITATION_LINK);
  };

  return (
    <div
      className={`w-full md:w-fit flex flex-col border border-gray-200 rounded-xl py-6 md:py-8 px-4 md:px-7 dark:border-gray-700 max-w-sm ${
        active ? "bg-primary md:!mb-10 md:!-mt-10" : "bg-white"
      }`}
      style={{ boxShadow: "2px 2px 15px 2px rgba(22,154,200,0.75)" }}
    >
      <span
        className={`text-center font-bold text-xl md:text-2xl ${
          active ? "text-white" : "text-primary"
        }`}
      >
        {item?.name}
      </span>
      <span
        className={`text-center font-semibold text-sm md:text-xl ${
          active ? "text-white" : "text-primary"
        }`}
      >
        {item?.price}
      </span>

      <div className="py-2">
        <p
          className={`text-center font-medium text-xs md:text-sm ${
            active ? "text-white" : "text-primary"
          }`}
        >
          {item?.description}
        </p>
      </div>
      {userData?.role === "admin" ? (
        <Button
          className={`${
            active
              ? "bg-white text-primary hover:bg-white"
              : " bg-primary text-white"
          } w-full uppercase tracking-wide font-semibold md:text-md h-9 md:h-11 mt-7 md:mt-10`}
          onClick={handleSelectSubscription}
        >
          Purchase
        </Button>
      ) : (
        <>
          {isLoading ? (
            <Button
              disabled
              className={`${
                active
                  ? "bg-white text-primary hover:bg-white"
                  : " bg-primary text-white"
              } w-full tracking-wide font-semibold md:text-md h-9 md:h-11 mt-7 md:mt-10`}
            >
              <Loader2 className="mr-2 h-5 w-5 animate-spin text-white" />
              Plan Deleting...
            </Button>
          ) : (
            <Button
              className={`${
                active
                  ? "bg-white text-primary hover:bg-white"
                  : " bg-primary text-white"
              } w-full tracking-wide font-semibold md:text-md h-9 md:h-11 mt-7 md:mt-10`}
              onClick={() => handleDeletePlanAPI(item?.id)}
            >
              <Trash2
                size={20}
                color={active ? "#169AC8" : "#fff"}
                className="mr-2"
              />
              Delete Plan
            </Button>
          )}
        </>
      )}
    </div>
  );
}

export default SubscriptionCard;
