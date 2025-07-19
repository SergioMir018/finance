import React, { createContext, useContext, useState } from "react";
import { cn } from "~/lib/utils";

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue: string;
}

interface ContextType {
  tabsValue: string;
  setTabsValue: React.Dispatch<React.SetStateAction<string>>;
}

const TabsContext = createContext<ContextType | undefined>(undefined);

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ defaultValue, className, ...props }, ref) => {
    const [tabsValue, setTabsValue] = useState(defaultValue);

    return (
      <TabsContext.Provider value={{ tabsValue, setTabsValue }}>
        <div
          ref={ref}
          className={cn("w-full h-auto flex flex-col", className)}
          {...props}
        >
          {props.children}
        </div>
      </TabsContext.Provider>
    );
  }
);

export function useTabs() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("useTabs must be used within a TabsProvider");
  return ctx;
}
