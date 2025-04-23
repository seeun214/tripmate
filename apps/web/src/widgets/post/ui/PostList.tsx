"use client";
import { getPostList } from "@/entities/post";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "동행모집":
      return <>👬</>;
    case "자유수다":
      return <>💬</>;
  }
};

export const PostList = () => {
  const [postList, setPostList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPostList();
      setPostList(posts);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="divide-y divide-gray-200">
      {postList.map((post) => {
        const detailPageUrl =
          post.category === "동행모집"
            ? `/board/accompany/${post.id}`
            : `/board/community/${post.id}`;

        return (
          <li key={post.id} className="px-3 py-4">
            <Link href={detailPageUrl}>
              <span className="inline-block mb-1 rounded-full bg-gray-100 px-2 py-1 text-xs font-bold shadow-sm">
                {getCategoryIcon(post.category)} {post.category}
              </span>

              <div className="flex justify-between items-start">
                <div className="flex-1 pr-2">
                  <h2 className="text-md font-semibold text-gray-800">
                    {post.title}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">{post.content}</p>
                </div>

                <div className="text-right h-16 w-16 border-[1px] border-gray-200"></div>
              </div>

              <div className="mt-4 flex justify-between text-xs text-gray-400">
                <div>
                  <div>
                    {post.user.nickname} ・ {post.user.ageGroup} ・{" "}
                    {post.user.gender}
                  </div>
                  <div>{post.date}</div>
                </div>

                <div className="mt-2 text-right text-sm text-gray-500">
                  {post.region}
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
