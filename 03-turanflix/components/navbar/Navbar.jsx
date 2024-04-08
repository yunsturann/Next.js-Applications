"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import GenresButton from "../ui/GenresButton";
import Search from "./Search";
import ProfileDropdown from "./ProfileDropdown";
import useClickOutside from "@/hooks/useClickOutside";

let lastPosition = 0;

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const profileImg = session?.user?.image;

  const [showDropdown, setShowDropdown] = useState(false);
  const [providers, setProviders] = useState(null);
  const ref = useRef();

  useEffect(() => {
    getProviders().then((res) => {
      setProviders(res);
    });
  }, []);

  useClickOutside(ref, () => {
    setShowDropdown(false);
  });

  // it is needed for production
  useEffect(() => {
    if (session?.user) {
      // toast.info("You are signed in");
    }
  }, [session?.user]);

  const handleSignOut = () => {
    if (!confirm("Are you sure you want to sign out?")) return;
    // if user is on protected page(like profile), redirect to home page after signout

    if (pathname === "/profile") {
      router.push("/");
      setTimeout(() => {
        signOut();
      }, 700);
    } else {
      signOut();
    }
  };

  const checkScroll = () => {
    if (Math.abs(lastPosition - window.scrollY) > 200) {
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
      lastPosition = window.scrollY;
      window.addEventListener("scroll", checkScroll);
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-gray-950 bg-opacity-95  ">
      <div className="container flex max-lg:flex-wrap justify-between items-center text-white space-y-1 sm:space-y-2  py-2 lg:py-5 relative">
        {/*Logo and Brand */}
        <Link href={"/"}>
          <h1
            className="text-2xl lg:text-3xl font-bold sm:tracking-wider cursor-pointer gradient_red_to_blue"
            title="homepage"
          >
            TURANFLIX
          </h1>
        </Link>

        {/* SEARCH BAR */}
        <Search showDropdown={showDropdown} />

        {/*Desktop Nav */}
        <nav className="navbar hidden lg:flex items-center gap-3 xl:gap-6 xl:text-lg">
          {/* GENRES BUTTON & DROPDOWN */}
          <GenresButton />
          {/* CONTACT PAGE LINK*/}
          <Link
            href={"/contact"}
            className="font-semibold p-2 hover:bg-gray-800 rounded-xl transition duration-300 "
          >
            Contact
          </Link>
          {/* PROFILE DROPDOWN*/}
          <ProfileDropdown
            session={session}
            handleSignOut={handleSignOut}
            providers={providers}
            profileImg={profileImg}
            signIn={signIn}
          />
        </nav>

        {/*MOBILE NAV */}

        <nav className="navbar flex lg:hidden ">
          <button
            type="button"
            className="hover:text-rose-500 transition duration-300"
            onClick={handleHamburger}
            aria-label="hamburger-menu"
          >
            {showDropdown ? <IoMdClose size={32} /> : <IoMdMenu size={32} />}
          </button>
          {/*HAMBURGER DROPDOWN */}

          {showDropdown && (
            <div
              ref={ref}
              className="absolute top-full mt-1 w-4/5 max-w-[300px] right-4 bg-gray-950 text-white rounded-2xl flex flex-col gap-4 items-center p-4 "
            >
              {session?.user ? (
                <>
                  <Image
                    unoptimized
                    src={profileImg || "/images/avatar.png"}
                    alt="profile-avatar"
                    width={45}
                    height={45}
                    className="rounded-full "
                  />
                  <button
                    onClick={handleSignOut}
                    className="bg-white text-black px-6 py-2 rounded-xl text-lg font-semibold tracking-wide cursor-pointer hover:opacity-50 transition duration-300"
                  >
                    SignOut
                  </button>
                  <button
                    onClick={() => {
                      setShowDropdown(false);
                      router.push("/profile");
                    }}
                    className="font-semibold px-2 py-2 tracking-wide cursor-pointer rounded-xl hover:bg-gray-800 transition duration-300"
                  >
                    Profile
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
                    <span className="gradient_google">Login</span>
                  </button>
                ))
              )}

              <button
                onClick={() => {
                  setShowDropdown(false);
                  router.push("/contact");
                }}
                className="font-semibold px-2 py-2 tracking-wide cursor-pointer rounded-xl hover:bg-gray-800 transition duration-300"
              >
                Contact
              </button>
              <GenresButton />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
