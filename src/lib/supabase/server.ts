import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { Database } from "@/types/database.types";

/**
 * Use in Server Components, Server Actions, and Route Handlers.
 * Must be awaited — it reads the Next.js cookie store asynchronously.
 *
 * The `setAll` implementation is wrapped in try/catch because calling
 * it from a Server Component (where the response is already streaming)
 * will throw. Middleware keeps the session alive, so cookies set here
 * are a best-effort write from RSC context.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet: Array<{ name: string; value: string; options?: object }>) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options as Parameters<typeof cookieStore.set>[2]),
            );
          } catch {
            // Silently ignored when called from a Server Component.
            // The session-refresh middleware keeps the session token current.
          }
        },
      },
    },
  );
}
