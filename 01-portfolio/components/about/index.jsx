import Image from "next/image";
import React from "react";
import MyImage from "@/public/assets/images/meCroped.webp";
import RightSection from "./RightSection";

const AboutSection = () => {
  return (
    <section className="py-6 md:py-16">
      <div className="container mx-auto space-y-6 md:space-y-12">
        {/* Section title */}
        <h2 className="section-title">About Me</h2>
        {/* Section Content*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          {/* Left Content */}
          <div className="flex flex-col justify-center items-center text-gray-600 tracking-wide">
            <Image
              src={MyImage}
              alt="Profile"
              width={280}
              height={280}
              className="rounded-full w-[220px] h-[220px] lg:w-[280px] lg:h-[280px] object-cover shadow-lg shadow-gray-400"
              priority={true}
            />
            <h3 className="font-bold mt-2 text-xl">Yunus Turan</h3>
            <h4>Web Developer</h4>
          </div>
          {/* Right Content */}
          <RightSection />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
