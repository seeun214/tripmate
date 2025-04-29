"use client";
import { signIn as nextSignIn, signOut as nextSignOut } from "next-auth/react";

export const authService = {
  signIn: () => nextSignIn("kakao"),
  signOut: () => nextSignOut(),
};
