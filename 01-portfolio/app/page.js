// ** Custom Components
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/about";
import ContactSection from "@/components/contact";
import Testimonial from "@/components/home/Testimonial";
import ProjectsSection from "@/components/projects-section";

export default function Home() {
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
}
