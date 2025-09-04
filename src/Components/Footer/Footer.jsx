import React, { useContext } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { ThemeContext } from '../../ThemeContext'; // ⬅️ import context

const Footer = () => {
  const { isPurpleTheme } = useContext(ThemeContext); // ⬅️ use context

  return (
    <footer
      id="Footer"
      className={`w-full px-6 py-12 md:px-20 md:py-14 shadow-inner transition-colors 
        ${isPurpleTheme ? 'bg-[#0c0e15] text-white' : 'bg-[#dce3dc] text-black'}`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">
            Contact
          </h1>
          <h3 className="text-sm md:text-lg font-light mt-2">
            Feel free to reach out anytime!
          </h3>
        </div>

        {/* Right Section */}
        <ul className="space-y-4 text-sm md:text-lg text-center md:text-left">
          <li className="flex items-center gap-3">
            <MdOutlineEmail size={22} />
            <a href="mailto:sr320021@gmail.com" className="hover:underline">
              sr320021@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-3">
            <CiLinkedin size={22} />
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Santosh Singh
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FaGithub size={22} />
            <a
              href="https://github.com/11SantoshSingh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              11SantoshSingh
            </a>
          </li>
        </ul>
      </div>

      {/* Theme Toggle Button */}
     

      {/* Bottom text */}
      <div
        className={`text-center mt-10 text-xs md:text-sm pt-6 border-t transition-colors ${
          isPurpleTheme
            ? 'text-gray-400 border-gray-700'
            : 'text-gray-700 border-gray-400'
        }`}
      >
        © {new Date().getFullYear()} Santosh Singh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
