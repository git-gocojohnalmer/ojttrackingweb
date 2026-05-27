"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { logSchema } from "@/lib/validators";
import type { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type LogFormValues = z.infer<typeof logSchema>;

export function LogSubmitForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LogFormValues>({ resolver: zodResolver(logSchema) });

  async function onSubmit(data: LogFormValues) {
    await fetch("/api/logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg">
      <div className="space-y-1">
        <Label htmlFor="log_date">Date</Label>
        <Input id="log_date" type="date" {...register("log_date")} />
        {errors.log_date && (
          <p className="text-xs text-red-500">{errors.log_date.message}</p>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="clock_in">Clock In</Label>
          <Input id="clock_in" type="time" {...register("clock_in")} />
        </div>
        <div className="space-y-1">
          <Label htmlFor="clock_out">Clock Out</Label>
          <Input id="clock_out" type="time" {...register("clock_out")} />
        </div>
      </div>
      <div className="space-y-1">
        <Label htmlFor="tasks">Tasks Done</Label>
        <textarea
          id="tasks"
          {...register("tasks")}
          rows={4}
          className="flex w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {errors.tasks && (
          <p className="text-xs text-red-500">{errors.tasks.message}</p>
        )}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting…" : "Submit Log"}
      </Button>
    </form>
  );
}
