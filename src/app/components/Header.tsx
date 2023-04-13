"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import { BsPlusSquareFill } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { RiSearchFill } from "react-icons/ri";

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
    <header className="flex justify-between items-center p-4 border-b-2">
      <Link href="/" className="text-5xl font-semibold">
        Instagram
      </Link>
      <nav className="flex text-4xl items-center mr-12">
        <ul className="flex">
          {menu.map((item) => (
            <li key={item.href} className="mr-4">
              <Link href={item.href}>
                {item.href === pathname ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
        </ul>

        {/* <Link href="/" className="me-4"></Link>
        <Link href="/search" className="me-4"></Link>
        <Link href="/new" className="me-4"></Link>
        <Link href="/sign">Sign in</Link> */}
      </nav>
    </header>
  );
}
