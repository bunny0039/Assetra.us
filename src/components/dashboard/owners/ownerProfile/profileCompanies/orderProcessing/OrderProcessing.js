import React from "react";
import { OrderTable } from "./OrderTable";
import { orderColumns } from "./orderColumns";
import OrderProcessCard from "./OrderProcessCard";

const data = [
  {
    id: 1,
    no: "01",
    orders: "#0214",
    customer: "Alex Wong",
    item: "03",
    amount: "$25,000",
    paymentStatus: "Pending",
    date: "02 Jan, 2024",
    location: "New York City",
  },
  {
    id: 1,
    no: "01",
    orders: "#0214",
    customer: "Alex Wong",
    item: "03",
    amount: "$25,000",
    paymentStatus: "Pending",
    date: "02 Jan, 2024",
    location: "New York City",
  },
  {
    id: 1,
    no: "01",
    orders: "#0214",
    customer: "Alex Wong",
    item: "03",
    amount: "$25,000",
    paymentStatus: "Pending",
    date: "02 Jan, 2024",
    location: "New York City",
  },
];

function OrderProcessing() {
  return (
    <div>
      <OrderTable columns={orderColumns} data={data} />
      <div className="mt-10 space-y-8">
        <OrderProcessCard />
        <OrderProcessCard />
        <OrderProcessCard />
      </div>
    </div>
  );
}

export default OrderProcessing;
