"use client";

import { useEffect, useState } from "react";
import { getGenres } from "@/services/movie";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useRouter } from "next/navigation";

let lastPosition = 0;

const GenresButton = () => {
  const router = useRouter();
  const [showGenres, setShowGenres] = useState(false);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenres().then((data) => setGenres(data.genres));
  }, []);

  const handleClick = (id, name) => {
    setShowGenres(false);
    router.push(`/genres/${id}?genre=${name}`);
  };

  const checkScroll = () => {
    if (Math.abs(lastPosition - window.scrollY) > 300) {
      setShowGenres(false);
      // close event not to check always, it might decrease performance
      window.removeEventListener("scroll", checkScroll);
    }
  };

  const handleShowGenres = () => {
    // if dropdown is open, add scroll event listener to close dropdown when user scrolls
    const currShowDropdown = showGenres;
    setShowGenres((prev) => !prev);
    if (!currShowDropdown) {
      lastPosition = window.scrollY;
      window.addEventListener("scroll", checkScroll);
    }
  };

  return (
    <>
      {/* GENRES Button */}
      <button
        className="flex items-center gap-2 px-4 py-2 rounded-xl text-base xl:text-lg font-semibold tracking-wide cursor-pointer hover:bg-gray-800 transition duration-300"
        onClick={handleShowGenres}
      >
        Genres
        {showGenres ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {/* GENRES DROPDODWN */}
      <ul
        className={`${
          showGenres ? "flex" : "hidden"
        } absolute top-full bg-gray-700 w-[180px] sm:min-w-[280px] h-[300px] sm:h-[400px] overflow-y-auto rounded-bl-2xl px-2 pb-2 mt-0.5 flex-col divide-y-2 divide-gray-500`}
      >
        {genres.map(({ id, name }) => (
          <li
            key={id}
            className="hover:text-yellow-300 cursor-pointer pt-2"
            onClick={() => handleClick(id, name)}
          >
            {name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenresButton;
