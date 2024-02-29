"use client";
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
import MoviesSection from "./moviesSection/MoviesSection";
import { usePathname } from "next/navigation";

let page = 2;

const LoadMore = ({ title, initialMovies }) => {
  const pathname = usePathname();
  const { ref, inView } = useInView();

  const [movies, setMovies] = useState(initialMovies);

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
      } else if (pathname.startsWith("/genre")) {
        // const { id } = genres.genres.find((genre) => genre.name === title);
        const id = pathname.split("/")[2];
        const { results } = await getWithGenre(id, page);
        setMovies([...movies, ...results]);
      } else {
        return;
      }
      page++;
    }
    fetchMovie();
  }, [inView]);

  if (!movies) return null;

  return (
    <>
      {/*MOVIES*/}
      <MoviesSection title={title} movies={movies} showAll={true} />

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
