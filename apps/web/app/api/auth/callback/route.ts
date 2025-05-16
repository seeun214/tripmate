import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "@/shared/lib/supabase/server";

const RESTAPI_KEY = process.env.KAKAO_CLIENT_ID!;
const CLIENT_SECRET = process.env.KAKAO_CLIENT_SECRET!;
const LOGIN = "/login";
const HOME = "/";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  // 1) 인가 코드 없으면 로그인 페이지로
  if (!code) {
    return NextResponse.redirect(LOGIN);
  }

  // 2) 카카오에 토큰 요청
  const REDIRECT_URI = `${origin}/api/auth/callback`;
  const tokenRes = await fetch("https://kauth.kakao.com/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      client_id: RESTAPI_KEY,
      redirect_uri: REDIRECT_URI,
      code,
      client_secret: CLIENT_SECRET,
    }),
  });

  if (!tokenRes.ok) {
    console.error("Kakao token exchange failed:", await tokenRes.text());
    return NextResponse.redirect(LOGIN);
  }

  const { id_token } = await tokenRes.json();

  // 3) Supabase에 ID 토큰으로 로그인 요청
  const supabase = await createClient();
  const {
    data: { session },
    error: supabaseError,
  } = await supabase.auth.signInWithIdToken({
    provider: "kakao",
    token: id_token,
  });

  if (supabaseError || !session) {
    console.error("Supabase signInWithIdToken error:", supabaseError);
    return NextResponse.redirect(new URL(LOGIN, origin));
  }

  // 4) 로그인 성공, next 경로로 이동
  return NextResponse.redirect(new URL(HOME, origin));
}
