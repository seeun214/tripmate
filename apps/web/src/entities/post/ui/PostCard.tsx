import React from "react";
import Link from "next/link";
import { Post } from "@/entities/post/model/type";
import { CategoryOption } from "@/features/postList/ui/PostList";

export interface PostCardProps {
  post: Post;
  category: CategoryOption;
  detailUrl: string;
}

export const PostCard = ({ post, category, detailUrl }: PostCardProps) => (
  <li className="px-3 py-4 hover:bg-gray-50">
    <Link href={detailUrl} className="block">
      <span className="inline-flex items-center gap-1 mb-1 rounded-full bg-gray-100 px-2 py-1 text-xs font-bold shadow-sm">
        {category.icon && <span>{category.icon}</span>}
        <span>{category.label}</span>
      </span>

      <div className="flex justify-between items-start mt-1">
        <div className="flex-1 pr-2">
          <h2 className="text-md font-semibold text-gray-800">{post.title}</h2>
          <p className="mt-1 text-sm text-gray-500">{post.content}</p>
        </div>
        <div className="text-right h-16 w-16 border-[1px] border-gray-200"></div>
      </div>

      <div className="mt-4 flex justify-between text-xs text-gray-400">
        <div>
          {post.user.nickname} ・ {post.user.ageGroup} ・ {post.user.gender}
          <div>{post.date}</div>
        </div>
        <div className="text-right text-sm text-gray-500">{post.region}</div>
      </div>
    </Link>
  </li>
);
