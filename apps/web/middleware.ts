import { updateSession } from "@/shared/lib/supabase/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  return await updateSession(req);

  // // 보호해야 할 경로라면
  // if (req.nextUrl.pathname.startsWith("/my") && !session) {
  //   // 로그인 페이지로 리다이렉트 해주고
  //   const loginUrl = new URL("/login", req.nextUrl);
  //   return NextResponse.redirect(loginUrl, { headers: res.headers });
  // }

  // return res;
}

export const config = {
  matcher: ["/my/:path*", "/login"],
};
