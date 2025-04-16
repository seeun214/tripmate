import { FooterNav } from "@/widgets/footerNav";
import { Header } from "@/widgets/header";
import { PostList } from "@/widgets/post/ui/PostList";
import React from "react";

export const Board = () => {
  return (
    <div className="container">
      <div className="p-4 pb-20">
        <Header />
        <PostList />
      </div>

      <FooterNav />
    </div>
  );
};
