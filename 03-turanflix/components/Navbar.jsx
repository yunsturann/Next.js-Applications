import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-black bg-opacity-90">
      <div className=" container flex justify-between items-center py-4 md:py-6 text-white">
        <h1 className="text-3xl font-bold tracking-widest cursor-pointer">
          <Link href={"/"}>TURANFLIX</Link>
        </h1>

        {/*Desktop Nav */}
        <nav className="hidden sm:flex item-center gap-6 sm:gap-12">
          <Link
            href={"/"}
            className="text-lg font-semibold tracking-wide cursor-pointer hover:text-red-400 transition duration-300"
          >
            Movies
          </Link>
          <Link
            href={"/"}
            className="text-lg font-semibold tracking-wide cursor-pointer hover:text-red-400 transition duration-300"
          >
            Categories
          </Link>
          <Link
            href={"/"}
            className="text-lg font-semibold tracking-wide cursor-pointer hover:text-red-400 transition duration-300"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
