import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getUserByUsername } from "@/service/user";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  // 로그인 사용자가 없으면 401error가 뜨게
  if (!user) {
    return new Response("Authentication  Error", { status: 401 });
  }

  //로그인한 정보를 sanity에서 가져옴
  return getUserByUsername(user.username).then((data) =>
    NextResponse.json(data)
  );
}
