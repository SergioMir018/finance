import React from "react";
import { cn } from "~/lib/utils";

export const PageHeaderTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h1
      ref={ref}
      className={cn(
        "font-bold text-3xl leading-none tracking-tight",
        className
      )}
      {...props}
    />
  );
});

PageHeaderTitle.displayName = "PageHeaderTitle";
