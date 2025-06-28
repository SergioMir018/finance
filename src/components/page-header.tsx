import React from "react";
import { cn } from "~/lib/utils";

export const PageHeader = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h1
      ref={ref}
      className={cn(
        "font-bold text-3xl pt-4 pb-10 leading-none tracking-tight",
        className
      )}
      {...props}
    />
  );
});

PageHeader.displayName = "PageHeader";
