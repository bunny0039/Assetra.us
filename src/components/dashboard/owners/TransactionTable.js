"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, CircleDotDashed, TrendingUp } from "lucide-react";

const invoices = [
  {
    no: "11",
    transactionType: "Project Payment",
    userName: "Alexendar Jane",
    time: "1h 44m",
    amount: "$220",
    date: "24 Jan 2024",
    status: "Progress",
  },
  {
    no: "22",
    transactionType: "Salary Payment",
    userName: "Alex Jane",
    time: "2h 32m",
    amount: "$120",
    date: "24 Jan 2024",
    status: "Pending",
  },
  {
    no: "33",
    transactionType: "Project Payment",
    userName: "John Jane",
    time: "11h 12m",
    amount: "$10",
    date: "2 Jan 2024",
    status: "Completed",
  },
];

export function TransactionTable() {
  return (
    <Table className=" border border-gray-300 overflow-hidden">
      <TableCaption>A list of your recent transactions</TableCaption>
      <TableHeader className="bg-gray-200 rounded-md text-center">
        <TableRow className="border text-center">
          <TableHead className="text-center w-[100px]">No</TableHead>
          <TableHead className="text-center">Transaction Type</TableHead>
          <TableHead className="text-center">User Name</TableHead>
          <TableHead className="text-center">Time</TableHead>
          <TableHead className="text-center">Amount</TableHead>
          <TableHead className="text-center">Date</TableHead>
          <TableHead className="text-center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-white">
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice} className="border text-center">
            <TableCell className="font-medium">{invoice.no}</TableCell>
            <TableCell>{invoice.transactionType}</TableCell>
            <TableCell>{invoice.userName}</TableCell>
            <TableCell>{invoice.time}</TableCell>
            <TableCell>{invoice.amount}</TableCell>
            <TableCell>{invoice.date}</TableCell>
            <TableCell className="text-center flex justify-center items-center">
              {invoice.status === "Pending" ? (
                <div className="bg-amber-100 p-2 flex items-center justify-center gap-1 rounded-sm w-24">
                  <CircleDotDashed size={16} className="text-amber-700" />
                  <p className="text-amber-700 text-xs">{invoice.status}</p>
                </div>
              ) : invoice.status === "Progress" ? (
                <div className="bg-blue-100 p-2 flex items-center justify-center gap-1 rounded-sm w-24">
                  <TrendingUp size={16} className="text-blue-700" />
                  <p className="text-blue-700 text-xs">{invoice.status}</p>
                </div>
              ) : (
                <div className="bg-green-100 p-2 flex items-center justify-center gap-1 rounded-sm w-24">
                  <Check size={16} className="text-green-700" />
                  <p className="text-green-700 text-xs">{invoice.status}</p>
                </div>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
