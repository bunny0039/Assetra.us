import { ChevronDown, LogOut } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutFromStore } from "@/states/reducers/authReducer";
import { useRouter } from "next/navigation";
import { routes } from "@/routes/routes";
import { toast } from "../ui/use-toast";

export function TenantProfileDropdown() {
  const { isUserLoggedIn, userData } = useSelector(
    (state) => state.authReducer
  );
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    router.replace(routes.SIGN_IN);
    localStorage.removeItem("userData");
    dispatch(userLogoutFromStore());
    toast({
      title: "Success/Account Sign Out",
      description: "You are signed out",
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="h-8 w-8 rounded-full overflow-hidden relative bg-gray-200 flex justify-center items-center">
            {isUserLoggedIn ? (
              <p>{userData && userData?.userName[0]}</p>
            ) : (
              <Image
                src="/images/signup.svg"
                className="absolute object-cover"
                fill
              />
            )}
          </div>
          <ChevronDown size={16} color="rgba(0,0,0,.6)" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mx-4">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <p className="text-sm text-gray-700 font-medium">
            {userData?.userName}
          </p>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4 " />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
