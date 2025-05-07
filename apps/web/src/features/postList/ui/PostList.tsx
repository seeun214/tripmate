import { getPostList } from "@/entities/post/api";
import { Tabs } from "@/widgets/tabs/ui/Tabs";
import { useEffect, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { RegionBottomSheet } from "./RegionBottomSheet";
import { PostCard } from "@/widgets/postCard/ui/PostCard";
import { filterPosts } from "../model/filters";

export interface CategoryOption {
  key: string;
  label: string;
  icon: string | null;
}

const CATEGORY_OPTIONS: CategoryOption[] = [
  { key: "all", label: "전체", icon: null },
  { key: "accompany", label: "동행모집", icon: "👬" },
  { key: "chat", label: "자유수다", icon: "💬" },
];

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

  const filteredPosts = useMemo(
    () =>
      filterPosts(postList, {
        categoryLabel: selectedCategory,
        regionLabel: selectedRegion,
      }),
    [postList, selectedCategory, selectedRegion]
  );

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
        options={CATEGORY_OPTIONS.map((option) => option.label)}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <ul className="divide-y divide-gray-200">
        {filteredPosts.map((post) => {
          const detailPageUrl =
            post.category === "동행모집"
              ? `/board/accompany/${post.id}`
              : `/board/community/${post.id}`;

          const category = CATEGORY_OPTIONS.find(
            (option) => option.label === post.category
          )!;

          return (
            <PostCard
              key={post.id}
              post={post}
              category={category}
              detailUrl={detailPageUrl}
            />
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
