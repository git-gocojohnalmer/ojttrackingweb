import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

/**
 * Next.js 16 Proxy (formerly Middleware).
 *
 * Responsibilities here are intentionally narrow — only optimistic checks
 * that read from the already-validated session, never the database.
 * Per Next.js 16 docs, DB queries in Proxy hurt performance because Proxy
 * runs on every route including prefetches. Actual role enforcement lives
 * in the dashboard layouts via requireRole().
 *
 * Flow:
 *  1. Refresh the Supabase session cookie (must happen on every request).
 *  2. Unauthenticated on a protected route → /login.
 *  3. Authenticated on /login → / (root page resolves role and redirects).
 */

const PUBLIC_PATHS = new Set(["/login"]);

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Refresh the session and get the validated user.
  //    updateSession calls getUser() which verifies the JWT with Supabase Auth.
  //    No additional DB call is made here.
  const { response, user } = await updateSession(request);

  // Helper: redirect while preserving the refreshed session cookies.
  function redirectTo(path: string) {
    const url = request.nextUrl.clone();
    url.pathname = path;
    const res = NextResponse.redirect(url);
    response.cookies
      .getAll()
      .forEach((c) => res.cookies.set(c.name, c.value));
    return res;
  }

  // 2. No session — gate everything except public paths.
  if (!user) {
    if (PUBLIC_PATHS.has(pathname)) return response;
    return redirectTo("/login");
  }

  // 3. Authenticated user on the login page → root page handles role redirect.
  if (PUBLIC_PATHS.has(pathname)) {
    return redirectTo("/");
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};