"use client";

import { getSearchResults } from "@/services/movie";
import Image from "next/image";
import { FaRegTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Search = ({ showDropdown }) => {
  const router = useRouter();

  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!searchTerm) return;
    if (showDropdown) {
      setSearchTerm("");
    }
    // debounce not to make request for every key stroke
    const timeoutId = setTimeout(() => {
      getSearchResults(searchTerm).then((res) => {
        setSearchedMovies(res?.results);
      });
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchTerm, showDropdown]);

  const handleMovieClick = (movieId) => {
    router.push(`/movies/${movieId}`);
    setSearchTerm("");
  };

  return (
    <section className="flex w-full lg:w-80 xl:w-96 max-lg:order-last relative">
      {/* INPUT FOR SEARCH */}
      <input
        type="text"
        placeholder="Search a movie"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`w-full py-2 px-4 bg-gray-800 bg-opacity-90 ${
          searchTerm ? "rounded-tl-lg" : "rounded-lg"
        } text-white focus:outline-none`}
      />
      {searchTerm && (
        <div
          className={`bg-gradient-to-l from-gray-700 to-gray-800 hover:opacity-70 hover:text-rose-400 flex items-center px-3 py-2 text-lg cursor-pointer transition duration-300 rounded-tr-lg`}
          onClick={() => setSearchTerm("")}
        >
          <FaRegTrashAlt />
        </div>
      )}

      {/* Searched Movies DROPDOWN */}
      {searchTerm && (
        <div className="absolute z-30 top-full w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-y-scroll bg-gray-800/95 flex flex-col gap-4 rounded-b-lg p-2">
          {/* Movie CARDS */}
          {searchedMovies && searchedMovies.length > 0 ? (
            searchedMovies.map((movie, index) => (
              <article
                key={index}
                className="flex gap-3 min-h-[120px] h-[120px] p-2 rounded-lg cursor-pointer hover:bg-gray-900 transition duration-300"
                onClick={() => handleMovieClick(movie.id)}
              >
                {/* LEFT PART, IMAGE  */}
                <div className="w-[25%] relative">
                  {/* Show poster path if doesnt exist, show 404.img */}
                  {movie?.poster_path ? (
                    <Image
                      src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                      alt={movie.title}
                      fill
                      sizes="100px"
                      className="object-cover rounded-md"
                    />
                  ) : (
                    <Image
                      src={"/images/404.jpg"}
                      alt="404-img"
                      fill
                      sizes="100px"
                      className="object-cover rounded-md"
                    />
                  )}
                </div>
                {/* RIGHT PART, CONTENT  */}
                <div className="w-[75%] flex flex-col  justify-between text-sm">
                  <header>
                    <h2 className="text-base line-clamp-2 leading-[1.15]">
                      {movie?.title}
                    </h2>
                    <p className="text-gray-400 text-xs">
                      {movie?.release_date}
                    </p>
                  </header>
                  {/* Footer of right part of the card */}
                  <div>
                    <p className="text-gray-400">
                      IMDb:{" "}
                      <span className="text-yellow-400">
                        {movie.vote_average}
                      </span>
                    </p>
                    <p className="text-blue-400">Votes: {movie.vote_count} </p>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <p>No results</p>
          )}
          {/* CARD */}
        </div>
      )}
    </section>
  );
};

export default Search;
