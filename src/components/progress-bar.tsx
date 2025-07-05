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

      console.log(currentProgress);
    }, [value, maxValue]);

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        <div className="flex-1 h-full relative">
          <div
            className={cn("rounded-[3px] h-full")}
            style={{
              background: colorVariant[stage],
              width: `${currentProgress}%`,
            }}
          ></div>
          <span className="text-sm absolute right-2 top-1/2 -translate-y-1/2 leading-none text-gray-400">
            de {maxValue}
          </span>
        </div>
      </div>
    );
  }
);
