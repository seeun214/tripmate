import { AccompanyDetailPage } from "@/pages/board";

type Props = {
  params: {
    "post-id": string;
  };
};
export default function Page({ params }: Props) {
  return <AccompanyDetailPage postId={params["post-id"]} />;
}
