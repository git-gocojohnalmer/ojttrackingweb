import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database.types";

// Server-only — never import this from a client component
export const adminClient = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // get from Supabase dashboard → Settings → API
);
