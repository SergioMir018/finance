import React, { ReactNode } from "react";
import { MoveUp, TrendingUp } from "lucide-react";

interface BalanceContentProps {
  title: string;
  icon: ReactNode;
  textColor?: string;
  isBalanceCard?: boolean;
}

export const BalanceContent: React.FC<BalanceContentProps> = ({
  title,
  icon,
  textColor,
  isBalanceCard,
}) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-sm">{title}</h2>
        {icon}
      </div>
      <h1
        className={`mt-2 mb-1 text-3xl font-bold ${textColor}`}
        style={{ color: textColor } as React.CSSProperties}
      >
        $21, 000
      </h1>
      {isBalanceCard ? (
        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-[#3bc369]">
            <TrendingUp size={18} />
            <p>+ 2,5%</p>
          </div>
          <span className="text-sm text-gray-400">desde el mes pasado</span>
        </div>
      ) : (
        <span className="text-sm text-gray-400">Este mes</span>
      )}
    </>
  );
};
