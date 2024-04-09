"use client";

import { User } from "@prisma/client";
import Link from "next/link";
import { FC, useState } from "react";
import Logo from "../Logo";
import NavItem from "./NavItem";

type NavBarProps = {
  currentUser?: User | null;
};

const Navbar: FC<NavBarProps> = ({ currentUser }) => {
  const [menu, setMenu] = useState(false);
  console.log(currentUser);
  const handleMenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <nav className="relative z-10 w-full text-white bg-black">
      <div className="flex items-center justify-between mx-5 sm:mx-10 lg:mx-20">
        <div className="flex items-center text-2xl h-14">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="text-2xl sm:hidden">
          {menu === false ? (
            <button onClick={handleMenu}>+</button>
          ) : (
            <button onClick={handleMenu}>-</button>
          )}
        </div>
        <div className="hidden sm:block">
          <NavItem currentUser={currentUser} />
        </div>
      </div>

      <div className="block sm:hidden">
        {menu === false ? null : <NavItem mobile currentUser={currentUser} />}
      </div>
    </nav>
  );
};

export default Navbar;
