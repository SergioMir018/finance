import React, { useState, useRef } from "react";
import { cn } from "~/lib/utils";
import { gsap } from "gsap";
import { CalendarIcon } from "lucide-react";
import { useCloseOnOutsideClick } from "~/hooks/use-close-on-outside-click";
import { Calendar } from "./calendar";

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
        <CalendarIcon />
        <span className={cn(!selected && "text-white/80")}>
          {selected || "Selecciona una fecha"}
        </span>
      </div>
      <Calendar
        ref={optionsRef}
        selectedDate={selected}
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        handleSelectedDate={handleSelectDate}
        formatDate={formatDate}
      />
    </div>
  );
});

DatePicker.displayName = "DatePicker";
