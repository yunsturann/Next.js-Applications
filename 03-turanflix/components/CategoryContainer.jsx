import MoviesSection from "@/components/MoviesSection";
import Image from "next/image";

const CategoryContainer = ({ title, movies }) => {
  return (
    <section className="min-h-screen  text-white  relative">
      {/*bg color*/}
      <div className="absolute inset-0 bg-gray-900 -z-50"></div>
      {/*Image */}
      <div className="fixed h-screen w-full -z-30 opacity-50 ">
        <Image
          src={`https://image.tmdb.org/t/p/original${movies[0].backdrop_path}`}
          fill
          className="blur-sm"
          priority={true}
        />
      </div>
      <div className="fixed h-screen w-full bg-black -z-20 opacity-50 "></div>

      <div className="py-32">
        <MoviesSection title={title} showAll={true} movies={movies} />
      </div>
    </section>
  );
};

export default CategoryContainer;
