"use client";

import Link from "next/link";

const error = () => {
  return (
    <div className="bg-gray-900 h-screen text-white">
      <div className="container h-full flex flex-col justify-center items-center gap-10 text-center">
        <h1 className="text-3xl sm:text-4xl  font-semibold ">404 Error</h1>
        <p className="text-lg sm:text-2xl  ">
          Something went wrong, please try again later
        </p>
        <Link
          href="/"
          className="text-xl underline text-blue-400 hover:text-blue-200 transition duration-300"
        >
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default error;
