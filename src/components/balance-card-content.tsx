import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "~/lib/utils";
import { CardVariant } from "~/types/cardTypes/cardContentVariant";

interface BalanceCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  amount: number;
  changePercent?: number;
  changeLabel?: string;
  subtext?: string;
  variant: CardVariant;
}

export const BalanceCardContent = React.forwardRef<
  HTMLDivElement,
  BalanceCardContentProps
>(
  ({
    amount,
    changePercent,
    changeLabel = "desde el mes pasado",
    subtext = "Este mes",
    variant,
    ...props
  }, ref) => {
    const colorVariant: Record<CardVariant, string> = {
      balance: "hsl(var(--balance))",
      income: "hsl(var(--income))",
      expense: "hsl(var(--expense))",
      saving: "hsl(var(--saving))",
    };

    const colorStyle = { color: colorVariant[variant] };
    const formattedAmount = amount.toLocaleString(undefined, {
      style: "currency",
      currency: "USD",
      currencyDisplay: "narrowSymbol",
      maximumFractionDigits: 0,
    });

    const hasChange = variant === "balance" && changePercent !== undefined;
    const isPositive = changePercent! >= 0;
    const changeTextColorStyle = {
      color: `${isPositive ? `hsl(var(--income))` : `hsl(var(--expense))`}`,
    };

    return (
      <div className="flex flex-col gap-2" {...props}>
        <h3
          className={cn("text-3xl font-bold leading-none")}
          style={colorStyle}
        >
          {formattedAmount}
        </h3>
        {hasChange ? (
          <div className="flex flex-col">
            <div
              className="flex items-center gap-2"
              style={changeTextColorStyle}
            >
              {isPositive ? (
                <TrendingUp size={18} />
              ) : (
                <TrendingDown size={18} />
              )}
              <p>
                {isPositive ? "+" : ""}
                {changePercent!.toLocaleString(undefined, {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                })}
                %
              </p>
            </div>
            <span className="text-sm text-gray-400">{changeLabel}</span>
          </div>
        ) : (
          <span className="text-sm text-gray-400">{subtext}</span>
        )}
      </div>
    );
  }
);

BalanceCardContent.displayName = "BalanceCardContent";
