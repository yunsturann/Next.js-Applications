// ** React Imports
import React from "react";

// ** Custom Components
import SlickCarousel from "./SlickCarousel";

const Testimonial = () => {
  return (
    <section className="py-6 md:py-16">
      <div className="container mx-auto">
        {/* Section title */}
        <h2 className="section-title">Testimonial</h2>
        <h3 className="text-center text-lg tracking-wide text-gray-400 mt-2">
          My friends saying
        </h3>

        {/* Slider container*/}
        <div className="my-10 md:my-20 ">
          <SlickCarousel />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
