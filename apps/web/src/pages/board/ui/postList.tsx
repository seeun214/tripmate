import { FooterNav } from "@/widgets/footerNav";
import { Header } from "@/widgets/header";
import React from "react";

export const PostList = () => {
  return (
    <div className="container">
      <div className="p-4">
        <Header />
        <h2 className="text-3xl font-bold mb-6">게시판</h2>
      </div>

      <FooterNav />
    </div>
  );
};
