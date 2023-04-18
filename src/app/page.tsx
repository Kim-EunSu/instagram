import FollowingBar from "@/components/FollowingBar";
import PostList from "@/components/PostList";
import SideBar from "@/components/SideBar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <>
      {session ? (
        <>
          <div className="flex justify-between">
            <section>
              <FollowingBar />
              <PostList />
            </section>
            <section>
              <SideBar user={user} />
            </section>
          </div>
        </>
      ) : null}
    </>
  );
}
