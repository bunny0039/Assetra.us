import { Star } from "lucide-react";
import React from "react";

function RatingBreakdown() {
  return (
    <div>
      <p class="text-xs font-semibold text-gray-700 mb-3">Ratings Breakdown</p>
      {[5, 4, 3, 2, 1].map((item) => {
        return (
          <div class="flex items-center mt-2" key={item}>
            <div className="flex items-center gap-1">
              <p className="text-xs font-medium text-gray-700">{item}</p>
              <Star size={14} fill="#808080" color="#808080" />
            </div>
            <div class="w-full h-2 mx-4 bg-gray-300 rounded">
              <div
                class="h-2 bg-secondary rounded"
                style={{ width: `${item}0%` }}
              ></div>
            </div>
            <p className="text-xs font-medium text-gray-700">{`${item}0%`}</p>
          </div>
        );
      })}
    </div>
  );
}

export default RatingBreakdown;
