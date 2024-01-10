"use client";

import { useState } from "react";

const Form = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form className=" w-full flex flex-col gap-2 md:gap-4 text-base md:text-lg ">
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Subject"
        className="outline-none border-2 border-gray-500 p-4 tracking-wider rounded-xl"
        maxLength={100}
      />
      <textarea
        placeholder="Message"
        maxLength={350}
        className="resize-none h-52 outline-none border-2 border-gray-500 p-4 rounded-xl"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <a
        href={`mailto:eynstrne@gmail.com?Subject=${subject}&body=${message}`}
        target="_blank"
        className=" bg-rose-500 hover:bg-gega-red p-2 md:p-4 px-3 md:px-6 text-center text-white text-lg  md:text-xl font-semibold tracking-wider rounded-xl transition duration-300"
      >
        CONTACT ME
      </a>
    </form>
  );
};

export default Form;
