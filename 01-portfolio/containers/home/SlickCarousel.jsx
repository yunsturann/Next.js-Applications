"use client";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { sliderData } from "@/mocks/sliderData";
import Image from "next/image";

let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 855,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SlickCarousel = () => {
  return (
    <section className="w-[90%] max-w-[800px] mx-auto ">
      <Slider {...settings} className="">
        {sliderData.map(({ id, name, image, text, role }) => (
          // item
          <article key={id} className="p-4 bg-gray-100 rounded-lg">
            {/* item header */}
            <div className="flex items-center gap-4">
              <Image
                src={image}
                alt="Profile"
                width={150}
                height={150}
                className="rounded-full w-[150px] h-[150px] object-cover shadow-md shadow-gray-400"
                priority={false}
                placeholder="blur"
              />
              {/* item header right*/}
              <div>
                <h3 className="font-bold mt-2 text-xl">{name}</h3>
                <h4>{role}</h4>
              </div>
            </div>
            {/* item body */}
            <div>
              <p className="text-gray-600 mt-4">{text}</p>
            </div>
          </article>
        ))}
      </Slider>
    </section>
  );
};

export default SlickCarousel;
