import React, { ReactNode } from "react";

interface OverviewBalanceCardProps {
  children: ReactNode;
  styles?: string;
}

export const Card: React.FC<OverviewBalanceCardProps> = ({
  children,
  styles,
}) => {
  return (
    <div
      className={`border-[1px] border-white/20 bg-gradient-to-b from-neutral-950 to-black rounded-md h-auto px-6 py-5 shadow-md shadow-neutral-100/5 ${styles}`}
    >
      {children}
    </div>
  );
};
