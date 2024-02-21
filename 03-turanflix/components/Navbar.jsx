"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const profileImg = session?.user?.image;

  const [showDropdown, setShowDropdown] = useState(false);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    getProviders().then((res) => {
      setProviders(res);
    });
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-gray-950 bg-opacity-95">
      <div className="container flex flex-wrap justify-between items-center py-6 text-white">
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
        <nav className="hidden sm:flex items-center gap-6 lg:gap-12 md:text-lg">
          <Link
            href={"/"}
            className=" font-semibold tracking-wide cursor-pointer hover:text-red-400 transition duration-300"
          >
            Genres
          </Link>
          {session && (
            <Link
              href={"/profile"}
              className=" font-semibold tracking-wide cursor-pointer hover:text-red-400 transition duration-300"
            >
              Profile
            </Link>
          )}

          {session ? (
            <>
              <button
                className="bg-white text-black px-6 py-2 rounded-xl  font-semibold tracking-wide cursor-pointer hover:opacity-50 transition duration-300"
                onClick={signOut}
              >
                SignOut
              </button>
              <Image
                src={profileImg || "/images/avatar.png"}
                alt="profile-avatar"
                width={45}
                height={45}
                className="rounded-full"
              />
            </>
          ) : (
            providers &&
            Object.values(providers).map((provider, index) => (
              <button
                key={index}
                onClick={() => signIn(provider.id)}
                className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl text-lg font-semibold tracking-wide cursor-pointer hover:opacity-50 transition duration-300"
              >
                <FaGoogle aria-label="google" />
                Login
              </button>
            ))
          )}
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
            <div className="absolute top-full mt-0.5 w-2/3 right-4 bg-gray-800 bg-opacity-95 text-white rounded-2xl flex flex-col gap-4 items-center p-4 ">
              <Link
                href={"/"}
                className="text-lg font-semibold py-2 tracking-wide cursor-pointer hover:text-black hover:bg-white w-full text-center rounded-xl transition duration-300"
              >
                Genres
              </Link>
              {session && (
                <Link
                  href={"/profile"}
                  className="text-lg font-semibold py-2 tracking-wide cursor-pointer hover:text-black hover:bg-white w-full text-center rounded-xl transition duration-300"
                >
                  Profile
                </Link>
              )}

              {session ? (
                <>
                  <button
                    onClick={signOut}
                    className="bg-white text-black px-6 py-2 rounded-xl text-lg font-semibold tracking-wide cursor-pointer hover:opacity-50 transition duration-300"
                  >
                    SignOut
                  </button>
                  <Image
                    src={profileImg || "/images/avatar.png"}
                    alt="profile-avatar"
                    width={45}
                    height={45}
                    className="rounded-full "
                  />
                </>
              ) : (
                providers &&
                Object.values(providers).map((provider, index) => (
                  <button
                    key={index}
                    onClick={() => signIn(provider.id)}
                    className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl text-lg font-semibold tracking-wide cursor-pointer hover:opacity-50 transition duration-300"
                  >
                    <FaGoogle aria-label="google" />
                    Login
                  </button>
                ))
              )}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
