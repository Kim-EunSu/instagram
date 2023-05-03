"use client";

import useSWR from "swr";
import { SimplePost } from "@/model/post";
import GridLoader from "react-spinners/GridLoader";
import PostListCard from "./PostListCard";

export default function PostList() {
  const { data: posts, isLoading: loading } = useSWR<SimplePost[]>("api/posts");

  return (
    <section>
      {loading && (
        <div>
          <GridLoader color="red" />
        </div>
      )}

      {posts && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <PostListCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
