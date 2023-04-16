import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import { getProviders } from "next-auth/react";
import Signin from "@/components/Signin";

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SignPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  // data가 null이라면 기본값으로 {} 텅텅 빈 Record를 써준다고 명시
  const providers = (await getProviders()) ?? {};

  // providers를 porps를 전달해줘야함
  // providers가 타입에러가 발생!
  // => getProviders가 null을 반환할수도 있기 때문에
  return (
    <section className="flex justify-center mt-[30%]">
      <Signin providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
}
