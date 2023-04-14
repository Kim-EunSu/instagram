"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import { BsPlusSquareFill } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { RiSearchFill } from "react-icons/ri";
import ColorButton from "./ui/ColorButton";

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
  return (
    <div className="flex justify-between items-center p-4 border-b-2">
      <Link href="/" className="text-3xl font-bold">
        Instagram
      </Link>
      <nav className="flex gap-4 items-center">
        <ul className="flex items-center">
          {menu.map((item) => (
            <li key={item.href} className="text-3xl mr-4">
              <Link href={item.href}>
                {item.href === pathname ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
          <ColorButton text="Sign in" onClick={() => {}} />
        </ul>
      </nav>
    </div>
  );
}
