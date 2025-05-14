import { getSession } from "@/features/auth/api/serverActions";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const session = await getSession();

  const { pathname } = req.nextUrl;
  console.log(session);

  // 1) 마이페이지 접근
  if (pathname === "/my") {
    return session
      ? NextResponse.next()
      : NextResponse.redirect(new URL("/my/login", req.url));
  }

  // 2) 로그인 페이지에 이미 로그인한 사용자가 접근
  if (pathname === "/my/login" && session) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/my/:path*"],
};
