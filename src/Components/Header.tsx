import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="px-5 py-3 border-b-2 border-gray-100 flex justify-between items-center">
      <Link href={"/"}>Dev-Story</Link>

      <nav className="space-x-5">
        <Link href={"/about"}>About</Link>
        <Link href={"/story"}>Story</Link>
        <Link href={"/login"}>Login</Link>
        <Link href={"/register"}>Register</Link>
        <Link href={"/tutorials"}>Tutorials</Link>
      </nav>
    </div>
  );
};

export default Header;
