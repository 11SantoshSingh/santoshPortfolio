import React from "react";
import { FaHtml5, FaCss3, FaReact, FaJs, FaFigma } from "react-icons/fa";
import { SiRedis, SiMongodb } from "react-icons/si";

const TechStack = () => {
  return (
    <div id="TechStack" className="p-10 md:p-24 text-white text-xl">
        <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center">Tech Stack</h1>

        <div className="w-full flex flex-wrap gap-8 justify-center">
            <span className="p-4 bg-zinc-950 rounded-2xl"><FaHtml5 color="#E34F26" size={50} /></span>
            <span className="p-4 bg-zinc-950 rounded-2xl"><FaCss3 color="#2965F1" size={50} /></span>
            <span className="p-4 bg-zinc-950 rounded-2xl"><FaReact color="#61DAFB" size={50} /></span>
            <span className="p-4 bg-zinc-950 rounded-2xl"><FaJs color="#F0DB4F" size={50} /></span>
            <span className="p-4 bg-zinc-950 rounded-2xl"><FaFigma color="#A259FF" size={50} /></span>
            <span className="p-4 bg-zinc-950 rounded-2xl"><SiMongodb color="#4DB33D" size={50} /></span>
        </div>
    </div>
  );
};

export default TechStack;
