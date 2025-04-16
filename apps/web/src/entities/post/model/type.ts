export type Post = {
  id: number;
  category: string;
  title: string;
  content: string;
  user: {
    nickname: string;
    ageGroup: string;
    gender: string;
  };
  date: string;
  region: string;
  imageUrl: string;
};
