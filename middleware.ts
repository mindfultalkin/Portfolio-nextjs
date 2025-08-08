import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const ZOHO_FORM_URL =
  "https://in.bigin.online/org60035146435/forms/portfolio";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip gating for success page & common assets/APIs
  if (
    pathname.startsWith("/form-success") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  // Let search engine bots through so your site can be indexed
  const ua = req.headers.get("user-agent") || "";
  if (/bot|crawler|spider|crawling/i.test(ua)) {
    return NextResponse.next();
  }

  // If cookie is set, let them in
  const alreadySubmitted = req.cookies.get("formSubmitted")?.value === "true";
  if (alreadySubmitted) return NextResponse.next();

  // Otherwise, send them to the Zoho form first
  return NextResponse.redirect(ZOHO_FORM_URL);
}

export const config = {
  matcher: [
    // Apply to everything except the listed paths
    "/((?!api|form-success|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
