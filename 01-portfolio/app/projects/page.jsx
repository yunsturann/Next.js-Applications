// ** Custom Components
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

const ProjectsPage = () => {
  return (
    <>
      <HeroSection params={{ title: "My", subtitle: "Projects" }} />
      <ProjectsSection />
    </>
  );
};

export default ProjectsPage;
