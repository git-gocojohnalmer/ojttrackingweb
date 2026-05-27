"use client";

import { Avatar } from "@/components/ui/avatar";

export function UserMenu() {
  return (
    <button className="flex items-center gap-2 rounded-lg p-1 hover:bg-zinc-100">
      <Avatar name="User" size="sm" />
      <span className="text-sm text-zinc-700">Account</span>
    </button>
  );
}
