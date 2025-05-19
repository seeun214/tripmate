"use client";

import Script from "next/script";

export const useKakaoAuth = () => {
  // 1) Kakao SDK 스크립트 태그
  const ScriptTag = () => {
    return (
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js"
        integrity="sha384-…"
        crossOrigin="anonymous"
        onLoad={() => {
          const { Kakao } = window as any;
          if (Kakao && !Kakao.isInitialized()) {
            Kakao.init(process.env.NEXT_PUBLIC_JAVASCRIPT_KEY);
          }
        }}
      />
    );
  };

  // 2) 로그인 호출 함수
  const initiateKakaoAuth = () => {
    const { Kakao } = window as any;
    if (!Kakao?.Auth) {
      console.error("Kakao SDK 미로드");
      return;
    }
    Kakao.Auth.authorize({
      redirectUri: `${window.location.origin}/api/auth/callback`,
    });
  };

  return { ScriptTag, initiateKakaoAuth };
};
