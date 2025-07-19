import React from "react";
import { cn } from "~/lib/utils";

export const PageHeader = React.forwardRef<
  HTMLHeadElement,
  React.HTMLAttributes<HTMLHeadElement>
>(({ className, ...props }, ref) => {
  return (
    <header className={cn("flex pt-4 pb-10", className)} {...props} ref={ref} />
  );
});

PageHeader.displayName = "PageHeader";
