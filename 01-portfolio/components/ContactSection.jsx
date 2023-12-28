import React from "react";

const ContactSection = () => {
  return (
    <section className="py-6 md:py-16">
      <div className="container mx-auto  space-y-4 md:space-y-8 ">
        {/* Section title */}
        <h2 className="section-title">Contact</h2>
        {/* Section Content*/}
        <div className="flex flex-col gap-4 items-center w-1/2 mx-auto text-center text-gray-700 space-y-4">
          <h3 className="text-lg md:text-xl tracking-wider font-semibold ">
            Would you like to contact me?
          </h3>
          <p className="text-base md:text-lg">
            I am always open to discussing web development topics. If you have
            any questions or want to say hi, please feel free to email me. If
            you want, you should use the link below.
          </p>

          <a
            href="mailto:eynstrne@gmail.com"
            target="_blank"
            className=" bg-rose-500 hover:bg-gega-red p-1 px-3 md:p-2 md:px-6 text-center text-white text-lg  md:text-xl font-semibold tracking-wider rounded-xl transition duration-300"
          >
            CONTACT ME
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
