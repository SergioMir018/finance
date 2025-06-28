import {
  CreditCardIcon,
  Ellipsis,
  HomeIcon,
  PiggyBankIcon,
} from "lucide-react";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useLocalStorage } from "~/hooks/useLocalStorage";
import { SidebarLink } from "./sidebar-link";

const links: { text: string; icon: React.ReactNode; href: string }[] = [
  {
    text: "Resumen",
    icon: <HomeIcon />,
    href: "/",
  },
  {
    text: "Transacciones",
    icon: <CreditCardIcon />,
    href: "/transactions",
  },
  {
    text: "Ahorros",
    icon: <PiggyBankIcon />,
    href: "/savings",
  },
];

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useLocalStorage("isSidebarOpen", true);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!sidebarRef.current || !titleRef.current || !iconRef.current) return;

    const sidebar = sidebarRef.current;
    const title = titleRef.current;
    const icon = iconRef.current;

    const tl = gsap.timeline();

    if (!isOpen) {
      tl.to(title, {
        autoAlpha: 0,
        duration: 0.05,
        onComplete: () => {
          title.style.display = "none";
        },
      })
        .to(
          sidebar,
          {
            width: "72px",
            duration: 0.1,
            ease: "none",
          },
          "<"
        )
        .to(
          icon,
          {
            rotate: 90,
            duration: 0.1,
          },
          "<"
        );
    } else {
      title.style.display = "block";
      title.style.opacity = "0";
      tl.to(sidebar, {
        width: "300px",
        duration: 0.2,
        ease: "none",
      })
        .to(
          icon,
          {
            rotate: 0,
            duration: 0.1,
          },
          "<"
        )
        .to(
          title,
          {
            autoAlpha: 1,
            duration: 0.1,
          },
          "-=0.2"
        );
    }
  }, [isOpen]);

  return (
    <aside
      ref={sidebarRef}
      style={{ willChange: "width" }}
      className="w-[300px] h-screen sticky top-0 bg-card text-white px-4 py-5 overflow-hidden"
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
      <ul className="mt-6 flex flex-col gap-2">
        {links.map((item, index) => {
          return (
            <SidebarLink
              key={index}
              text={item.text}
              icon={item.icon}
              href={item.href}
              isSidebarOpen={isOpen}
            />
          );
        })}
      </ul>
    </aside>
  );
};
