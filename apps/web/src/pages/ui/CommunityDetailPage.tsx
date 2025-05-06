"use client";
import { useEffect, useState } from "react";
import { Post } from "@/entities/post/model/type";
import { timeAgo } from "@/shared/utils/timAgo";
import { getPostById } from "@/entities/post/api";
import { PostHeader } from "@/widgets/header/ui/PostHeader";

interface CommunityDetailPageProps {
  postId: string;
}

export default function CommunityDetailPage({
  postId,
}: CommunityDetailPageProps) {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      const post = await getPostById(Number(postId));
      if (post) {
        setPost(post);
      }
    };

    fetchPostDetails();
  }, [postId]);

  if (!post) return <div>loading...</div>;

  return (
    <div className="px-5">
      <PostHeader />
      <div className="mt-6 pt-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
          <div>
            <div className="text-gray-500">{post.user.nickname}</div>
            <div className="text-gray-500">{timeAgo(post.date)}</div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg text-gray-700">{post.content}</p>
        </div>
      </div>

      {/* 댓글 섹션 */}
      <div className="mt-6 pt-4">
        <h3 className="text-l font-semibold text-gray-800">댓글</h3>
      </div>
    </div>
  );
}
