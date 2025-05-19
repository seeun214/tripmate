"use server";

import { createClient } from "@/shared/lib/supabase/server";
import { redirect } from "next/navigation";

/**
 * 카카오 OAuth 로그인 서버 액션
 */
export async function signInWithKakao() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "kakao",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
    },
  });
  if (error) {
    throw new Error(error.message);
  }
  redirect(data.url);
}

/**
 * 로그아웃 서버 액션
 */
export async function signOutWithForm() {}
