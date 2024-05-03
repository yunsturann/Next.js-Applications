// ** React Imports
import React from "react";

// ** Custom Components
import ContactSection from "@/components/contact";
import HeroSection from "@/components/HeroSection";

const ContactPage = () => {
  return (
    <>
      <HeroSection params={{ title: "Contact", subtitle: "Me From Email" }} />
      <ContactSection />
    </>
  );
};

export default ContactPage;
