"use client";

import { User } from "@prisma/client";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { FC } from "react";

type NavItemProps = {
  currentUser?: User | null;
  mobile?: boolean;
};

const NavItem: FC<NavItemProps> = ({ currentUser, mobile }) => {
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
      {currentUser ? (
        <li className={`py-2 text-center border-b-4 cursor-pointer`}>
          <button onClick={() => signOut()}>Signout</button>
        </li>
      ) : (
        <li className={`py-2 text-center border-b-4 cursor-pointer`}>
          <button onClick={() => signIn()}>Signin</button>
        </li>
      )}
    </ul>
  );
};

export default NavItem;
