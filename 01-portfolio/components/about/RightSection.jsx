"use client";
import React, { useState } from "react";
import { aboutLinks } from "@/mocks/aboutData";
import PersonalInfo from "./PersonalInfo";
import PersonalDetail from "./PersonalDetail";
import Skills from "./Skills";

const RightSection = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="md:col-span-2 flex flex-col space-y-4 lg:space-y-8 px-6">
      {/*Button Links*/}
      <div className="flex items-center p-[1px] border border-gray-200 rounded-3xl space-x-1 ">
        {aboutLinks.map((item, index) => (
          <button
            key={index}
            type="button"
            className={`flex-grow p-2 text-center font-semibold tracking-wider rounded-3xl transition duration-300 ${
              active === index
                ? "text-white bg-red-500"
                : "text-black bg-white hover:bg-slate-300"
            }`}
            onClick={() => setActive(index)}
            aria-label={item}
          >
            {item}
          </button>
        ))}
      </div>
      {/*Content*/}
      <div className="flex-1 max-md:min-h-52 ">
        {active === 0 && <PersonalInfo />}
        {active === 1 && <PersonalDetail />}
        {active === 2 && <Skills />}
      </div>
    </div>
  );
};

export default RightSection;
