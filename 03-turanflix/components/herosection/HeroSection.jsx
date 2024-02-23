"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import HeroItem from "./HeroItem";

const HeroSection = ({ movies }) => {
  return (
    <section className="h-screen ">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
        className="w-full h-full"
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <HeroItem movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
