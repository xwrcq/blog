import Link from "next/link";
import React from "react";
import SocialLinks from "./SocialLinks";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="mb-5">
      <nav className="flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4">
        <div className="hidden sm:block">
          <SocialLinks />
        </div>
        <div className="flex justify-between items-center gap-10">
          <Link href="/">Home</Link>
          <Link href="/">Trending</Link>
          <Link href="/">About</Link>
        </div>
        <div>
          <p>Sign In</p>
        </div>
      </nav>
      <div className="flex justify-center mt-5 mb-4 mx-10">
        <div className="md:mt-3 text-center">
          <h1 className="font-bold text-3xl md:text-5xl">BLOG OF FUTURE</h1>
          <p className=" text-sm mt-3">
            Blog dedicated towards AI and generation and job automatic
          </p>
        </div>
      </div>
      <hr className="border-1 mx-10" />
    </header>
  );
};

export default Navbar;
