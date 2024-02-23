"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import GenresButton from "./ui/GenresButton";

let currPosition = 0;

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

  const checkScroll = () => {
    if (Math.abs(currPosition - window.scrollY) > 200) {
      setShowDropdown(false);
      // close event not to check always, it might decrease performance
      window.removeEventListener("scroll", checkScroll);
    }
  };

  const handleHamburger = () => {
    // if dropdown is open, add scroll event listener to close dropdown when user scrolls
    const currShowDropdown = showDropdown;
    setShowDropdown((prev) => !prev);
    if (!currShowDropdown) {
      currPosition = window.scrollY;
      window.addEventListener("scroll", checkScroll);
    }
  };

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
        <nav className="navbar hidden sm:flex items-center gap-2 lg:gap-6 md:text-lg">
          <GenresButton />

          {session && (
            <Link
              href={"/profile"}
              className=" font-semibold px-2 py-2 tracking-wide cursor-pointer rounded-xl hover:bg-gray-800 transition duration-300"
            >
              Profile
            </Link>
          )}

          {session ? (
            <>
              <button
                className="bg-white text-black px-4 py-2 rounded-xl  font-semibold tracking-wide cursor-pointer hover:opacity-50 transition duration-300"
                onClick={signOut}
              >
                SignOut
              </button>
              <Image
                src={profileImg || "/images/avatar.png"}
                alt="profile-avatar"
                width={45}
                height={45}
                className="rounded-full hidden lg:block"
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
                <Image
                  src={"/images/google.png"}
                  alt="google"
                  aria-label="google-login"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <span className="text-transparent bg-gradient-to-r bg-clip-text from-blue-600 via-yellow-600  to-red-600">
                  Login
                </span>
              </button>
            ))
          )}
        </nav>

        {/*MOBILE NAV */}

        <nav className="navbar flex sm:hidden ">
          <button
            type="button"
            className="hover:text-rose-500 transition duration-300"
            onClick={handleHamburger}
          >
            {showDropdown ? <IoMdClose size={32} /> : <IoMdMenu size={32} />}
          </button>
          {/*HAMBURGER DROPDOWN */}

          {showDropdown && (
            <div className="absolute top-full mt-0.5 w-2/3 right-4 bg-gray-800 bg-opacity-95 text-white rounded-2xl flex flex-col gap-4 items-center p-4 ">
              {session ? (
                <>
                  <Image
                    src={profileImg || "/images/avatar.png"}
                    alt="profile-avatar"
                    width={45}
                    height={45}
                    className="rounded-full "
                  />
                  <button
                    onClick={signOut}
                    className="bg-white text-black px-6 py-2 rounded-xl text-lg font-semibold tracking-wide cursor-pointer hover:opacity-50 transition duration-300"
                  >
                    SignOut
                  </button>
                </>
              ) : (
                providers &&
                Object.values(providers).map((provider, index) => (
                  <button
                    key={index}
                    onClick={() => signIn(provider.id)}
                    className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl text-lg font-semibold tracking-wide cursor-pointer hover:opacity-50 transition duration-300"
                  >
                    <Image
                      src={"/images/google.png"}
                      alt="google"
                      aria-label="google-login"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    <span className="text-transparent bg-gradient-to-r bg-clip-text from-blue-600 via-yellow-600  to-red-600">
                      Login
                    </span>
                  </button>
                ))
              )}
              {session && (
                <Link
                  href={"/profile"}
                  className="text-lg font-semibold py-2 tracking-wide cursor-pointer hover:text-black hover:bg-white w-full text-center rounded-xl transition duration-300"
                >
                  Profile
                </Link>
              )}
              <GenresButton />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
