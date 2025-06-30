import React from "react";
import { cn } from "~/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, ...props }, ref) => {
    return (
      <button
        className={cn(
          "flex gap-3 text-md font-semibold items-center justify-center p-2 rounded-md",
          {
            "bg-white text-black hover:bg-white/90 transition-colors duration-150":
              variant === "primary",
            "border bg-card border-gray-700 hover:bg-card-highlight transition-colors duration-150":
              variant === "secondary",
          },
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

Button.displayName = "Button";
