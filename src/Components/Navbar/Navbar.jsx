import { RiMenu2Line, RiCloseLine, RiMoonLine, RiSunLine } from "@remixicon/react";
import React, { useState } from "react";
import { useTheme } from "../../ThemeContext"; // 🟣 THEME UPDATED

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isPurpleTheme, toggleTheme } = useTheme(); // 🟣 THEME UPDATED

  return (
    <nav
      className={`w-full px-6 py-4 md:px-20 flex items-center justify-between relative z-50 transition-colors duration-500
${isPurpleTheme ? "bg-[#0c0e15] text-white" : "bg-[#dce3dc] text-black"}`}
    >
      {/* Logo */}
      <div className="text-3xl md:text-4xl font-bold">Portfolio</div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-8 font-semibold text-base">
        <li className="hover:text-blue-500 cursor-pointer">
          <a href="#About">About</a>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <a href="#Achievements">Experience</a>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <a href="#Projects">Projects</a>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <a href="#Footer">Contact</a>
        </li>
      </ul>

      {/* Right section: Theme Toggle + Hamburger */}
<div className="flex items-center gap-3 absolute right-6 top-4 md:static md:gap-6">
        {/* Theme Toggle Icon */}
        <div
          className="cursor-pointer text-2xl md:text-3xl"
          onClick={toggleTheme} // 🟣 THEME UPDATED
        >
          {isPurpleTheme ? (
            <RiSunLine className="hover:text-yellow-400 transition-colors" /> // 🟣 THEME UPDATED
          ) : (
<RiMoonLine className="hover:text-black-400 transition-colors" />
          )}
        </div>

        {/* Hamburger Icon (Mobile only) */}
<div className="md:hidden cursor-pointer text-2xl">
          {menuOpen ? (
            <RiCloseLine size={30} onClick={() => setMenuOpen(false)} />
          ) : (
            <RiMenu2Line size={30} onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
className={`${menuOpen ? "flex" : "hidden"
          } flex-col items-center gap-6 absolute top-[70px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-md py-8 rounded-2xl shadow-2xl md:hidden transition-all duration-500
  ${isPurpleTheme
            ? "bg-[#111827]/90 backdrop-blur-lg text-white"
            : "bg-[#dce3dc] backdrop-blur-lg text-black"
          }`}
      >
        <li className="hover:text-blue-500 cursor-pointer">
          <a href="#About" onClick={() => setMenuOpen(false)}>About</a>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <a href="#Experience" onClick={() => setMenuOpen(false)}>Experience</a>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <a href="#Projects" onClick={() => setMenuOpen(false)}>Projects</a>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <a href="#Contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
