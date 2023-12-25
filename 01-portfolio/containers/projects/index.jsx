import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import React from "react";

const ProjectsContainer = () => {
  return (
    <>
      <HeroSection params={{ title: "My", subtitle: "Projects" }} />
      <ProjectsSection />
    </>
  );
};

export default ProjectsContainer;
