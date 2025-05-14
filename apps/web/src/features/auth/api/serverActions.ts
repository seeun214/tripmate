"use server";

import { auth, signIn, signOut, update } from "app/auth";

export const signInWithCredentials = async (formData: FormData) => {
  await signIn("credentials", {
    displayName: formData.get("displayName") || "",
    email: formData.get("email") || "",
    password: formData.get("password") || "",
    // redirectTo: '/'
  });
};
export const signInWithKakao = async () => {
  await signIn("kakao", {
    /* 옵션 */
  });
};
export const signInWithGoogle = async () => {
  await signIn("google", {
    /* 옵션 */
  });
};

export const signOutWithForm = async (formData: FormData) => {
  await signOut();
};
export { auth as getSession, update as updateSession };
