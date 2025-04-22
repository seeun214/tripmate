"use client";
import { FooterNav } from "@/widgets/footerNav";
import { HomeHeader } from "@/widgets/header/ui/homeHeader";
import { PostList } from "@/widgets/post/ui/PostList";
import React from "react";

export default function PostListPage() {
  return (
    <div className="container">
      <div className="p-4 pb-20">
        <HomeHeader />
        <PostList />
      </div>
      <FooterNav />
    </div>
  );
}
