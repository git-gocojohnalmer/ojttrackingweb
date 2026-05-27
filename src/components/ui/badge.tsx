import { cn } from "@/lib/utils";

type BadgeVariant = "approved" | "pending" | "rejected" | "active" | "completed" | "dropped";

interface BadgeProps {
  variant: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  approved: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  pending: "bg-amber-50 text-amber-700 ring-amber-600/20",
  rejected: "bg-red-50 text-red-700 ring-red-600/20",
  active: "bg-blue-50 text-blue-700 ring-blue-600/20",
  completed: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  dropped: "bg-zinc-50 text-zinc-700 ring-zinc-600/20",
};

export function Badge({ variant, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset capitalize",
        variantStyles[variant],
        className,
      )}
    >
      {variant}
    </span>
  );
}
