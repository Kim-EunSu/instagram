//

import { User } from "@/model/user";
import Avatar from "./Avatar";

type Props = {
  user: User;
};

export default function SideBar({
  user: { name, username, email, image },
}: Props) {
  return (
    <>
      {image && <Avatar image={image} />}
      <p>{username}</p>
      <p>{name}</p>
    </>
  );
}
