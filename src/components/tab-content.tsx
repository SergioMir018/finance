import React from "react";
import { cn } from "~/lib/utils";
import { useTabs } from "./tabs";

interface TabContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const TabContent = React.forwardRef<HTMLDivElement, TabContentProps>(
  ({ value, className, ...props }, ref) => {
    const { tabsValue } = useTabs();

    if (tabsValue != value) return null;

    return <div ref={ref} className={cn("", className)} {...props} />;
  }
);

TabContent.displayName = "TabContent";
