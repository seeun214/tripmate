"use client";

import React from "react";
import Link from "next/link";
import { AuthForm } from "@/features/auth/ui/AuthForm";

export default function CleanLoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-6">
      <header className="w-full flex items-center justify-between max-w-md mx-auto mb-12">
        <h1 className="text-xl font-extrabold tracking-widest">TRIPMATE</h1>
        <Link href="/">
          <span className="text-sm text-gray-400">둘러보기</span>
        </Link>
      </header>

      <main className="flex-1 flex flex-col">
        <h2 className="text-2xl font-extrabold">
          지금 트립메이트와
          <br />
          여행을 시작하세요!
        </h2>
        <div className="w-full max-w-xs py-4 text-left text-sm text-gray-700 space-y-1">
          <p>🧭 3분 여행 유형 테스트로 성향까지 매치</p>
          <p>✈️ 딱 맞는 동행과 일정부터 비용까지 공유해 보세요!</p>
        </div>
      </main>

      <footer className="mt-10 flex flex-col items-center space-y-4">
        <AuthForm />

        <div className="flex space-x-2 text-xs text-gray-400">
          <Link href="#" className="hover:text-gray-600">
            문의하기
          </Link>
        </div>
      </footer>
    </div>
  );
}
