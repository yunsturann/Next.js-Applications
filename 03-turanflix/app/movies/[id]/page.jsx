import Reviews from "@/components/Reviews";
import Trailer from "@/components/trailer/Trailer";
import HeartButton from "@/components/ui/HeartButton";
import { getReviews, getSignleMovie } from "@/services/movie";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const Movie = async ({ params, searchParams }) => {
  const { id } = params;
  const { watch } = searchParams;
  const [movie, { results: reviews }] = await Promise.all([
    getSignleMovie(id),
    getReviews(id),
  ]);

  return (
    <section className="min-h-screen text-white py-24 sm:py-32 relative">
      <div className="absolute inset-0 -z-50 bg-gray-900"></div>
      <div className="movie-container max-w-7xl max-2xl:px-8 mx-auto flex flex-col gap-8 sm:gap-12">
        {/*Movie field*/}
        <div className="flex max-md:items-center max-md:flex-col gap-5 sm:gap-10">
          {/*LEFT AREA IMAGE*/}
          <div className="">
            <Image
              unoptimized // I use hobby plan :( so I can't use this feature too much
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="movie-img"
              height={320}
              width={320}
              className="object-contain rounded-2xl"
              priority={true}
            />
          </div>
          {/*Right AREA*/}
          <div className="flex-1 space-y-4 relative px-4">
            {/*background image*/}
            <Image
              unoptimized // I use hobby plan :( so I can't use this feature too much
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt="bg-img-movie"
              fill
              className="opacity-20 rounded-2xl blur-md -z-10"
            />

            {/*Header of the movie*/}
            <header className="flex justify-between items-start max-xl:flex-wrap gap-4 text-gray-400">
              {/*Titles section */}
              <div>
                <h1 className="text-white text-2xl sm:text-3xl font-bold ">
                  {movie.title}
                </h1>
                <p>Original title: {movie.original_title}</p>
                <p>Released: {movie.release_date}</p>
              </div>
              {/*IMDb section */}
              <div className="text-gray-400 ">
                <p className="uppercase text-nowrap">imdb rating</p>
                <div className="flex items-center justify-between bg-gray-700 hover:bg-gray-600 rounded-lg p-1 space-x-1">
                  <FaStar size={32} color="orange" />
                  <div>
                    <p className="tracking-wide">
                      <span className="font-bold text-white">
                        {movie.vote_average.toFixed(1)}
                      </span>
                      /10
                    </p>
                    <p title="Votes">{movie.vote_count / 1000}K</p>
                  </div>
                </div>
              </div>
            </header>

            {/*genres*/}

            <div className="flex flex-wrap gap-2">
              {movie.genres.map(({ id, name }) => (
                <Link
                  href={`/genres/${id}?genre=${name}`}
                  key={id}
                  className="bg-gray-800 hover:bg-gray-700 p-1.5 px-4 rounded-full cursor-pointer"
                >
                  {name}
                </Link>
              ))}
            </div>

            {/*movie overview*/}
            <p className="md:w-3/4 text-sm sm:text-lg">{movie.overview}</p>

            {/*buttons for actions*/}
            <div className="flex items-stretch gap-6 text-lg md:text-xl lg:text-2xl font-semibold sm:pt-6">
              <Link
                href={"/movies/" + movie.id + "?watch=true"}
                className="px-6 md:px-12 bg-white hover:bg-gray-300 rounded-full text-neutral-800 hover:text-rose-500 tracking-wider flex items-center transition duration-300"
              >
                Play
              </Link>
              <HeartButton
                movie={movie}
                classes={"h-10 w-10 md:h-12 md:w-12"}
              />
            </div>
          </div>
        </div>

        {/*Trailer */}
        {watch === "true" &&
          (movie.videos.results.length > 0 ? (
            <Trailer
              video={movie.videos.results}
              playlistImg={movie.backdrop_path}
            />
          ) : (
            <p className="text-center bg-red-100 text-red-500">
              Trailer not available!
            </p>
          ))}

        {/*Review */}
        <Reviews reviews={reviews} />
      </div>
    </section>
  );
};

export default Movie;

export const generateMetadata = async ({ params }) => {
  const { id } = params;
  const movie = await getSignleMovie(id);
  return {
    title: movie.title,
    description: movie.overview,
  };
};
