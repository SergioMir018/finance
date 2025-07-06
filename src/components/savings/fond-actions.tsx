import React, { useState } from "react";
import { cn } from "~/lib/utils";
import { gsap } from "gsap";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useCloseOnOutsideClick } from "~/hooks/use-close-on-outside-click";
import { Edit, Ellipsis, Minus, Plus, Trash } from "lucide-react";
import { Separator } from "../separator";

export const FondActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const optionsRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const openOptions = () => {
    setIsOpen(true);

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

    if (optionsRef.current) {
      gsap.to(optionsRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.1,
        display: "none",
      });
    }
  };

  useCloseOnOutsideClick(isOpen, containerRef, closeOptions);

  return (
    <div
      ref={containerRef}
      className={cn("relative z-10", className)}
      {...props}
    >
      <button
        onClick={() => {
          isOpen ? closeOptions() : openOptions();
        }}
        className={cn(
          "flex items-center justify-center hover:bg-card-highlight p-2 rounded-sm transition-colors duration-150",
          { "cursor-default hover:bg-card": isOpen }
        )}
      >
        <Ellipsis size={18} />
      </button>
      <Card ref={optionsRef} className="absolute right-0 mt-1 hidden py-3 px-2">
        <CardHeader className="px-2 !pb-2 !pt-1">
          <CardTitle>Acciones</CardTitle>
        </CardHeader>
        <CardContent className="p-0 m-0">
          <button className="flex justify-between items-center w-32 py-1 hover:bg-card-highlight px-2 rounded-sm transition-colors duration-150">
            <Plus size={15} strokeWidth={3} /> <span>Depositar</span>
          </button>
          <button className="flex justify-between items-center w-32 py-1 hover:bg-card-highlight px-2 rounded-sm transition-colors duration-150">
            <Minus size={15} strokeWidth={3} /> <span>Retirar</span>
          </button>
          <button className="flex justify-between items-center w-32 py-1 hover:bg-card-highlight px-2 rounded-sm transition-colors duration-150">
            <Edit size={15} /> <span>Editar</span>
          </button>
          <Separator />
          <button className="flex justify-between items-center w-32 py-1 hover:bg-card-highlight px-2 rounded-sm transition-colors duration-150 text-[hsl(var(--expense))]">
            <Trash size={15} /> <span>Eliminar</span>
          </button>
        </CardContent>
      </Card>
    </div>
  );
});

FondActions.displayName = "FondActions";
