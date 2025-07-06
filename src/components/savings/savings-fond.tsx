import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Ellipsis } from "lucide-react";
import { FondActions } from "./fond-actions";

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
  return (
    <Card ref={ref} className={className} {...props}>
      <CardHeader className="flex-row justify-between items-center">
        <CardTitle className="text-lg">{title}</CardTitle>
        <FondActions />
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
});

SavingsFondCard.displayName = "SavingsFondCard";
