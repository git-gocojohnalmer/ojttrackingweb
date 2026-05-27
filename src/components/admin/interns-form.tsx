"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface InternsFormProps {
  internId?: string;
}

export function InternsForm({ internId }: InternsFormProps) {
  const isEdit = Boolean(internId);

  return (
    <form className="space-y-4 max-w-lg">
      <div className="space-y-1">
        <Label htmlFor="full_name">Full Name</Label>
        <Input id="full_name" name="full_name" required />
      </div>
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div className="space-y-1">
        <Label htmlFor="school">School</Label>
        <Input id="school" name="school" required />
      </div>
      <div className="space-y-1">
        <Label htmlFor="program">Program</Label>
        <Input id="program" name="program" required />
      </div>
      <div className="space-y-1">
        <Label htmlFor="supervisor">Supervisor</Label>
        <Input id="supervisor" name="supervisor" required />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="start_date">Start Date</Label>
          <Input id="start_date" name="start_date" type="date" required />
        </div>
        <div className="space-y-1">
          <Label htmlFor="end_date">End Date</Label>
          <Input id="end_date" name="end_date" type="date" required />
        </div>
      </div>
      <div className="space-y-1">
        <Label htmlFor="required_hours">Required Hours</Label>
        <Input
          id="required_hours"
          name="required_hours"
          type="number"
          min={1}
          required
        />
      </div>
      <Button type="submit">{isEdit ? "Save Changes" : "Add Intern"}</Button>
    </form>
  );
}
