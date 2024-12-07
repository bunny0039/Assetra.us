import * as React from "react";

import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

const InputWithRightIcon = React.forwardRef(
  ({ className, type, IconName, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };
    return (
      <div className="relative">
        <input
          type={showPassword ? "text" : type}
          className={cn(
            "flex h-9 w-full rounded-sm border border-input bg-background px-3 py-1.5 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />

        {type === "password" ? (
          <>
            {showPassword ? (
              <Eye
                size={15}
                color="rgba(0,0,0,.7)"
                className="absolute right-3 top-2.5 cursor-pointer"
                onClick={handleTogglePassword}
              />
            ) : (
              <EyeOff
                size={15}
                color="rgba(0,0,0,.7)"
                className="absolute right-3 top-2.5 cursor-pointer"
                onClick={handleTogglePassword}
              />
            )}
          </>
        ) : (
          <IconName
            size={15}
            color="rgba(0,0,0,.7)"
            className="absolute right-3 top-2.5 cursor-pointer"
          />
        )}
      </div>
    );
  }
);
InputWithRightIcon.displayName = "InputWithRightIcon";

export { InputWithRightIcon };
