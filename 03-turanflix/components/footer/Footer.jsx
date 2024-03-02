import { navItems, socialLinks } from "@/contants/constants";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-10 ">
      <div className="container grid grid-cols-2 lg:grid-cols-3 gap-8 lg:place-items-center">
        {/* Explanation */}
        <div className="max-lg:col-span-2">
          <h2 className="text-2xl font-bold tracking-wider text-yellow-400 ">
            Turanflix
          </h2>
          <p className="my-4">
            I made this website to practice my web dev skills with Next.js and
            Tailwind. I used TMDB API to fetch movies data. Its link is below.
          </p>
          <div className="inline-block border border-white bg-rose-600 hover:opacity-70 px-8 py-1.5 text-lg rounded-full mt-2 cursor-pointer transition">
            <Link href="https://www.themoviedb.org/" target="_blank">
              TMDB
            </Link>
          </div>
        </div>

        {/* About Me*/}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-yellow-500">About Me</h2>
          <p>Turkey, Eskişehir</p>
          <p>Yunus Turan</p>
          {/* Links*/}
          <div className="flex gap-5 items-center text-3xl">
            {/* Social Links*/}
            {socialLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                aria-label={item.text}
                title={item.text}
                target="_blank"
                className="hover:text-yellow-500 transition duration-300"
              >
                {item.img}
              </Link>
            ))}
          </div>
        </div>

        {/* Pages / Links */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-yellow-500">Pages</h2>
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="hover:text-yellow-500 transition duration-300"
              >
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
