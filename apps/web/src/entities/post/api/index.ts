import { Post } from "../model/type";

const mockPosts: Post[] = [
  {
    id: 1,
    category: "동행 모집",
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
    id: 2,
    category: "여행 후기",
    title: "방콕에서의 즐거운 여행기",
    content:
      "4월 21일부터 26일까지 방콕 여행 다녀왔습니다. 유명 관광지와 맛집을 탐방하며 힐링하는 시간을 보냈습니다. 송크란 축제도 즐겼어요!",
    user: {
      nickname: "여행자수지",
      ageGroup: "20대",
      gender: "여성",
    },
    date: "2025-04-15",
    region: "태국",
    imageUrl: "https://source.unsplash.com/400x200/?bangkok,thailand",
  },
  {
    id: 3,
    category: "여행 정보",
    title: "미국 항공권 정보 공유",
    content:
      "미국행 항공권 정보를 공유합니다. 직항은 대한항공, 아시아나항공 등에서 운항 중이며, 경유 항공권은 약 80만 원부터 시작합니다.",
    user: {
      nickname: "정보공유왕",
      ageGroup: "40대",
      gender: "남성",
    },
    date: "2025-04-14",
    region: "미국",
    imageUrl: "https://source.unsplash.com/400x200/?usa,flight",
  },
  {
    id: 4,
    category: "동행 모집",
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
    id: 5,
    category: "여행 후기",
    title: "제주도에서 힐링한 주말",
    content:
      "혼자 제주도에 다녀왔는데 너무 좋았어요. 애월 해안도로 드라이브 최고!",
    user: {
      nickname: "혼자여행",
      ageGroup: "30대",
      gender: "남성",
    },
    date: "2025-04-12",
    region: "제주",
    imageUrl: "https://source.unsplash.com/400x200/?jeju,island",
  },
  {
    id: 6,
    category: "여행 정보",
    title: "스위스 여행 준비 팁!",
    content:
      "스위스는 물가가 정말 비쌉니다. 미리 도시락 준비하고 패스권 꼭 챙기세요.",
    user: {
      nickname: "여행꿀팁러",
      ageGroup: "30대",
      gender: "여성",
    },
    date: "2025-04-09",
    region: "스위스",
    imageUrl: "https://source.unsplash.com/400x200/?switzerland,alps",
  },
  {
    id: 7,
    category: "여행 후기",
    title: "이탈리아 로마 5일 여행기",
    content:
      "콜로세움과 바티칸을 돌며 역사 여행 제대로 했어요. 젤라또도 매일 먹음ㅎㅎ",
    user: {
      nickname: "맛있는여행",
      ageGroup: "40대",
      gender: "여성",
    },
    date: "2025-04-08",
    region: "이탈리아",
    imageUrl: "https://source.unsplash.com/400x200/?rome,italy",
  },
  {
    id: 8,
    category: "동행 모집",
    title: "강릉 커피 거리 같이 갈 분!",
    content: "커피 좋아하시는 분~ 강릉 커피 축제 같이 다녀올 분 찾습니다 :)",
    user: {
      nickname: "커피중독",
      ageGroup: "20대",
      gender: "남성",
    },
    date: "2025-04-07",
    region: "강릉",
    imageUrl: "https://source.unsplash.com/400x200/?coffee,gangneung",
  },
  {
    id: 9,
    category: "여행 정보",
    title: "베트남 다낭 여행 코스 추천",
    content: "바나힐, 미케비치, 한시장까지! 베트남은 물가도 저렴하고 최고예요.",
    user: {
      nickname: "동남아매니아",
      ageGroup: "30대",
      gender: "여성",
    },
    date: "2025-04-05",
    region: "베트남",
    imageUrl: "https://source.unsplash.com/400x200/?danang,vietnam",
  },
  {
    id: 10,
    category: "여행 후기",
    title: "캐나다 로키 여행 대자연에 감동",
    content:
      "밴프 국립공원에서 자연에 힐링하고 왔어요. 록키산맥은 진짜 경이롭네요.",
    user: {
      nickname: "산좋아해요",
      ageGroup: "50대",
      gender: "남성",
    },
    date: "2025-04-03",
    region: "캐나다",
    imageUrl: "https://source.unsplash.com/400x200/?rocky,banff",
  },
];

export const getPostList = async () => {
  return new Promise<typeof mockPosts>((resolve) => {
    setTimeout(() => resolve(mockPosts), 300);
  });
};
