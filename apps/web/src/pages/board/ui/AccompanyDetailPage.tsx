"use client";
import { useEffect, useState } from "react";
import { Post } from "@/entities/post/model/type";
import { getPostById } from "@/entities/post/api";

interface AccompanyDetailPageProps {
  postId: string;
}

export const AccompanyDetailPage = ({ postId }: AccompanyDetailPageProps) => {
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
    <div className="p-6">
      <h1 className="text-xl font-semibold text-gray-900">{post.title}</h1>
      <p className="mt-2 text-sm text-gray-500">{post.category}</p>
      <div className="mt-4">
        <p className="text-lg text-gray-700">{post.content}</p>
      </div>

      <div className="mt-6">
        <div>
          <strong className="text-gray-700">User:</strong>{" "}
          <span className="text-gray-500">{post.user.nickname}</span>
        </div>
        <div>
          <strong className="text-gray-700">Age Group:</strong>{" "}
          <span className="text-gray-500">{post.user.ageGroup}</span>
        </div>
        <div>
          <strong className="text-gray-700">Gender:</strong>{" "}
          <span className="text-gray-500">{post.user.gender}</span>
        </div>
        <div>
          <strong className="text-gray-700">Region:</strong>{" "}
          <span className="text-gray-500">{post.region}</span>
        </div>
        <div>
          <strong className="text-gray-700">Date:</strong>{" "}
          <span className="text-gray-500">{post.date}</span>
        </div>
      </div>
    </div>
  );
};
