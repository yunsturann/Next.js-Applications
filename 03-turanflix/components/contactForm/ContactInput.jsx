import React from "react";

const ContactInput = ({ type = "text", name, maxLen, required = false }) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        maxLength={maxLen}
        placeholder=" "
        className="block rounded-md px-4 pt-6 py-2 w-full text-lg text-white bg-gray-600 appearance-none focus:outline-none focus:ring-0 peer"
      />
      <label
        htmlFor={name}
        className="absolute text-lg text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 origin-[0] cursor-text left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        {name}
      </label>
    </div>
  );
};

export default ContactInput;
