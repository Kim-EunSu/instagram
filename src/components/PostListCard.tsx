import React from "react";
import Avatar from "./Avatar";
import Image from "next/image";
import { SimplePost } from "@/model/post";
import CommentForm from "./CommentForm";
import ActionBar from "./ActionBar";

type Props = {
  post: SimplePost;
  priority?: boolean;
};

// SimplePost =>
// id: string;
// username: string;
// userImage: string;
// image: string;
// text: string;
// createdAt: string;
// likes: string[];
// comments: Comment[];

//priority를 지정 안해주면 기본적으로 false
function PostListCard({ post, priority = false }: Props) {
  //구조분해할당
  const { username, userImage, image, text, createdAt, likes } = post;
  return (
    <article className="rounded-lg shadow-md border border-gray-300">
      <div className="flex items-center p-2">
        <Avatar size="medium" image={userImage} highlight />
        <span className="text-gray-900 font-bold ml-2">{username}</span>
      </div>
      <Image
        className="w-full object-cover aspect-square	"
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
        priority={priority}
      />
      <ActionBar
        likes={likes}
        username={username}
        createdAt={createdAt}
        text={text}
      />
      <CommentForm />
    </article>
  );
}

export default PostListCard;
