"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Download } from "lucide-react";
import { BsClockHistory } from "react-icons/bs";
import { Button } from "../ui/button";

export function PaymentAccordion({ name }) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      <AccordionItem
        value={`${name}-item-1`}
        className="bg-white rounded-md border border-gray-100"
      >
        <AccordionTrigger>
          <div className="w-full flex flex-col md:flex-row items-center justify-between">
            <div className="w-full flex items-center gap-2 md:gap-6">
              <p className="text-xs md:text-sm text-gray-600 md:font-semibold">
                2024
              </p>
              <div className="bg-gray-200 w-0.5 h-5" />
              <p className="text-xs md:text-sm text-gray-600 md:font-semibold">
                10 Jan
              </p>
              <div className="bg-gray-200 w-0.5 h-5" />
              <p className="text-xs md:text-sm text-gray-600 md:font-semibold">
                02:45 PM
              </p>
            </div>
            <div className="flex items-center w-full md:justify-evenly mt-3 md:mt-0 gap-5 md:gap-0">
              <div>
                <p className="text-xs md:text-sm text-gray-600 font-semibold">
                  Tnx ID - 872365146823
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-xs md:text-md text-gray-600 font-semibold">
                  $40,000
                </p>
                <BsClockHistory color="rgba(0,0,0,0.9)" size={15} />
              </div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="border-t">
          <div className="flex flex-col md:flex-row">
            <div className="w-full">
              <div className="flex flex-col md:flex-row justify-between w-full p-3 md:p-5">
                <p className="text-sm text-gray-600 font-semibold">
                  Security Deposit
                </p>
                <div className="space-y-3 md:pr-5 mt-2 md:mt-0">
                  <div className="flex items-center justify-between">
                    <p className="text-md text-gray-600 font-normal">Actual</p>
                    <p className="text-sm text-gray-600 font-normal">$45,000</p>
                  </div>
                  <div className="flex items-center justify-between gap-20">
                    <p className="text-md text-gray-600 font-normal">
                      Booking Amount
                    </p>
                    <p className="text-sm text-gray-600 font-normal">$5,000</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-md text-gray-800 font-medium">Total</p>
                    <p className="text-sm text-gray-800 font-medium">$40,000</p>
                  </div>
                </div>
              </div>
              {/* --- */}
              <div className="flex items-center justify-between p-3 md:p-5 md:pr-10 border-t border-b">
                <p className="text-md text-gray-600 font-medium">July Rent</p>
                <p className="text-sm text-gray-600 font-medium">$45,000</p>
              </div>
              {/* --- */}
              <div className="flex items-center justify-between p-3 md:p-5 md:pr-10">
                <p className="text-md text-gray-600 font-medium">August Rest</p>
                <p className="text-sm text-gray-600 font-medium">$45,000</p>
              </div>
            </div>
            <div className="w-full md:w-72 border-l p-4">
              <div className="text-left md:text-center">
                <p className="text-lg text-gray-600 font-semibold">Total</p>
                <p className="text-lg text-gray-600 font-semibold">$45,000</p>
              </div>
              <div className="flex md:flex-col justify-center items-center gap-2 mt-4">
                <Button className="bg-secondary uppercase h-8 text-xs md:text-sm text-white w-full md:w-fit">
                  Pay Now
                </Button>
                <Button className="bg-transparent border border-secondary h-8 gap-2 text-xs md:text-sm text-secondary w-full md:w-fit">
                  Download Invoice
                  <Download color="rgba(0,0,0,0.5)" size={16} />
                </Button>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
