// middleware.ts
import { NextResponse, type NextRequest } from "next/server";

/**
 * Configure allowed origins here.
 *
 * - When possible list exact origins (recommended).
 * - If you set ALLOW_ALL_ORIGINS = true, middleware will send Access-Control-Allow-Origin: *
 *   BUT don't use * if you rely on credentials/cookies.
 */
const ALLOW_ALL_ORIGINS = true; // <--- set true to allow any origin (not recommended for prod)
const allowedOrigins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://192.168.1.6:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3001",
    "http://192.168.1.6:3001",
  // add other dev/production origins here
];

function getOriginHeader(request: NextRequest) {
  // Header may be "origin" in browser requests, fallback to referer if needed
    return request.headers.get("origin") ?? request.headers.get("referer") ?? "";
}

export function middleware(request: NextRequest) {
    const origin = getOriginHeader(request);
    const isAllowed = ALLOW_ALL_ORIGINS || allowedOrigins.includes(origin);

  // Common headers to include in CORS responses
const corsHeaders: Record<string, string> = {
    "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Requested-With, Accept, Origin",
    // Optionally allow cookies (only if origin is specific and you set credentials on client)
    // "Access-Control-Allow-Credentials": "true",
};

  // Preflight request (OPTIONS) -> short-circuit with allowed headers
if (request.method === "OPTIONS") {
    const res = NextResponse.json({ ok: true });
    // Set origin header correctly
    res.headers.set(
        "Access-Control-Allow-Origin",
        isAllowed ? (ALLOW_ALL_ORIGINS ? "*" : origin) : "null"
    );
    // add other headers
    Object.entries(corsHeaders).forEach(([k, v]) => res.headers.set(k, v));
    // If you are returning credentials, uncomment:
    // if (isAllowed && !ALLOW_ALL_ORIGINS) res.headers.set("Access-Control-Allow-Credentials", "true");
    return res;
}

  // For normal requests, continue and set headers on the response
    const response = NextResponse.next();
    response.headers.set(
    "Access-Control-Allow-Origin",
    isAllowed ? (ALLOW_ALL_ORIGINS ? "*" : origin) : "null"
);
    Object.entries(corsHeaders).forEach(([k, v]) => response.headers.set(k, v));
  // Optionally:
  // if (isAllowed && !ALLOW_ALL_ORIGINS) response.headers.set("Access-Control-Allow-Credentials", "true");

    return response;
}

/**
 * If you only want middleware to run for API routes, use matcher below:
 * export const config = { matcher: "/api/:path*" }
 *
 * If you want middleware to run for everything, remove or change matcher accordingly.
 */
export const config = {
    matcher: "/api/:path*",
};
