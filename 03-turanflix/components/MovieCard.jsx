import React from "react";
import Image from "next/image";

import allGenres from "@/contants/genres";
import Link from "next/link";

const MovieCard = ({ movie }) => {
  const { name } = allGenres.genres.find(
    (genre) => genre.id === movie.genre_ids[0]
  );

  return (
    <Link
      href={`/movies/${movie.id}`}
      className="cursor-pointer"
      style={{ display: "contents" }}
    >
      <article className="group hover:scale-110 space-y-3  transition-transform duration-300">
        {/*Image */}
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          height={380}
          width={320}
          className="rounded-xl"
        />

        {/*About movie*/}
        <div className=" space-y-1 ">
          <div className="flex justify-between items-start gap-2 ">
            <h3 className="text-lg font-semibold leading-6">{movie.title}</h3>
            <p className="bg-amber-800 px-1 py-0.5 rounded-md">
              {movie.vote_average.toFixed(1)}
            </p>
          </div>
          <div className="flex items-center gap-2 text-neutral-500">
            <p className="group-hover:text-red-500 hover:text-white">{name}</p>
            &diams;
            <p>{movie.release_date.slice(0, 4)}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;
