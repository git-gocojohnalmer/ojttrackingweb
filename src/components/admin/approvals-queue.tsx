"use client";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ApprovalsQueue() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Intern</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Hours</TableHead>
          <TableHead>Tasks</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={6} className="text-center text-zinc-400">
            No pending approvals.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
