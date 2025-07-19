import React, { useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import { colorVariant } from "./balance-card-content";

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  maxValue: number;
}

export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ value = 0, maxValue = 100, className, ...props }, ref) => {
    const [currentProgress, setCurrentProgress] = useState(value);
    const [stage, setStage] = useState<keyof typeof colorVariant>("expense");

    useEffect(() => {
      const progress = (value * 100) / maxValue;

      if (progress <= 30) {
        setStage("expense");
      } else if (progress > 30 && progress <= 60) {
        setStage("income");
      } else if (progress > 60) {
        setStage("saving");
      }

      setCurrentProgress(progress);
    }, [value, maxValue]);

    return (
      <div ref={ref} className={cn("w-full bg-black/50 relative rounded-[3px]")} {...props}>
        <div
          className={cn("rounded-[3px] h-full mb-2", className)}
          style={{
            background: colorVariant[stage],
            width: `${currentProgress}%`,
          }}
        />
        <span className="text-sm absolute right-0 leading-none text-gray-400">
          de {maxValue}
        </span>
      </div>
    );
  }
);

ProgressBar.displayName = "ProgressBar";
