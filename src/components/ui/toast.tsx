"use client";

import { cn } from "@/lib/utils";

type ToastVariant = "success" | "error" | "info";

interface ToastProps {
  message: string;
  variant?: ToastVariant;
  className?: string;
}

const variantStyles: Record<ToastVariant, string> = {
  success: "bg-emerald-600",
  error: "bg-red-600",
  info: "bg-indigo-600",
};

export function Toast({ message, variant = "info", className }: ToastProps) {
  return (
    <div
      role="alert"
      className={cn(
        "fixed bottom-4 right-4 z-50 rounded-lg px-4 py-3 text-sm text-white shadow-lg",
        variantStyles[variant],
        className,
      )}
    >
      {message}
    </div>
  );
}
