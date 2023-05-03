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
    <>
      <div>
        <Avatar image={userImage} highlight />
        <span>{username}</span>
      </div>
      <Image
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
      />
      <div>
        <HeartIcon />
        <BookmarkIcon />
      </div>
      <div>
        <p>{`${likes?.length ?? 0} ${likes?.length > 1 ? "likes" : "like"}`}</p>
        <p>
          <span>{username}</span>
          {text}
        </p>
        <p>{parseDate(createdAt)}</p>
        <form>
          <SmileIcon />
          <input type="text" placeholder="Add a comment..." />
          <button>Post</button>
        </form>
      </div>
    </>
  );
}

export default PostListCard;
