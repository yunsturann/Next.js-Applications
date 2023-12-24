import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/about";
const HomeContainer = () => {
  return (
    <main>
      <HeroSection
        params={{ title: "Yunus Turan", subtitle: "Software Developer" }}
      />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
};

export default HomeContainer;
