import React from "react";
import Form from "./Form";

const ContactSection = () => {
  return (
    <section className="py-6 md:py-16">
      <div className="container mx-auto space-y-4 md:space-y-8 ">
        {/* Section title */}
        <h2 className="section-title">Contact</h2>
        {/* Section Content*/}
        <div className="flex flex-col gap-4 items-center w-[90%] md:w-1/2 mx-auto text-center text-gray-700 space-y-4">
          <h3 className="text-lg md:text-xl tracking-wider font-semibold ">
            Would you like to contact me?
          </h3>
          <p className="text-base md:text-lg px-8">
            I am always open to discussing web development topics. If you have
            any questions or want to say hi, please feel free to email me. If
            you want, you should use the link below.
          </p>

          {/*Mail Form */}
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
