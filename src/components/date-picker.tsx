import React, { useState, useRef } from "react";
import { cn } from "~/lib/utils";
import { gsap } from "gsap";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useCloseOnOutsideClick } from "~/hooks/use-close-on-outside-click";

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

function formatDate(d: Date): string {
  return `${String(d.getDate()).padStart(2, "0")} - ${String(
    d.getMonth() + 1
  ).padStart(2, "0")} - ${d.getFullYear()}`;
}

export const DatePicker = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [currentMonth, setCurrentMonth] = useState(
    () => new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  );

  const calendar = buildCalendar(currentMonth);

  useCloseOnOutsideClick(isOpen, containerRef, () => handleClose());

  const handleOpen = () => {
    setIsOpen(true);
    if (optionsRef.current) {
      gsap.set(optionsRef.current, { pointerEvents: "auto" });
      gsap.fromTo(
        optionsRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.15 }
      );
    }
  };

  const handleClose = () => {
    if (optionsRef.current) {
      gsap.to(optionsRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.1,
        pointerEvents: "none",
        onComplete: () =>
          setCurrentMonth(
            new Date(new Date().getFullYear(), new Date().getMonth(), 1)
          ),
      });
    }
    setIsOpen(false);
  };

  const handleSelectDate = (d: Date) => {
    setSelected(formatDate(d));
    handleClose();
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative z-10", className)}
      {...props}
    >
      <div
        ref={ref}
        onClick={isOpen ? handleClose : handleOpen}
        className="bg-card-highlight cursor-pointer border border-white/10 p-2 rounded-sm flex items-center gap-2"
      >
        <Calendar />
        <span className={cn(!selected && "text-white/80")}>
          {selected || "Selecciona una fecha"}
        </span>
      </div>

      <Card
        ref={optionsRef}
        className="absolute top-full left-1/2 -translate-x-1/2 transform mt-1 w-[250px] pointer-events-none opacity-0 p-2 bg-card rounded shadow-lg"
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
              const isSelected = formatDate(date) === selected;

              return (
                <button
                  key={date.toISOString()}
                  disabled={!isCurrent}
                  onClick={() => isCurrent && handleSelectDate(date)}
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
    </div>
  );
});

DatePicker.displayName = "DatePicker";
