import { showCreatePost } from "@/features/createPost/lib/showCreatePost";
import { Home, Users, PlusCircle, Compass, MessageSquare } from "lucide-react";

export const FooterNav = () => {
  return (
    <footer className="fixed bottom-0 z-50 w-full border-t border-neutral-200 bg-white">
      <nav className="flex h-14 items-center justify-around text-xs text-neutral-400 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100">
        <a
          href="#"
          className="flex flex-col items-center justify-center gap-1 text-neutral-400 hover:text-neutral-900"
        >
          <Home size={20} />
          <span>커뮤니티</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-center gap-1 text-neutral-400 hover:text-neutral-900"
        >
          <Compass size={20} />
          <span>어드벤처</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-center gap-1 text-neutral-400 hover:text-neutral-900"
        >
          <PlusCircle
            size={32}
            className="self-center"
            onClick={showCreatePost}
          />
        </a>
        <a
          href="/member/login"
          className="flex flex-col items-center justify-center gap-1 text-neutral-400 hover:text-neutral-900"
        >
          <Users size={20} />
          <span>내 모험</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-center gap-1 text-neutral-400 hover:text-neutral-900"
        >
          <MessageSquare size={20} />
          <span>채팅</span>
        </a>
      </nav>
    </footer>
  );
};
