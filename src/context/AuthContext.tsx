"use client";

import { SessionProvider } from "next-auth/react";

type Props = {
  // children은 React컴포넌트에서 제공되는 Node
  children: React.ReactNode;
};

// AuthContext는 로그인한 사용자 정보를 가지고 있는 우산이라 칭함
// 이 AuthContext를 전반적으로 써야 하므로 layout.tsx에 적용시켜주기
export default function AuthContext({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
