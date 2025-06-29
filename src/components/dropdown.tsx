import React, { useState } from "react";
import { cn } from "~/lib/utils";
import { gsap } from "gsap";
import { Card } from "./ui/card";

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  data: Array<string>;
}

export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ icon, className, data, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(data[0]);
    const iconRef = React.useRef<HTMLSpanElement>(null);
    const optionsRef = React.useRef<HTMLDivElement>(null);

    const rotateDropdownIcon = () => {
      if (iconRef.current) {
        gsap.to(iconRef.current, {
          rotation: !isOpen ? -180 : 0,
          duration: 0.2,
        });
      }
    };

    const openOptions = () => {
      setIsOpen(true);
      rotateDropdownIcon();

      if (optionsRef.current) {
        gsap.fromTo(
          optionsRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.1, display: "block" }
        );
      }
    };

    const closeOptions = () => {
      setIsOpen(false);
      rotateDropdownIcon();

      if (optionsRef.current) {
        gsap.to(optionsRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.1,
          display: "none",
        });
      }
    };

    const handleOptionClick = (option: string) => {
      setSelectedOption(option);
      closeOptions();
      rotateDropdownIcon();
    };

    return (
      <div className="relative z-10">
        <div
          ref={ref}
          className={cn(
            "bg-card-highlight cursor-pointer border border-white/10 p-2 rounded-sm flex items-center justify-between",
            className
          )}
          {...props}
          onClick={isOpen ? closeOptions : openOptions}
        >
          {selectedOption}
          <span ref={iconRef} style={{ display: "inline-flex" }}>
            {icon}
          </span>
        </div>
        <Card
          ref={optionsRef}
          className="absolute top-full left-0 mt-1 w-full hidden"
        >
          {data.map((item) => (
            <div
              key={item}
              className="p-2 hover:bg-card-highlight cursor-pointer"
              onClick={() => handleOptionClick(item)}
            >
              {item}
            </div>
          ))}
        </Card>
      </div>
    );
  }
);
