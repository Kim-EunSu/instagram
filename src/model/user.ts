export type User = {
  name: string;
  username: string;
  email: string;
  image?: string;
};

//기존 User타입에서 Pick할거임
export type SimpleUser = Pick<User, "username" | "image">;

//기존 User타입의 타입을 추가로
export type DetailUser = User & {
  following: SimpleUser[];
  followers: SimpleUser[];
  bookmarks: string[];
};
