import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json("아 이거 맞나");
}
