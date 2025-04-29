// app/auth/page.tsx
"use client";

import React from "react";
import { AuthForm } from "@/features/auth/ui/AuthForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-8 w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          TripMate
        </h2>
        <p className="text-center text-gray-500 mb-6">
          소셜 계정으로 빠르게 로그인하세요
        </p>
        <AuthForm />
      </div>
    </div>
  );
}
