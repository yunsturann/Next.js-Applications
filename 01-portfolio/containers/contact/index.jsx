import ContactSection from "@/components/contact";
import HeroSection from "@/components/HeroSection";
import React from "react";

const ContactContainer = () => {
  return (
    <>
      <HeroSection params={{ title: "Contact", subtitle: "Me From Email" }} />
      <ContactSection />
    </>
  );
};

export default ContactContainer;
