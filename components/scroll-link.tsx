"use client";

import { smoothScrollTo } from "@/lib/smooth-scroll";
import type { ComponentProps } from "react";

type ScrollLinkProps = ComponentProps<"a"> & {
  targetId: string;
  onNavigate?: () => void;
};

export function ScrollLink({
  targetId,
  href,
  onClick,
  onNavigate,
  children,
  ...props
}: ScrollLinkProps) {
  return (
    <a
      {...props}
      href={href ?? `#${targetId}`}
      onClick={(event) => {
        event.preventDefault();
        smoothScrollTo(targetId);
        onNavigate?.();
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
