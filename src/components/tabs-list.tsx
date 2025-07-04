import React from "react";
import { cn } from "~/lib/utils";

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("bg-card-highlight p-1 rounded-md gap-1", className)} {...props} />;
  }
);
