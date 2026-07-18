"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

const PORTFOLIO_PATH = "/portfolio.pdf";
const PORTFOLIO_FILENAME = "DevInDays-Portfolio.pdf";

function prefersMobilePortfolioAction() {
  return window.matchMedia("(max-width: 767px), (pointer: coarse)").matches;
}

async function downloadPortfolio() {
  try {
    const response = await fetch(PORTFOLIO_PATH);

    if (!response.ok) {
      throw new Error("Failed to fetch portfolio");
    }

    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = PORTFOLIO_FILENAME;
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(objectUrl);
  } catch {
    window.open(PORTFOLIO_PATH, "_blank", "noopener,noreferrer");
  }
}

export function openPortfolio() {
  if (prefersMobilePortfolioAction()) {
    void downloadPortfolio();
    return;
  }

  window.open(PORTFOLIO_PATH, "_blank", "noopener,noreferrer");
}

type PortfolioLinkProps = {
  className?: string;
  children?: ReactNode;
  "data-umami-event"?: string;
};

export function PortfolioLink({ className, children, "data-umami-event": umamiEvent }: PortfolioLinkProps) {
  return (
    <button
      type="button"
      onClick={openPortfolio}
      className={cn(
        "text-left text-sm font-light text-gray-600 transition-colors hover:text-gray-900",
        className
      )}
      aria-label="View DevInDays portfolio PDF"
      data-umami-event={umamiEvent}
    >
      {children ?? "View Portfolio"}
    </button>
  );
}

type PortfolioButtonProps = Omit<ComponentProps<typeof Button>, "onClick" | "type">;

export function PortfolioButton({ className, children, ...props }: PortfolioButtonProps) {
  return (
    <Button
      type="button"
      variant="outline"
      size="lg"
      className={cn(
        "border-gray-300 bg-white text-gray-900 shadow-sm hover:border-gray-400 hover:bg-gray-50",
        className
      )}
      onClick={openPortfolio}
      aria-label="View DevInDays portfolio PDF"
      {...props}
    >
      <FileText className="h-4 w-4" aria-hidden="true" />
      {children ?? "View Portfolio"}
    </Button>
  );
}
