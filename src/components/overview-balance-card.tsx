import { MoveUp } from "lucide-react";
import React, { ReactNode } from "react";

interface OverviewBalanceCardProps {
  title: string;
  icon: ReactNode;
  textColor?: string;
  isBalanceCard?: boolean;
}

export const OverviewBalanceCard: React.FC<OverviewBalanceCardProps> = ({
  title,
  icon,
  textColor = "white",
  isBalanceCard = false,
}) => {
  return (
    <div className="border-2 border-white/20 rounded-md h-[160px] px-6 py-5 shadow-[0_0_2px] shadow-white/30">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-sm">{title}</h2>
        {icon}
      </div>
      <h1
        className={`mt-2 mb-1 text-3xl font-bold`}
        style={{ color: textColor }}
      >
        $21, 000
      </h1>
      {isBalanceCard ? (
        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-[#3bc369]">
            <MoveUp size={14} />
            <p>+ 2,5%</p>
          </div>
          <span className="text-sm text-white/80">desde el mes pasado</span>
        </div>
      ) : (
        <span className="text-sm text-white/80">Este mes</span>
      )}
    </div>
  );
};
