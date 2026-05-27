import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

/**
 * Root page — resolves the authenticated user's role and sends them
 * to their home screen. Unauthenticated users fall through to /login.
 * This is the single place that knows the role→route mapping, keeping
 * proxy.ts free of DB calls.
 */
export default async function RootPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (profile?.role === "admin") redirect("/admin");

  redirect("/intern");
}
