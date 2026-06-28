"use client";

import { Button } from "@/components/ui/button";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import type { ComponentProps } from "react";

type ScrollToButtonProps = Omit<ComponentProps<typeof Button>, "onClick"> & {
  targetId: string;
  ariaLabel?: string;
};

export function ScrollToButton({
  targetId,
  ariaLabel,
  children,
  ...props
}: ScrollToButtonProps) {
  return (
    <Button
      {...props}
      onClick={(event) => {
        event.preventDefault();
        smoothScrollTo(targetId);
      }}
      aria-label={ariaLabel}
    >
      {children}
    </Button>
  );
}
