"use client";

import { useKakaoAuth } from "../model/useKakaoAuth";

export const AuthForm: React.FC = () => {
  const { ScriptTag, initiateKakaoAuth } = useKakaoAuth();

  return (
    <>
      <ScriptTag />
      <button
        type="button"
        className="w-full max-w-xs py-4 bg-[#fee500] hover:bg-[#fada0a] text-gray-900 font-semibold rounded-full shadow-md flex items-center justify-center gap-2 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
        onClick={initiateKakaoAuth}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="20"
          viewBox="0 0 20 18"
          fill="currentColor"
          className="flex-shrink-0"
        >
          <path d="M10 .75C4.753.75.5 4.337.5 8.784c0 2.54 1.678 4.79 4.242 6.148-.17.58-.613 2.09-.703 2.425 0 0-.013.115.06.158.07.043.158.017.158.017.208-.03 2.39-1.565 3.33-2.24.782.113 1.59.174 2.413.174 5.246 0 9.499-3.587 9.499-8.034C19.999 4.337 15.746.75 10 .75Z" />
        </svg>
        <span>카카오톡으로 로그인</span>
      </button>
    </>
  );
};
