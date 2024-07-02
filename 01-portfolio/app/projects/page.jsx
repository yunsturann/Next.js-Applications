// ** Custom Components
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/projects-section";

const ProjectsPage = () => {
  return (
    <>
      <HeroSection params={{ title: "My", subtitle: "Projects" }} />
      <ProjectsSection viewAll={true} />
    </>
  );
};

export default ProjectsPage;
