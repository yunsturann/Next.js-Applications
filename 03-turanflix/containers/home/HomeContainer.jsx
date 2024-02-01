import React from "react";
import HeroSection from "./components/HeroSection";

const movie = {
  posterPath: "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
  original_title: "KİLLERS OF THE FLOWER MOON",
  overview:
    "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
};

const HomeContainer = () => {
  return (
    <main className="h-full">
      <HeroSection movie={movie} />
    </main>
  );
};

export default HomeContainer;
