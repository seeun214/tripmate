import { AccompanyDetailPage } from "@/app/board/(routes)";
type Params = Promise<{ id: string }>;

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;
  return <AccompanyDetailPage postId={id} />;
}
