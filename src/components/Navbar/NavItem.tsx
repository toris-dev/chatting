"use client";

import Link from "next/link";
import { FC } from "react";

type NavItemProps = {
  mobile?: boolean;
};

const NavItem: FC<NavItemProps> = ({ mobile }) => {
  return (
    <ul
      className={`text-md justify-center flex w-full gap-4 ${
        mobile && "flex-col h-full"
      } items-center`}
    >
      <li className={`py-2 text-center border-b-4 cursor-pointer`}>
        <Link href={"/admin"}>Admin</Link>
      </li>
      <li className={`py-2 text-center border-b-4 cursor-pointer`}>
        <Link href={"/user"}>User</Link>
      </li>
      <li className={`py-2 text-center border-b-4 cursor-pointer`}>
        <button>Signin</button>
      </li>
      <li className={`py-2 text-center border-b-4 cursor-pointer`}>
        <button>Signup</button>
      </li>
    </ul>
  );
};

export default NavItem;