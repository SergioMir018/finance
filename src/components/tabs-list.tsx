import React from "react";
import { cn } from "~/lib/utils";

export const TabsList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("bg-card-highlight p-1 rounded-md gap-1", className)}
      {...props}
    />
  );
});

TabsList.displayName = "TabsList";
