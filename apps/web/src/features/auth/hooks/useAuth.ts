"use client";
import { useSession } from "next-auth/react";
import type { MySession } from "../model/session";

export function useAuth() {
  const { data, status } = useSession();
  return {
    session: data as MySession | null,
    loading: status === "loading",
  };
}
