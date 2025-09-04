import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const ProjectCard = ({ title, main, image, codeUrl }) => {
  const { isPurpleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between h-full max-w-xs sm:max-w-sm md:max-w-md mx-auto transition-colors duration-500 ${
        isPurpleTheme
          ? "bg-[#0c0e19] text-white"
          : "bg-[#e8ece8] text-black border border-gray-300"
      }`}
    >
      <img
        className="w-full h-40 md:h-48 object-cover"
        src={image}
        alt={title}
      />
      <div className="p-4 flex flex-col justify-between h-full">
        <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
        <p
          className={`text-sm md:text-md mb-4 ${
            isPurpleTheme ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {main}
        </p>
        <div className="flex justify-center mt-auto">
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noreferrer"
              className={`mt-2 text-sm md:text-base px-4 py-2 rounded-3xl font-semibold shadow-lg 
                transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:opacity-90
                ${isPurpleTheme ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white" : 
                "bg-gradient-to-r from-green-400 to-teal-500 text-white"}`} // ✅ Gradient button like Home page
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
