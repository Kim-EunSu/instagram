// src -> app -> components -> Navbar.tsx

"use client";

import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import { BsPlusSquareFill } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { RiSearchFill } from "react-icons/ri";
import ColorButton from "./ui/ColorButton";
import Avatar from "./Avatar";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const menu = [
  {
    href: "/",
    icon: <AiOutlineHome />,
    clickedIcon: <AiFillHome />,
  },
  {
    href: "/search",
    icon: <BsPlusSquare />,
    clickedIcon: <BsPlusSquareFill />,
  },
  {
    href: "/new",
    icon: <RiSearchLine />,
    clickedIcon: <RiSearchFill />,
  },
];

export default function Header() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="flex justify-between items-center px-6">
      <Link href="/">
        <h1 className="text-3xl font-bold">Instantgram</h1>
      </Link>
      <nav>
        <ul className="flex gap-4 items-center p-4">
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {pathname === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
          {user && (
            <li>
              <Link href={`/user/${user.username}`}>
                <Avatar image={user.image} />
              </Link>
            </li>
          )}
          <li>
            {session ? (
              <ColorButton text="Sign out" onClick={() => signOut()} />
            ) : (
              <ColorButton text="Sign in" onClick={() => signIn()} />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
