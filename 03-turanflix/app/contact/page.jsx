import ContactForm from "@/components/contactForm/ContactForm";
import Image from "next/image";

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex justify-center items-center pt-28 pb-20">
      <div className="container flex justify-between gap-6 h-full">
        {/* LEFT SECTION, IMAGE */}
        <div className="relative basis-2/5 hidden lg:block ">
          <Image
            src={"/images/contact.png"}
            alt="contact"
            fill
            className="object-contain rounded-3xl"
          />
        </div>
        {/* RIGHT SECTION, FORM  */}
        <div className="basis-full lg:basis-1/2 flex justify-center items-center text-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
