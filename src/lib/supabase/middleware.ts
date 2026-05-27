import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import type { Database } from "@/types/database.types";

/**
 * Called once per request from src/middleware.ts.
 *
 * Responsibilities:
 *  1. Refresh the Supabase session token if it is about to expire.
 *  2. Propagate the refreshed cookies on both the request and response
 *     objects so downstream RSCs and the browser both stay in sync.
 *  3. Return the supabase client so the global middleware can make
 *     a single role-check DB call without creating a second client.
 *
 * IMPORTANT: Do not add any logic between `createServerClient` and
 * `supabase.auth.getUser()`. Even a single awaited call between them
 * can cause the session to be written with stale cookie values.
 */
export async function updateSession(request: NextRequest) {
  // Start with a plain pass-through response. The cookie handlers
  // below will swap this out if Supabase writes new session cookies.
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet: Array<{ name: string; value: string; options?: object }>) {
          // Write onto the mutated request so the current handler sees
          // fresh values immediately.
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          // Rebuild the response with the updated request so Next.js
          // forwards the refreshed cookies to the browser.
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(
              name,
              value,
              options as Parameters<typeof supabaseResponse.cookies.set>[2],
            ),
          );
        },
      },
    },
  );

  // Validates and refreshes the session against the Supabase Auth server.
  // getUser() is used (not getSession()) — it makes a network call to
  // verify the JWT, preventing forged tokens from bypassing auth checks.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { response: supabaseResponse, user, supabase };
}