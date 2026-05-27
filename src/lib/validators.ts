import { z } from "zod";

export const logSchema = z.object({
  log_date: z.string().min(1, "Date is required"),
  clock_in: z.string().min(1, "Clock-in time is required"),
  clock_out: z.string().min(1, "Clock-out time is required"),
  tasks: z.string().min(1, "Tasks description is required"),
});

export const internSchema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email"),
  school: z.string().min(1, "School is required"),
  program: z.string().min(1, "Program is required"),
  supervisor: z.string().min(1, "Supervisor is required"),
  required_hours: z.coerce.number().positive("Must be a positive number"),
  start_date: z.string().min(1, "Start date is required"),
  end_date: z.string().min(1, "End date is required"),
});

export type LogFormValues = z.infer<typeof logSchema>;
export type InternFormValues = z.infer<typeof internSchema>;
