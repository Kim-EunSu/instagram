import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getUserByUsername } from "@/service/user";
import { getFollowingPostsOf } from "@/service/posts";

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  // 로그인 사용자가 없으면 401error가 뜨게
  if (!user) {
    return new Response("Authentication  Error", { status: 401 });
  }

  // post에 관련된 함수 호출
  return getFollowingPostsOf(user.username).then((data) =>
    NextResponse.json(data)
  );
}
