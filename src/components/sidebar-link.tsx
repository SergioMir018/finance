import { Link, useLocation } from "@tanstack/react-router";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { cn } from "~/lib/utils";

interface SidebarLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: React.ReactNode;
  href: string;
  isSidebarOpen: boolean;
}

export const SidebarLink = React.forwardRef<
  HTMLAnchorElement,
  SidebarLinkProps
>(({ children, icon, href, isSidebarOpen, ...props }, ref) => {
  const { pathname } = useLocation();
  const isBasePath = href === pathname;
  const linkTextRef = useRef<HTMLSpanElement>(null);

  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => setIsHydrated(true), []);

  useEffect(() => {
    if (!linkTextRef.current) return;

    const linkText = linkTextRef.current;
    const tl = gsap.timeline({ defaults: { ease: "power.inOut" } });

    if (!isSidebarOpen) {
      tl.to(linkText, {
        autoAlpha: 0,
        duration: 0.1,
        onComplete: () => {
          linkText.style.display = "none";
        },
      });
    } else {
      linkText.style.display = "block";
      tl.to(linkText, {
        autoAlpha: 1,
        duration: 0.1,
      });
    }
  }, [isSidebarOpen]);

  return (
    <Link
      to={href}
      className={cn(
        "flex items-center space-x-2 text-white/50 hover:bg-card-highlight transition-colors duration-150 rounded-[5px]",
        isBasePath && "text-white"
      )}
      {...props}
      ref={ref}
    >
      <div
        className={cn(
          "h-10 min-w-10 bg-transparent border border-transparent shadow-none transition-all duration-100 rounded-[8px] flex justify-center items-center",
          {
            "bg-black hover:shadow-md hover:shadow-neutral-100/5 hover:bg-gradient-to-b from-neutral-950 to-black border-[1px] border-white/10 hover:border-white/20":
              !isSidebarOpen && isHydrated,
          }
        )}
      >
        {icon}
      </div>
      <span ref={linkTextRef}>{children}</span>
    </Link>
  );
});

SidebarLink.displayName = "SidebarLink";
