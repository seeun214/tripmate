import AccompanyDetailPage from "@/pages/ui/AccompanyDetailPage";

type Params = Promise<{ id: string }>;

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;
  return <AccompanyDetailPage postId={id} />;
}
