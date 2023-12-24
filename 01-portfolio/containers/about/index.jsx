import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/about";

const AboutContainer = () => {
  return (
    <>
      <HeroSection params={{ title: "About", subtitle: "Me" }} />
      <AboutSection />
    </>
  );
};

export default AboutContainer;
