"use client";
import { CreatePostBottomSheet } from "@/features/createPost/ui/CreatePostBottomSheet";
import { FooterNav } from "@/widgets/footerNav";
import { HomeHeader } from "@/widgets/header/ui/HomeHeader";
import { PostList } from "@/widgets/post/ui/PostList";

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
