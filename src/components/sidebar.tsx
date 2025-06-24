import React, { useEffect, useRef, useState } from "react";
import { Menu, CircleX } from "lucide-react";
import { gsap } from "gsap";

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const sidebarRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuButtonRef.current, {
        opacity: 0,
        duration: 0.1,
        onComplete: () => {
          setShowButton(false);
          setShowSidebar(true);
        },
      });
    } else if (!isOpen) {
      gsap.to(sidebarRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          setShowSidebar(false);
          setShowButton(true);
        },
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (showSidebar) {
      gsap.fromTo(
        sidebarRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.2, ease: "power2.out" }
      );
    } else if (showButton) {
      gsap.fromTo(
        menuButtonRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.1 }
      );
    }
  }, [showSidebar, showButton]);

  return (
    <>
      {showButton && (
        <div
          ref={menuButtonRef}
          className="m-2 cursor-pointer fixed shadow-[0_0_5px] shadow-white/30 p-2 rounded-md bg-black"
          onClick={() => setIsOpen(true)}
        >
          <Menu color="white" />
        </div>
      )}

      {showSidebar && (
        <div
          ref={sidebarRef}
          className="text-white shadow-[0_0_5px] shadow-white/30 m-2 rounded-md fixed bg-black py-2 px-4 w-[300px]"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-extrabold text-center">Mis finanzas</h1>
            <CircleX
              color="white"
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};
