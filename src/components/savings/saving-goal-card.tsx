import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { cn } from "~/lib/utils";
import { ProgressBar } from "../progress-bar";

interface SavingGoalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  currentBalance: number;
  goal?: number;
}

export const SavingGoalCard = ({
  title,
  currentBalance,
  goal,
  className,
  ...props
}: SavingGoalCardProps) => {
  return (
    <Card className={cn("", className)} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {goal ? (
          <ProgressBar className="h-2" value={currentBalance} maxValue={goal} />
        ) : (
          <ProgressBar
            className="h-2"
            value={currentBalance}
            maxValue={currentBalance}
          />
        )}
      </CardContent>
    </Card>
  );
};
