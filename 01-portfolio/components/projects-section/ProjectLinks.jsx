"use client";
import React from "react";
import { FaCode, FaArrowRight } from "react-icons/fa6";

const ProjectLinks = ({ links }) => {
  return (
    <div className="flex space-x-4 opacity-0 group-hover:opacity-100 group-hover:mb-2  transition-all duration-500">
      {links.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          className="p-2 hover:text-gega-melon"
          onClick={(e) => e.stopPropagation()}
        >
          {item.name === "Webpage" ? <FaArrowRight /> : <FaCode />}
        </a>
      ))}
    </div>
  );
};

export default ProjectLinks;
