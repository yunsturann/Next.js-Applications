"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-black bg-opacity-90">
      <div className=" container flex flex-wrap justify-between items-center py-6 text-white">
        {/*Logo and Brand */}
        <Link href={"/"}>
          <h1
            className="text-2xl lg:text-3xl font-bold sm:tracking-widest cursor-pointer text-transparent bg-gradient-to-r bg-clip-text from-rose-500 to-blue-200 "
            title="homepage"
          >
            TURANFLIX
          </h1>
        </Link>

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

        {/*Mobile Nav */}

        <nav className="block sm:hidden ">
          <button
            type="button"
            className="hover:text-rose-500 transition duration-300"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            {showDropdown ? <IoMdClose size={32} /> : <IoMdMenu size={32} />}
          </button>
          {/*Dropdown */}

          {showDropdown && (
            <div className="absolute top-full mt-0.5 w-1/2 right-4 bg-gray-800 bg-opacity-95 text-white rounded-3xl flex flex-col gap-4 items-end p-4 ">
              <Link
                href={"/"}
                className="hover:bg-white rounded-lg w-full text-center py-2 text-lg font-semibold tracking-wide cursor-pointer hover:text-black transition duration-300"
              >
                Movies
              </Link>
              <Link
                href={"/"}
                className="hover:bg-white rounded-lg w-full text-center py-2 text-lg font-semibold tracking-wide cursor-pointer hover:text-black transition duration-300"
              >
                Categories
              </Link>
              <Link
                href={"/"}
                className="hover:bg-white rounded-lg w-full text-center py-2 text-lg font-semibold tracking-wide cursor-pointer hover:text-black transition duration-300"
              >
                Login
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
