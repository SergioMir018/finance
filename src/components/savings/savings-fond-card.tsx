import React, { useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { FondActions } from "./fond-actions";
import { formatMoney } from "~/utils/format-money";

interface SavingsFondCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  balance: number;
  description: string;
  creationDate: string;
}

export const SavingsFondCard = React.forwardRef<
  HTMLDivElement,
  SavingsFondCardProps
>(({ title, balance, description, creationDate, className, ...props }, ref) => {
  const fomattedBalance = useCallback(() => formatMoney(balance), [balance]);

  return (
    <Card ref={ref} className={className} {...props}>
      <CardHeader className="flex-row justify-between items-center">
        <CardTitle className="text-lg">{title}</CardTitle>
        <FondActions />
      </CardHeader>
      <CardContent>
        <div className="flex justify-between py-2">
          <span className="text-gray-400">Balance:</span>
          <span className="font-bold text-xl">{fomattedBalance()}</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-gray-400">Descripción:</span>
          <span>{description}</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-gray-400">Fecha de creación:</span>
          <span>{creationDate}</span>
        </div>
      </CardContent>
    </Card>
  );
});

SavingsFondCard.displayName = "SavingsFondCard";
