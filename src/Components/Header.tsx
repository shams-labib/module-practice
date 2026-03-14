import Link from "next/link";
import React from "react";
import NavLink from "@/Components/NavLink";

const Header = () => {
  return (
    <div className="px-5 py-3 border-b-2 border-gray-100 flex justify-between items-center">
      <Link href={"/"}>Dev-Story</Link>

      <nav className="space-x-5">
        <NavLink href={"/about"}>About</NavLink>
        <NavLink href={"/story"}>Story</NavLink>
        <NavLink href={"/login"}>Login</NavLink>
        <NavLink href={"/register"}>Register</NavLink>
      </nav>
    </div>
  );
};

export default Header;
