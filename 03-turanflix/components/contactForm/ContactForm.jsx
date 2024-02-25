"use client";
import React, { useEffect, useRef } from "react";
import ContactInput from "./ContactInput";
import { useFormStatus, useFormState } from "react-dom";
import { sendEmail } from "@/actions/sendEmail";
import { toast } from "react-toastify";

const SubmitButton = () => {
  const status = useFormStatus();
  return (
    <button
      type="submit"
      disabled={status.pending}
      className="bg-cyan-900 p-4 font-semibold tracking-widest rounded-xl hover:opacity-70 disabled:cursor-not-allowed transition duration-300 "
    >
      {status.pending ? "SENDING..." : "SEND EMAIL"}
    </button>
  );
};

const ContactForm = () => {
  const [state, formAction] = useFormState(sendEmail, undefined);
  const formRef = useRef(null);

  useEffect(() => {
    if (state?.success) {
      toast.success("Email delivered successfully!");
      formRef.current.reset();
    } else if (state?.error) {
      toast.error(state?.error);
    }
  }, [state]);

  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 w-full lg:w-4/5"
      ref={formRef}
    >
      <h2 className="text-4xl font-semibold mb-4">
        <span className="gradient_red_to_blue">Contact US</span>
      </h2>
      {/*USERNAME*/}
      <ContactInput name="username" maxLen={50} required />
      {/*EMAIL*/}
      <ContactInput name="email" type="email" maxLen={80} />
      {/*SUBJECT*/}
      <ContactInput name="subject" maxLen={100} />
      {/*MESSAGE*/}
      <textarea
        name="message"
        id=""
        placeholder="message"
        required
        maxLength={400}
        className="bg-gray-600 rounded-md h-60 p-4 w-full text-lg text-white appearance-none focus:outline-none focus:ring-0 resize-none"
      />
      {/*SUBMIT*/}
      <SubmitButton />
    </form>
  );
};

export default ContactForm;
