import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { useTheme } from "../../ThemeContext"; // ⬅️ added

const Experience = () => {
  const { isPurpleTheme } = useTheme(); // ⬅️ added

  return (
    <div
      id="Experience"
      className={`w-full p-10 md:p-24 text-xl transition-colors duration-500 ${
        isPurpleTheme ? "bg-[#0c0e15] text-white" : "text-black bg-[#b0c3b1]"
      }`} // ⬅️ updated
    >
      <h1 className="text-2xl md:text-4xl font-bold mb-8">Experience</h1>

      {/* Experience List */}
      <div className="space-y-4">
        <div
          className={`w-full flex gap-6 rounded-lg p-4 items-start transition-colors duration-500 ${
            isPurpleTheme
              ? "bg-[#0c0e15] text-white bg-opacity-45"
              : "bg-[#dce3dc] border border-gray-300"
          }`} // ⬅️ updated
        >
          <FaBriefcase
            size={40}
            className={isPurpleTheme ? "text-[#00BFFF]" : "text-blue-600"} // ⬅️ updated
          />
          <div className="text-left">
<a href="https://drive.google.com/drive/folders/136AvFYovKUvE1V0hFD4p7_JsPOAwsxP5" target="_blank" rel="noopener noreferrer">
              <h2 className="text-xl font-semibold">
                Softpro Summer Internship (July 2025 – September 2025)
              </h2>
            </a>
            <p
              className={`text-sm mt-1 ${
                isPurpleTheme ? "text-gray-300" : "text-gray-700"
              }`} // ⬅️ updated
            >
              Internship training on software development tools and
              technologies.
            </p>
            <p
              className={`text-sm mt-2 ${
                isPurpleTheme ? "text-gray-300" : "text-gray-700"
              }`} // ⬅️ updated
            >
              <span className="font-semibold">Skills Learned:</span> HTML, CSS,
              JavaScript, Bootstrap, SQL, Python, NumPy, Pandas, and Machine
              Learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
