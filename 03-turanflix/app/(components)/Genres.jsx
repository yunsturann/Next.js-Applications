import { getGenres } from "@/services/movie";
import SlickCarousel from "./SlickCarousel";

const Genres = async () => {
  const { genres } = await getGenres();

  return (
    <section>
      {/*Slick slider */}
      <SlickCarousel genres={genres} />
    </section>
  );
};

export default Genres;
