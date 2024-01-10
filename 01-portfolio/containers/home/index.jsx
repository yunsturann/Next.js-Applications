import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/about";
import Testimonial from "./Testimonial";
import ContactSection from "@/components/contact";
const HomeContainer = () => {
  return (
    <main>
      <HeroSection
        params={{ title: "Yunus Turan", subtitle: "Software Developer" }}
      />
      <AboutSection />
      <hr className=" border-t-[7px] border-dotted border-blue-100 w-1/12 mx-auto" />
      <ProjectsSection />
      <hr className=" border-t-[7px] border-dotted border-blue-100 w-1/12 mx-auto" />
      <Testimonial />
      <hr className=" border-t-[7px] border-dotted border-blue-100 w-1/12 mx-auto" />
      <ContactSection />
    </main>
  );
};

export default HomeContainer;
