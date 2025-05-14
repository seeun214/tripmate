"use client";

import Link from "next/link";
import { Home, Users, PlusCircle, Compass, MessageSquare } from "lucide-react";
import { showCreatePost } from "@/features/createPost/lib/showCreatePost";

export const FooterNav = () => (
  <footer className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white">
    <nav className="flex h-14 items-center justify-around text-xs">
      <Link
        href="/"
        className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900"
        prefetch={false}
      >
        <Home size={20} />
        <span>커뮤니티</span>
      </Link>

      <Link
        href="/"
        className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900"
      >
        <Compass size={20} />
        <span>어드벤처</span>
      </Link>

      <button
        type="button"
        onClick={showCreatePost}
        aria-label="게시물 작성"
        className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900"
      >
        <PlusCircle size={32} />
      </button>

      <Link
        href="/my"
        className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900"
      >
        <Users size={20} />
        <span>내 모험</span>
      </Link>

      <Link
        href="/"
        className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900"
      >
        <MessageSquare size={20} />
        <span>채팅</span>
      </Link>
    </nav>
  </footer>
);
