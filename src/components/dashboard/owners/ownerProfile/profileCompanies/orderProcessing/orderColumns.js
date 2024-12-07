"use client";

import { Checkbox } from "@/components/ui/checkbox";

export const orderColumns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "no",
    header: "No",
  },
  {
    accessorKey: "orders",
    header: "Orders",
  },
  {
    accessorKey: "customer",
    header: "Customer",
  },
  {
    accessorKey: "item",
    header: "Item",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment Status",
    cell: ({ row }) => {
      console.log("=>", row);
      return (
        <div className="flex justify-center">
          <div className="bg-green-200 p-1 w-fit h-fit rounded-sm text-green-700">
            {row?.original?.paymentStatus}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
];
