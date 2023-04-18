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
      <p>{name}</p>
      <p>{username}</p>
      <p>About • Help • API • Jobs • Privacy • Language</p>
      <p>@Copyright Instagram</p>
    </>
  );
}
