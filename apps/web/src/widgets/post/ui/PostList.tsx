"use client";

import React, { useEffect, useState } from "react";
import { getPostList } from "@/entities/post";
import Link from "next/link";
import { BottomSheet } from "@/widgets/bottomSheet/ui/BottomSheet";
import { Tabs } from "@/widgets/tabs/ui/Tabs";
import { ChevronDown } from "lucide-react";

const CATEGORY_OPTIONS = ["전체", "동행모집", "자유수다"];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "동행모집":
      return <>👬</>;
    case "자유수다":
      return <>💬</>;
  }
};

interface RegionBottomSheetProps {
  open: boolean;
  onSelect: (region: string) => void;
  onClose: () => void;
}

export const RegionBottomSheet = ({
  open,
  onSelect,
  onClose,
}: RegionBottomSheetProps) => {
  const REGION_OPTIONS = ["전체", "대한민국", "일본", "태국"];

  return (
    <BottomSheet open={open} onClose={onClose}>
      <div className="space-y-4 mt-4">
        <div className="space-y-2">
          {REGION_OPTIONS.map((region, index) => (
            <button
              key={index}
              className="w-full p-3 text-left"
              onClick={() => {
                onSelect(region);
                onClose();
              }}
            >
              {region}
            </button>
          ))}
        </div>
      </div>
    </BottomSheet>
  );
};

export const PostList = () => {
  const [postList, setPostList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedRegion, setSelectedRegion] = useState("전체");
  const [regionSheetOpen, setRegionSheetOpen] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPostList();
      setPostList(posts);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const filteredPosts = postList.filter((post) => {
    const matchCategory =
      selectedCategory === "전체" || post.category === selectedCategory;
    const matchRegion =
      selectedRegion === "전체" || post.region === selectedRegion;
    return matchCategory && matchRegion;
  });

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="inline-block">
        {selectedRegion === "전체" ? (
          <button
            onClick={() => setRegionSheetOpen(true)}
            className="my-5 text-sm font-bold border border-gray-200 rounded-lg px-2 py-3 w-40 text-left"
          >
            <span className="mr-2 text-lg">🌏</span> 나라 선택
          </button>
        ) : (
          <div
            onClick={() => setRegionSheetOpen(true)}
            className="  my-5 flex items-center bg-black text-white text-sm font-bold px-4 py-2 rounded-full"
          >
            {selectedRegion}
            <ChevronDown className="ml-2 text-white" size={16} />
          </div>
        )}
      </div>

      <Tabs
        options={CATEGORY_OPTIONS}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <ul className="divide-y divide-gray-200">
        {filteredPosts.map((post) => {
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

      <RegionBottomSheet
        open={regionSheetOpen}
        onClose={() => setRegionSheetOpen(false)}
        onSelect={setSelectedRegion}
      />
    </div>
  );
};
