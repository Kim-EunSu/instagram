"use client";

import { DetailUser } from "@/model/user";
import useSWR from "swr";

export default function FollowingBar() {
  const { data, error, isLoading: loading } = useSWR<DetailUser>("/api/me");

  const users = data?.following;

  return <section>{loading ? <></> : <></>}</section>;
}
