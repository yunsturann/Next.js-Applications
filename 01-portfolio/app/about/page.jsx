// ** React Imports
import React from "react";

// ** Custom Components
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/about";

const AboutPage = () => {
  return (
    <>
      <HeroSection params={{ title: "About", subtitle: "Me" }} />
      <AboutSection />
    </>
  );
};

export default AboutPage;
