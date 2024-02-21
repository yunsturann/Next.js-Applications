import React from "react";
import Image from "next/image";

import allGenres from "@/contants/genres";
import Link from "next/link";
import { MotionDiv } from "./MotionDiv";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const MovieCard = ({ movie, prefetch = true, index }) => {
  const genre = allGenres.genres.find(
    (genre) => genre.id === movie.genre_ids[0]
  );
  let genreName = "";
  if (genre) {
    genreName = genre.name;
  }

  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.2,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
    >
      <Link
        href={`/movies/${movie.id}`}
        className="cursor-pointer"
        style={{ display: "contents" }}
        prefetch={prefetch}
      >
        <article className="group hover:scale-110 space-y-3 transition-transform duration-300 h-full ">
          {/*Image */}
          {movie.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="movie-img"
              height={380}
              width={320}
              className="rounded-xl"
            />
          ) : (
            <div className="bg-black h-3/4 rounded-xl grid place-items-center">
              image-not-found
            </div>
          )}

          {/*About movie*/}
          <div className=" space-y-1 ">
            <div className="flex justify-between items-start gap-2 ">
              <h3 className="text-lg font-semibold leading-6 line-clamp-3">
                {movie.title}
              </h3>
              <p className="bg-amber-800 px-1 py-0.5 rounded-md ">
                {movie.vote_average.toFixed(1)}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-2 text-neutral-500">
              <p className="group-hover:text-red-500 hover:text-white">
                {genreName}
              </p>
              &diams;
              <p>{movie.release_date.slice(0, 4)}</p>
            </div>
          </div>
        </article>
      </Link>
    </MotionDiv>
  );
};

export default MovieCard;
