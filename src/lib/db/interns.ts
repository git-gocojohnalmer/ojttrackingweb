import { createClient } from "@/lib/supabase/server";

export async function listInterns() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("interns")
    .select("*, profiles(full_name, email, avatar_url)")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}

export async function getIntern(id: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("interns")
    .select("*, profiles(full_name, email, avatar_url)")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
}

export async function createIntern(payload: Record<string, unknown>) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("interns")
    .insert(payload)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateIntern(id: string, payload: Record<string, unknown>) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("interns")
    .update(payload)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}
