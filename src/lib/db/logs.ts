import { createClient } from "@/lib/supabase/server";

export async function listLogs(internId?: string) {
  const supabase = await createClient();
  let query = supabase
    .from("time_logs")
    .select("*")
    .order("log_date", { ascending: false });

  if (internId) {
    query = query.eq("intern_id", internId);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
}

export async function submitLog(payload: Record<string, unknown>) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("time_logs")
    .insert({ ...payload, status: "pending" })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function approveLog(id: string, approvedBy: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("time_logs")
    .update({ status: "approved", approved_by: approvedBy, approved_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function rejectLog(id: string, reason: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("time_logs")
    .update({ status: "rejected", reject_reason: reason })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}
