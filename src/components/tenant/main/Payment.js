import React from "react";
import { BsClockHistory } from "react-icons/bs";
import { FaCircleCheck } from "react-icons/fa6";
import { PaymentAccordion } from "../PaymentAccordion";

function Payment() {
  return (
    <main className="px-4 md:px-10 py-6 md:py-12 bg-gray-50 min-h-screen">
      <div>
        <div className="flex items-center gap-3">
          <p className="text-gray-700 uppercase font-semibold text-sm md:text-xl">
            Pending Payment
          </p>
          <BsClockHistory color="#fb923c" size={16} />
        </div>
        {/* === */}
        <div className="mt-4 md:mt-7">
          <PaymentAccordion name="pending" />
        </div>
      </div>
      <div className="mt-7 md:mt-12">
        <div className="flex items-center gap-3">
          <p className="text-gray-700 uppercase font-semibold text-sm md:text-xl">
            Successful Payment
          </p>
          <FaCircleCheck color="#4ade80" size={16} />
        </div>
        {/* === */}
        <div className="mt-4 md:mt-7">
          <PaymentAccordion name="success" />
        </div>
      </div>
    </main>
  );
}

export default Payment;
