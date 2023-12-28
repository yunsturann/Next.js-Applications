import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import React from "react";
import Testimonial from "../home/Testimonial";

const ContactContainer = () => {
  return (
    <>
      <HeroSection params={{ title: "Contact", subtitle: "Me From Email" }} />
      <ContactSection />
    </>
  );
};

export default ContactContainer;
