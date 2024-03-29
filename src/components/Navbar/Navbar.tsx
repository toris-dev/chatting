"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "../Logo";
import NavItem from "./NavItem";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

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
          <NavItem />
        </div>
      </div>

      <div className="block sm:hidden">
        {menu === false ? null : <NavItem mobile />}
      </div>
    </nav>
  );
};

export default Navbar;
