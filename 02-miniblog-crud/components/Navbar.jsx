import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full max-w-5xl bg-nav p-6 uppercase">
      <h1 className="text-4xl font-bold tracking-widest text-transparent bg-gradient-to-r bg-clip-text from-rose-500 to-rose-50">
        CRUD
      </h1>
      <Link
        href={"/addBlog"}
        className="text-lg font-semibold tracking-wide px-4 py-3 rounded-lg bg-blue-accent hover:bg-blue-accent-hover "
      >
        Add Blog
      </Link>
    </nav>
  );
};

export default Navbar;
