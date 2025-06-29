import { RefObject, useEffect } from "react";

export function useCloseOnOutsideClick(
  isOpen: boolean,
  containerRef: RefObject<HTMLElement | null>,
  action: () => void
) {
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        isOpen &&
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        action();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, containerRef, action]);
}
