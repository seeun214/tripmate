"use client";
import { CreatePostBottomSheet } from "@/features/createPost/ui/CreatePostBottomSheet";
import { PostList } from "@/features/postList/ui/PostList";
import { FooterNav } from "@/widgets/footerNav/ui/FooterNav";
import { HomeHeader } from "@/widgets/header/ui/HomeHeader";

export default function PostListPage() {
  return (
    <div className="container">
      <div className="p-4 pb-20">
        <HomeHeader />
        <PostList />
        <CreatePostBottomSheet />
      </div>
      <FooterNav />
    </div>
  );
}
