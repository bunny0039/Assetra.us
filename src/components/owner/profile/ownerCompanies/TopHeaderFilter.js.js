import { SlidersHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function TopHeaderFilter({ activeMenu, setActiveMenu }) {
  const handleSelectMenu = (currentMenu) => {
    setActiveMenu(currentMenu);
  };

  const menusList = [
    { id: 1, accessor: "companies", title: "Companies" },
    { id: 2, accessor: "financialOverview", title: "Financial Overview" },
    { id: 3, accessor: "drive", title: "Drive" },
    { id: 4, accessor: "productServices", title: "Product & Services" },
    { id: 5, accessor: "orderProcessing", title: "Order Processing" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer rounded-full p-1.5 hover:bg-white">
          <SlidersHorizontal size={20} color="rgba(0,0,0,.7)" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit mx-8">
        <DropdownMenuGroup>
          {menusList?.map((item) => {
            return (
              <DropdownMenuItem
                key={item?.id}
                onClick={() => handleSelectMenu(item)}
                className={`${
                  item?.title === activeMenu?.title ? "bg-gray-100" : "bg-white"
                } cursor-pointer my-0.5`}
              >
                <span className="pr-3">{item?.title}</span>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
