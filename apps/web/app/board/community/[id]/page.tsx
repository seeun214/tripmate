import CommunityDetailPage from "@/pages/board/ui/CommunityDetailPage";

type Params = Promise<{ id: string }>;

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;
  return <CommunityDetailPage postId={id} />;
}
