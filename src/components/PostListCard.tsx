import React from "react";
import Avatar from "./Avatar";
import Image from "next/image";
import { SimplePost } from "@/model/post";
import HeartIcon from "./ui/icons/HeartIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import SmileIcon from "./ui/icons/SmileIcon";
import { parseDate } from "@/util/date";

type Props = {
  post: SimplePost;
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

function PostListCard({ post }: Props) {
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
      />
      <div className="flex justify-between my-2 px-4">
        <HeartIcon />
        <BookmarkIcon />
      </div>
      <div className="px-4 py-1">
        <p className="text-sm font-bold mb-2">{`${likes?.length ?? 0} ${
          likes?.length > 1 ? "likes" : "like"
        }`}</p>
        <p>
          <span className="font-bold mr-1">{username}</span>
          {text}
        </p>
        <p className="text-xs text-neutral-500 uppercase my-2">
          {parseDate(createdAt)}
        </p>
        <form className="flex items-center border-t border-neutral-300 ">
          <SmileIcon />
          <input
            className="w-full ml-2 border-none outline-none p-3"
            type="text"
            placeholder="Add a comment..."
          />
          <button className="font-bold text-sky-500 ml-2">Post</button>
        </form>
      </div>
    </article>
  );
}

export default PostListCard;
