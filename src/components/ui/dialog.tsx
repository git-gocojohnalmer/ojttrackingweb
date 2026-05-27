"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Dialog({ open, onClose, title, children, className }: DialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cn(
          "relative z-10 w-full max-w-md rounded-xl bg-white p-6 shadow-xl",
          className,
        )}
      >
        {title && (
          <h2 className="mb-4 text-lg font-semibold text-zinc-900">{title}</h2>
        )}
        {children}
      </div>
    </div>
  );
}
