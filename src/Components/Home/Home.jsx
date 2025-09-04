import React, { useState } from "react";
import avatarImg from "../../assets/profile.png";
import avatarAltImg from "../../assets/upload.jpg";
import { useTheme } from "../../ThemeContext";

const Home = () => {
  const { isPurpleTheme } = useTheme();
  const [currentImage, setCurrentImage] = useState(avatarImg);

  const toggleImage = () => {
    setCurrentImage((prev) => (prev === avatarImg ? avatarAltImg : avatarImg));
  };

  return (
    <div id="Home" className="relative w-full  overflow-hidden">
      
      {/* 🔹 Overlay for readability */}
      <div
        className={`absolute top-0 left-0 w-full h-full -z-10 transition-colors duration-500 
          ${isPurpleTheme ? "bg-black" : "bg-white"}`} // ✅ Changed: lighter overlay for readability
      ></div>

      {/* 🔹 Content */}
      <div
        className={`relative flex flex-col-reverse md:flex-row w-full justify-between items-center 
          px-6 md:px-20 py-10 transition-colors duration-500
          ${isPurpleTheme ? "text-white" : "text-black"}`} // ✅ Changed: reduced padding to remove extra gap at bottom
      >
        {/* Left Section - Text */}
        <div className="w-full md:w-2/3 md:pt-10">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-snug md:leading-tight tracking-tight">
            Hello, I am <span className="text-blue-400">Santosh Singh</span>
          </h1>
          <p className="text-sm md:text-lg tracking-tight mt-4 max-w-lg">
            Aspiring Full Stack Developer | Passionate Problem Solver.
          </p>
          <a href="mailto:sr320021@gmail.com">
            <button
              className="mt-6 text-white py-2.5 px-6 text-sm md:text-lg font-semibold 
                rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg
                hover:scale-110 hover:shadow-2xl hover:opacity-90 
                transition-all duration-300"
            >
              Contact Me
            </button>
          </a>
        </div>

        {/* Right Section - Avatar */}
        <div
          className="w-full md:w-1/3 flex justify-center cursor-pointer" // ✅ Changed: removed mb-6 md:mb-0 to remove extra gap
          onClick={toggleImage}
        >
          <img
            className="w-40 h-40 md:w-72 md:h-72 object-cover rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
            src={currentImage}
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
