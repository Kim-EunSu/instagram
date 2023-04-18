import { User } from "@/model/user";
import Avatar from "./Avatar";

type Props = {
  user: User;
};

export default function SideBar({ user: { name, username, image } }: Props) {
  return (
    <>
      <div className="flex items-center ">
        {image && <Avatar image={image} />}
        <div className="ml-4">
          <p className="text-lg">{username}</p>
          <p className="font-bold text-neutral-500 leading-4">{name}</p>
        </div>
      </div>
      <p className="text-sm text-neutral-500 mt-8">
        About • Help • API • Jobs • Privacy • Language
      </p>
      <p className="font-bold text-neutral-500 mt-8">@Copyright Instagram</p>
    </>
  );
}
