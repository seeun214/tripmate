import type { Post } from "@/entities/post/model/type";

export interface PostFilterOptions {
  categoryLabel?: string;
  regionLabel?: string;
}

export function filterPosts(
  posts: Post[],
  { categoryLabel = "전체", regionLabel = "전체" }: PostFilterOptions
): Post[] {
  return posts.filter((post) => {
    if (categoryLabel !== "전체" && post.category !== categoryLabel) {
      return false;
    }
    if (regionLabel !== "전체" && post.region !== regionLabel) {
      return false;
    }
    return true;
  });
}
