import Image from "next/image";
import LoadMore from "./LoadMore";

const CategoryContainer = ({ title, movies }) => {
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  return (
    <section className="min-h-screen text-white relative">
      {/*bg color*/}
      <div className="absolute inset-0 bg-gray-900 -z-50"></div>
      {/*Image */}
      <div className="fixed h-screen w-full -z-30 opacity-60 ">
        <Image
          src={`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`}
          alt="bg-image"
          fill
          className="blur-md"
          priority={true}
        />
      </div>
      <div className="fixed h-screen w-full bg-black -z-20 opacity-50 "></div>

      {/*Load More */}
      <div className="py-32">
        <LoadMore title={title} initialMovies={movies} />
      </div>
    </section>
  );
};

export default CategoryContainer;
