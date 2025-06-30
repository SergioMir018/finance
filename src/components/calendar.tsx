import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "~/lib/utils";

interface CalendarProps extends React.HTMLAttributes<HTMLDivElement> {
  selectedDate: string;
  currentMonth: Date;
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
  handleSelectedDate: (date: Date) => void;
  formatDate: (date: Date) => string;
}

const WEEK_DAYS = ["D", "L", "M", "X", "J", "V", "S"] as const;

function getDaysOfMonth(year: number, month: number): Date[] {
  const date = new Date(year, month, 1);
  const days: Date[] = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

function buildCalendar(
  currentMonth: Date
): { date: Date; isCurrent: boolean }[] {
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const days = getDaysOfMonth(year, month);
  const firstDay = days[0].getDay();

  const prevMonthDays = getDaysOfMonth(year, month - 1);
  const prevTail = firstDay === 0 ? [] : prevMonthDays.slice(-firstDay);

  const totalCells = Math.ceil((prevTail.length + days.length) / 7) * 7;
  const nextHead = Array.from(
    { length: totalCells - prevTail.length - days.length },
    (_, i) => new Date(year, month + 1, i + 1)
  );

  return [
    ...prevTail.map((date) => ({ date, isCurrent: false })),
    ...days.map((date) => ({ date, isCurrent: true })),
    ...nextHead.map((date) => ({ date, isCurrent: false })),
  ];
}

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      currentMonth,
      setCurrentMonth,
      handleSelectedDate,
      formatDate,
      selectedDate,
      ...props
    },
    ref
  ) => {
    const calendar = buildCalendar(currentMonth);

    return (
      <Card
        ref={ref}
        className="absolute top-full left-1/2 -translate-x-1/2 transform mt-1 w-[250px] pointer-events-none opacity-0 p-2 bg-card rounded shadow-lg"
        {...props}
      >
        <CardHeader className="flex flex-row space-y-0 items-center justify-between p-0">
          <button
            onClick={() =>
              setCurrentMonth(
                new Date(
                  currentMonth.getFullYear(),
                  currentMonth.getMonth() - 1,
                  1
                )
              )
            }
            className="p-1 rounded hover:bg-card-highlight"
            type="button"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="font-semibold capitalize">
            {currentMonth.toLocaleString("es", { month: "long" }).slice(0, 3)}{" "}
            {currentMonth.getFullYear()}
          </span>
          <button
            onClick={() =>
              setCurrentMonth(
                new Date(
                  currentMonth.getFullYear(),
                  currentMonth.getMonth() + 1,
                  1
                )
              )
            }
            className="p-1 rounded hover:bg-card-highlight"
            type="button"
          >
            <ChevronRight size={18} />
          </button>
        </CardHeader>

        <CardContent className="p-0">
          <div className="grid grid-cols-7 gap-x-1 gap-y-2 text-center text-sm text-white/60">
            {WEEK_DAYS.map((d) => (
              <div key={d} className="py-1 font-semibold">
                {d}
              </div>
            ))}
            {calendar.map(({ date, isCurrent }) => {
              const isToday = date.toDateString() === new Date().toDateString();
              const isSelected = formatDate(date) === selectedDate;

              return (
                <button
                  key={date.toISOString()}
                  disabled={!isCurrent}
                  onClick={() => isCurrent && handleSelectedDate(date)}
                  className={cn(
                    "w-8 h-8 flex justify-center items-center rounded transition",
                    {
                      "bg-white text-card-highlight font-bold":
                        isSelected && isCurrent,
                      "border border-white/20":
                        isToday && !isSelected && isCurrent,
                      "hover:bg-card-highlight text-white":
                        !isSelected && isCurrent,
                      "text-white/50 cursor-default": !isCurrent,
                    }
                  )}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>
    );
  }
);

Calendar.displayName = "Calendar";
