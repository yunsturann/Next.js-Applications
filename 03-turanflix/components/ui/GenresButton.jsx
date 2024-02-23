"use client";

import { useEffect, useState } from "react";
import { getGenres } from "@/services/movie";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useRouter } from "next/navigation";

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

  return (
    <>
      {/* GENRES Button */}
      <button
        className=" flex items-center gap-2 px-4 py-2 rounded-xl text-base md:text-lg font-semibold tracking-wide cursor-pointer hover:bg-gray-800 transition duration-300"
        onClick={() => setShowGenres((prev) => !prev)}
      >
        Genres
        {showGenres ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {/* GENRES DROPDODWN */}
      <ul
        className={`${
          showGenres ? "flex" : "hidden"
        } absolute top-full bg-gray-700 w-[180px] sm:min-w-[280px] h-[300px] sm:h-[400px] overflow-y-auto rounded-bl-2xl px-2 pb-2 flex-col divide-y-2 divide-gray-500`}
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
