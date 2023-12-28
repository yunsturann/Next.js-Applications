import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen bg-black text-gega-white text-xl md:text-3xl flex flex-col justify-center items-center gap-y-4 md:gap-y-6 ">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="underline">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
