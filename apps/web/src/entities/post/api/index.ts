import { Post } from "../model/type";

const mockPosts: Post[] = [
  {
    id: 1,
    category: "동행모집",
    title: "몽골 고비사막 동행자 구합니다",
    content:
      "6월 3일~8일 고비사막 + 테를지 투어 예정입니다. 새벽 도착 후 바로 투어 시작하며, 낙타 체험과 승마도 포함되어 있습니다. 함께 하실 분 모집합니다!",
    user: {
      nickname: "여행자민수",
      ageGroup: "30대",
      gender: "남성",
    },
    date: "2025-04-16",
    region: "몽골",
    imageUrl: "https://source.unsplash.com/400x200/?gobi,desert",
  },
  {
    id: 4,
    category: "동행모집",
    title: "일본 오사카 벚꽃 시즌 동행 구합니다",
    content:
      "4월 중순 오사카 벚꽃 시즌에 맞춰 여행 갈 예정입니다. 인스타 감성 사진도 찍고 싶어요!",
    user: {
      nickname: "벚꽃러버",
      ageGroup: "20대",
      gender: "여성",
    },
    date: "2025-04-10",
    region: "일본",
    imageUrl: "https://source.unsplash.com/400x200/?osaka,sakura",
  },
  {
    id: 6,
    category: "자유수다",
    title: "스위스 여행 준비 팁!",
    content:
      "스위스는 물가가 정말 비쌉니다. 미리 도시락 준비하고 패스권 꼭 챙기세요.",
    user: {
      nickname: "여행꿀팁러",
      ageGroup: "30대",
      gender: "여성",
    },
    date: "2025-04-09T10:00:00Z",
    region: "스위스",
    imageUrl: "https://source.unsplash.com/400x200/?switzerland,alps",
  },
  {
    id: 8,
    category: "자유수다",
    title: "베트남 다낭 여행 코스 추천",
    content: "바나힐, 미케비치, 한시장까지! 베트남은 물가도 저렴하고 최고예요.",
    user: {
      nickname: "동남아매니아",
      ageGroup: "30대",
      gender: "여성",
    },
    date: "2025-04-05T14:30:00Z",
    region: "베트남",
    imageUrl: "https://source.unsplash.com/400x200/?danang,vietnam",
  },
  {
    id: 9,
    category: "자유수다",
    title: "캐나다 로키 여행 대자연에 감동",
    content:
      "밴프 국립공원에서 자연에 힐링하고 왔어요. 록키산맥은 진짜 경이롭네요.",
    user: {
      nickname: "산좋아해요",
      ageGroup: "50대",
      gender: "남성",
    },
    date: "2025-04-03T08:00:00Z",
    region: "캐나다",
    imageUrl: "https://source.unsplash.com/400x200/?rocky,banff",
  },
];

export const getPostList = async () => {
  return new Promise<typeof mockPosts>((resolve) => {
    setTimeout(() => resolve(mockPosts), 300);
  });
};

export const getPostById = async (postId: number): Promise<Post | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const post = mockPosts.find((post) => post.id === postId);
      resolve(post || null);
    }, 300);
  });
};
