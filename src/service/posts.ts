import { client } from "./sanity";
import { urlFor } from "../service/sanity";
import { SimplePost } from "@/model/post";

// post.author.username -> post.username 이렇게 쓰고자 아래와 같이
const simplePostProjection = `
    ...,
    "username" : author->username,
    "userImage" : author->image,
    "image" : photo,
    "likes" : likes[]->username,
    "text" : comments[0].comment,
    "comment" : count(comments),
    "id":_id,
    "createdAt":_createdAt
`;
export async function getFollowingPostsOf(username: string) {
  return client
    .fetch(
      `*[_type =="post" && author->username == "${username}"
        || author._ref in *[_type == "user" && username == "${username}"].following[]._ref]
        | order(_createdAt desc){
        ${simplePostProjection}
      }`
    )
    .then((posts) =>
      posts.map((post: SimplePost) => ({ ...post, image: urlFor(post.image) }))
    );
}
