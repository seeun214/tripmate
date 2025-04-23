import { useCreatePostStore } from "../model/createPostStore";

export const showCreatePost = () => {
  useCreatePostStore.getState().open();
};
