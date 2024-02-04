"use client";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

let settings = {
  dots: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
      },
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
      },
    },
  ],
};

const SlickCarousel = ({ genres }) => {
  return (
    <Slider {...settings}>
      {genres.map(({ id, name }) => (
        <Link
          key={id}
          href={`/genres/${id}`}
          className="py-4 bg-white bg-opacity-70 hover:bg-opacity-90 cursor-pointer rounded-xl text-black hover:text-rose-500 text-sm sm:text-base lg:text-lg text-center font-semibold  transition duration-300"
        >
          <p className="line-clamp-1">{name}</p>
        </Link>
      ))}
    </Slider>
  );
};

export default SlickCarousel;
