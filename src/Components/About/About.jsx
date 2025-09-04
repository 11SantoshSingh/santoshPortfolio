import React from "react";
import { IoArrowForward } from "react-icons/io5";
import deskpic from "../../assets/deskpic.png"; // Adjust the path if needed
import { useTheme } from "../../ThemeContext";
const About = () => {
  const {isPurpleTheme} = useTheme();
  return (

    <div
      id="About"
          className={`shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-6 md:p-12 transition-colors duration-500 
        ${isPurpleTheme ? "bg-black text-white" : "bg-[#dce3dc] text-black"}`}
    >

      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">About</h2>
      <div className="flex flex-col md:flex-row sm:justify-center md:justify-center sm:items-center md:items-center gap-8">
        {/* Image */}
        <div className={`w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 transition-colors duration-500 
            ${isPurpleTheme ? "border-white" : "border-black"}`} // 🟣 THEME UPDATED
        >
          <img
            className="object-cover w-full h-full  "
            src={deskpic}
            alt="about"
            onError={(e) => console.error("Image load error:", e)}
          />
        </div>
        {/* Info List */}
        <ul className="mt-6 md:mt-0 space-y-4 max-w-xl text-left">
          {/* Frontend */}
          <li className="flex gap-3">
            <IoArrowForward size={30} className="mt-1" />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold">
                Frontend Developer
              </h1>
              <p className="text-sm md:text-md leading-tight">
                Proficient in building responsive UIs with React, Tailwind CSS,
                HTML, and CSS. Developed full-stack interfaces like Healix
                (Hospital UI) and ValleyVerse (Tourism Website).
              </p>
            </div>
          </li>
          {/* Backend */}
          <li className="flex gap-3">
            <IoArrowForward size={30} className="mt-1" />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold">
                Backend Developer
              </h1>
              <p className="text-sm md:text-md leading-tight">
                Experienced in Node.js and Express.js for RESTful APIs.
                Connected MongoDB for dynamic data handling in full-stack
                applications.
              </p>
            </div>
          </li>
          {/* Database */}
          <li className="flex gap-3">
            <IoArrowForward size={30} className="mt-1" />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold">
                Database Handler
              </h1>
              <p className="text-sm md:text-md leading-tight">
                Comfortable with MongoDB, SQL, and Oracle DB. Applied in
                authentication, dashboards, and large dataset storage.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default About;
