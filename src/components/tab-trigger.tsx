import React from "react";
import { cn } from "~/lib/utils";
import { useTabs } from "./tabs";

interface TabTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string;
}

export const TabTrigger = React.forwardRef<HTMLButtonElement, TabTriggerProps>(
  ({ value, className, ...props }, ref) => {
    const { tabsValue, setTabsValue } = useTabs();

    return (
      <button
        ref={ref}
        className={cn(
          "flex justify-center items-center col-span-1 py-2 rounded-md font-semibold cursor-pointer",
          {
            "bg-card transition-colors duration-150": value === tabsValue,
            " text-white/50": value != tabsValue,
          },
          className
        )}
        onClick={() => setTabsValue(value)}
        {...props}
      />
    );
  }
);

TabTrigger.displayName = "TabTrigger";
