"use client";
import genres from "@/contants/genres";
import {
  getPopularMovies,
  getTopRated,
  getUpcomingMovies,
  getWithGenre,
} from "@/services/movie";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import spinner from "@/public/images/spinner.svg";
import MoviesSection from "./MoviesSection";

let page = 2;

const LoadMore = ({ title, initialMovies }) => {
  const { ref, inView } = useInView();

  const [movies, setMovies] = useState(initialMovies);

  //console.log(title);

  useEffect(() => {
    if (!inView) return;

    async function fetchMovie() {
      if (title.startsWith("top rated")) {
        const { results } = await getTopRated(page);
        setMovies([...movies, ...results]);
      } else if (title.startsWith("popular movies")) {
        const { results } = await getPopularMovies(page);
        setMovies([...movies, ...results]);
      } else if (title.startsWith("upcoming movies")) {
        const { results } = await getUpcomingMovies(page);
        setMovies([...movies, ...results]);
      } else {
        const { id } = genres.genres.find((genre) => genre.name === title);
        const { results } = await getWithGenre(id, page);
        setMovies([...movies, ...results]);
      }
      page++;
    }
    fetchMovie();
  }, [inView, movies]);

  return (
    <>
      {/*MOVIES*/}
      <MoviesSection title={title} movies={movies} showAll={true} />
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-x-4 gap-y-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div> */}
      {/*LOADMORE SVG */}
      <div className="flex justify-center py-12" ref={ref}>
        <Image
          src={spinner}
          alt="spinner"
          width={60}
          height={60}
          className="object-contain"
        />
      </div>
    </>
  );
};

export default LoadMore;
