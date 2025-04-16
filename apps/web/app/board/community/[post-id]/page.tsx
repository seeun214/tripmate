import { AccompanyDetailPage, CommunityDetailPage } from "@/pages/board";

type Props = {
  params: {
    "post-id": string;
  };
};
export default function Page({ params }: Props) {
  return <CommunityDetailPage postId={params["post-id"]} />;
}
