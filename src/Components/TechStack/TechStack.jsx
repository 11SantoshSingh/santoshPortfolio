import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaPython,
  
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiJavascript,
  SiTailwindcss,
  SiCplusplus,
  SiBootstrap,
  SiHtml5,
  SiCss3
} from "react-icons/si";

import { DiPython } from "react-icons/di";
import {VscCode} from "react-icons/vsc";

import { useTheme } from "../../ThemeContext";

const TechStack = () => {
  const { isPurpleTheme } = useTheme();

  const cardStyle = isPurpleTheme
    ? "black text-white"
    : "bg-[#dce3dc] text-black";

  return (
    <div
      id="TechStack"
      className= {` p-10 md:p-24 transition-colors duration-500  `}
    >
      {/* Heading */}
      <h1
        className={`text-2xl md:text-4xl font-bold mb-12 text-center ${
          isPurpleTheme ? "text-white" : "text-black"
        }`}
      >
        Technical Skills
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {/* Languages */}
        <div className={`p-6 rounded-2xl shadow-lg ${cardStyle}`}>
          <h2 className="text-xl font-semibold mb-4  gap-2">
            💻 Languages
          </h2>
          <div className= {`flex flex-wrap gap-2 `}>
            <Skill icon={<SiCplusplus />} name="C/C++" isPurpleTheme={isPurpleTheme} />
            <Skill icon={<FaJava />} name="Java" isPurpleTheme={isPurpleTheme} />
            <Skill icon={<FaPython />} name="Python" isPurpleTheme={isPurpleTheme} />
            <Skill icon={<SiJavascript />} name="JavaScript" isPurpleTheme={isPurpleTheme} />
          </div>
        </div>

        {/* Frontend */}
        <div className={`p-6 rounded-2xl shadow-lg ${cardStyle}`}>
          <h2 className="text-xl font-semibold mb-4">🎨 Frontend</h2>
          <div className="flex flex-wrap gap-3">
            <Skill icon={<FaReact />} name="React"  isPurpleTheme={isPurpleTheme} />
            <Skill icon={<SiTailwindcss />} name="Tailwind" isPurpleTheme={isPurpleTheme} />
            <Skill icon={<SiBootstrap />} name="Bootstrap" isPurpleTheme={isPurpleTheme} />
            <Skill icon={<SiTailwindcss />} name="Tailwind" isPurpleTheme={isPurpleTheme} />
            <Skill icon={<SiHtml5 />} name="HTML" isPurpleTheme={isPurpleTheme} />
            <Skill icon={<SiCss3 />} name="CSS" isPurpleTheme={isPurpleTheme} />
            
          </div>
        </div>

        {/* Backend */}
        <div className={`p-6 rounded-2xl shadow-lg ${cardStyle}`}>
          <h2 className="text-xl font-semibold mb-4">⚙️ Backend</h2>
          <div className="flex flex-wrap gap-3">
            <Skill icon={<FaNodeJs />} name="Node.js" isPurpleTheme={isPurpleTheme} />
            <Skill icon={<SiMongodb />} name="MongoDB" isPurpleTheme={isPurpleTheme} />
            <Skill icon={<SiPostgresql />} name="PostgreSQL" isPurpleTheme={isPurpleTheme} />
          </div>
        </div>

        {/* Tools */}
        <div className={`p-6 rounded-2xl shadow-lg ${cardStyle}`}>
          <h2 className="text-xl font-semibold mb-4">🛠 Tools</h2>
          <div className="flex flex-wrap gap-3">
            <Skill icon={<FaGitAlt />} name="Git" isPurpleTheme={isPurpleTheme} />
            <Skill icon={<FaGitAlt />} name="GitHub" isPurpleTheme={isPurpleTheme} />
            <Skill icon={<VscCode />} name="VS Code" isPurpleTheme={isPurpleTheme} />
            <Skill icon={<DiPython />} name="Jupyter" isPurpleTheme={isPurpleTheme} />
          </div>
        </div>

      </div>
    </div>
  );
};

/* 🔹 Reusable Skill Badge */
const Skill = ({ icon, name, isPurpleTheme }) => {
  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm shadow-md hover:scale-105 transition-all duration-300 
      ${
        isPurpleTheme
          ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
          : "bg-gradient-to-r from-green-400 to-teal-500 text-white"
      }`}
    >
      <span className="text-lg">{icon}</span>
      {name}
    </div>
  );
};

export default TechStack;