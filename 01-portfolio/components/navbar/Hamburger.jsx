"use client";

// ** React Imports
import { useState } from "react";

// ** Nextjs Imports
import Link from "next/link";

// ** Constants
import { navLinksData } from "@/mocks/navlinks";

const Hamburger = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="block sm:hidden">
        {/* hamburger button */}
        <div
          onClick={() => setShow((prev) => !prev)}
          className="group flex flex-col items-end space-y-1 cursor-pointer "
        >
          <div className="hamburger-line w-8"></div>
          <div className="hamburger-line w-6"></div>
          <div className="hamburger-line w-4"></div>
        </div>
      </div>
      {show && (
        <div className="absolute top-28 left-6 right-6 flex sm:hidden flex-col justify-center divide-y text-lg text-neutral-800 font-bold tracking-widest bg-gray-100 rounded-lg  ">
          {navLinksData.map(({ id, title, href }) => (
            <Link
              key={id}
              href={href}
              className="w-full text-center py-2 rounded-lg hover:bg-gray-200 hover:text-gega-red transition duration-300 "
              onClick={() => setShow(false)}
            >
              {title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Hamburger;
