import React from "react";
import { cn } from "~/lib/utils";

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn("leading-tight tracking-tight", className)}
      {...props}
    />
  );
});

Label.displayName = "Label";
