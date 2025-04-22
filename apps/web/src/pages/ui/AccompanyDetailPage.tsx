"use client";
import { useEffect, useState } from "react";
import { Post } from "@/entities/post/model/type";
import { getPostById } from "@/entities/post/api";
import { PostHeader } from "@/widgets/header";
import { Calendar, MapPin, Users, Globe } from "lucide-react";

interface AccompanyDetailPageProps {
  postId: string;
}

export default function AccompanyDetailPage({
  postId,
}: AccompanyDetailPageProps) {
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
    <div className="px-5 flex flex-col gap-7">
      <PostHeader />

      <div>
        <h1 className="text-xl font-semibold text-black">{post.title}</h1>
        <h1 className="text-xs text-gray-500">조회수 24 댓글 0</h1>
      </div>

      {/* 여행 일정 */}
      <div>
        <h3 className="text-sm font-semibold">여행 일정</h3>
        <div className="mt-3 bg-gray-100 p-4 rounded-lg shadow-s">
          <div className="flex items-center text-sm">
            <MapPin className="text-gray-600 mr-2 w-4 h-4" />
            <span>2025-09-22 - 2025-09-30 (9일)</span>
          </div>
          <div className="flex items-center text-sm mt-2">
            <Calendar className="text-gray-600 mr-2 w-4 h-4" />
            <span>서남아시아, 네팔, 포카라</span>
          </div>
        </div>
      </div>

      {/* 여행 소개 */}
      <div>
        <h3 className="text-sm font-semibold">여행 소개</h3>
        <p className="mt-2 text-sm">
          안녕하세요! 😊
          <br /> <br />
          저는 이번에 매력적인 네팔의 포카라를 여행할 계획을 가지고 있습니다.
          9월에 떠날 예정이며, 구체적인 날짜는 함께 조율할 수 있어요.
          <br /> <br />
          이번 여행에서는 포카라의 아름다운 자연을 만끽하며 트래킹도 즐기고
          싶습니다. 히말라야의 놀라운 경치와 함께 좋은 추억 남겨요.
          <br /> <br />
          혹시 네팔에 가고 싶으신 분이 계신가요? 함께 멋진 추억을 만들어갈 여행
          동반자를 찾고 있습니다. 관심이 있으신 분은 편하게 메시지 주세요! 많은
          이야기를 나누며 즐거운 여행을 함께 할 수 있기를 기대합니다.
          감사합니다! 🌄✈️
          <br /> <br />
          행복한 하루 되세요!
        </p>
      </div>

      {/* 동행 타입 - Badge */}
      <div className="text-sm">
        <h3 className="text-sm font-semibold">동행 타입</h3>
        <div className="mt-2 flex gap-4">
          {/* 전체 동행 뱃지 */}
          <div className="flex gap-2 items-center px-3 py-1 rounded-lg bg-gray-100 text-gray-800">
            <Users className="w-4 h-4 text-pink-500" /> <span>전체 동행</span>
          </div>

          {/* 투어 동행 뱃지 */}
          <div className="flex gap-2 items-center px-3 py-1 rounded-lg bg-gray-100 text-gray-800">
            <Globe className="w-4 h-4 text-teal-400" /> <span>투어 동행</span>
          </div>
        </div>
      </div>

      {/* 여행자 정보 */}
      <div>
        <h3 className="text-sm font-semibold">여행장</h3>
        <div className="text-sm mt-3 bg-gray-100 p-4 rounded-lg shadow-s">
          <div className="flex items-center space-x-4">
            <img
              src={"https://dummyimage.com/150x150/000/fff&text=No+Image"}
              alt="Traveler's Photo"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div className="space-y-2">
              <div className="flex items-center">
                <span>{post.user.nickname}</span>
              </div>
              <div className="flex items-center">
                <span className="text-black">{post.user.ageGroup}</span>
                <span className="text-black mx-2">|</span>
                <span className="text-black">{post.user.gender}</span>
                <span className="text-black mx-2">|</span>
                <span className="text-black">{post.region}</span>
              </div>
            </div>
          </div>

          <div className="my-3 border-t border-gray-60"></div>
          <div className="mt-2">안녕하세요</div>
        </div>
      </div>
      {/* 관련 동행 둘러보기 */}
    </div>
  );
}
