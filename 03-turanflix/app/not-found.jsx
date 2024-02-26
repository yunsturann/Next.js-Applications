import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="bg-gray-900 h-screen text-white">
      <div className="container h-full flex flex-col justify-center items-center gap-10 text-center">
        {/*  */}
        <Image src={"/images/404.jpg"} alt="404" width={300} height={300} />
        <h1 className="text-4xl  font-semibold ">404 Not Found</h1>
        <p className="text-2xl  ">
          The page you are looking for does not exist
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

export default NotFound;
