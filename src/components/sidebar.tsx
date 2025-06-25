import { Ellipsis } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      if (!sidebarRef.current || !titleRef.current || !iconRef.current) return;

      const sidebar = sidebarRef.current;
      const title = titleRef.current;
      const icon = iconRef.current;

      const tl = gsap.timeline({ defaults: { ease: "power.inOut" } });

      if (!isOpen) {
        tl.to(title, {
          autoAlpha: 0,
          duration: 0.2,
          onComplete: () => {
            title.style.display = "none";
          },
        })
          .to(
            sidebar,
            {
              width: "72px",
              duration: 0.5,
            },
            "<"
          )
          .to(
            icon,
            {
              rotate: 90,
              duration: 0.3,
            },
            "<"
          );
      } else {
        title.style.display = "block";
        title.style.opacity = "0";
        tl.to(sidebar, {
          width: "300px",
          duration: 0.5,
        })
          .to(
            icon,
            {
              rotate: 0,
              duration: 0.3,
            },
            "<"
          )
          .to(
            title,
            {
              autoAlpha: 1,
              duration: 0.2,
            },
            "-=0.2"
          );
      }
    } else {
      isMounted.current = true;
    }
  }, [isOpen]);

  return (
    <aside
      ref={sidebarRef}
      style={{ willChange: "width" }}
      className="w-[300px] h-screen sticky top-0 bg-card text-white px-4 py-5 overflow-hidden transition-all"
    >
      <div className="flex h-[28px] items-center relative">
        <h1
          ref={titleRef}
          className="text-[22px] font-semibold whitespace-nowrap"
        >
          Finanzas Personales
        </h1>
        <button
          className="cursor-pointer w-10 h-10 bg-black hover:shadow-md hover:shadow-neutral-100/5 hover:bg-gradient-to-b from-neutral-950 to-black border-[1px] border-white/10 hover:border-white/20 transition-all duration-100 rounded-[8px] flex justify-center items-center absolute right-0"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Ellipsis ref={iconRef} />
        </button>
      </div>
    </aside>
  );
};
