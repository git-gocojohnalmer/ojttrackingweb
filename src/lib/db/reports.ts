import { createClient } from "@/lib/supabase/server";

export async function getReportData(internId?: string, from?: string, to?: string) {
  const supabase = await createClient();

  let query = supabase
    .from("time_logs")
    .select("*, interns(*, profiles(full_name, email))")
    .eq("status", "approved")
    .order("log_date", { ascending: true });

  if (internId) query = query.eq("intern_id", internId);
  if (from) query = query.gte("log_date", from);
  if (to) query = query.lte("log_date", to);

  const { data, error } = await query;
  if (error) throw error;
  return data;
}
