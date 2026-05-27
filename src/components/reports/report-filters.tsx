"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function ReportFilters() {
  return (
    <div className="flex flex-wrap items-end gap-4">
      <div className="space-y-1">
        <Label htmlFor="date_from">From</Label>
        <Input id="date_from" type="date" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="date_to">To</Label>
        <Input id="date_to" type="date" />
      </div>
      <Button variant="secondary">Filter</Button>
      <Button>Export PDF</Button>
    </div>
  );
}
