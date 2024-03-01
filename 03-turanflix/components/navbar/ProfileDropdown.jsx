"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

let lastPosition = 0;

const ProfileDropdown = ({
  session,
  handleSignOut,
  providers,
  profileImg,
  signIn,
}) => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  const checkScroll = () => {
    if (Math.abs(lastPosition - window.scrollY) > 100) {
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
    <>
      {session?.user ? (
        <div className="relative">
          {/*PROFILE IMG */}
          <Image
            unoptimized
            src={profileImg || "/images/avatar.png"}
            alt="profile-avatar"
            width={45}
            height={45}
            className="rounded-full cursor-pointer"
            onClick={handleHamburger}
          />
          {/* Dropdown CONTAINER */}
          {showDropdown && (
            <div className="absolute top-full right-0 mt-7 bg-gray-950 w-52 flex flex-col gap-4 p-4 rounded-xl ">
              <button
                onClick={() => {
                  setShowDropdown(false);
                  router.push("/profile");
                }}
                className="font-semibold p-2 tracking-wide cursor-pointer rounded-xl hover:bg-gray-800 transition duration-300"
              >
                Profile
              </button>
              <button
                className="bg-white text-black p-2 rounded-xl font-semibold tracking-wide cursor-pointer hover:opacity-50 transition duration-300"
                onClick={() => {
                  setShowDropdown(false);
                  handleSignOut();
                }}
              >
                SignOut
              </button>
            </div>
          )}
        </div>
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
    </>
  );
};

export default ProfileDropdown;
