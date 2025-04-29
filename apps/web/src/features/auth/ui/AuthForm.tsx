"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import kakaoBtn from "@/shared/assets/icons/kakao_login_medium_narrow.png";

export const AuthForm: React.FC = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="text-center text-gray-500">로딩 중…</div>;
  }

  if (session) {
    return (
      <button
        onClick={() => signOut()}
        className="w-full py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition"
      >
        로그아웃
      </button>
    );
  }

  return (
    <button
      onClick={() => signIn("kakao")}
      className="w-full flex justify-center"
    >
      <img
        src={kakaoBtn.src}
        alt="카카오 로그인"
        className="max-w-[200px] w-full h-auto"
      />
    </button>
  );
};
