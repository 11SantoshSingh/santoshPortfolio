import { RiMenu2Line, RiCloseLine, RiMoonLine, RiSunLine } from "@remixicon/react";
import React, { useState } from "react";
import { useTheme } from "../../ThemeContext"; // 🟣 THEME UPDATED

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isPurpleTheme, toggleTheme } = useTheme(); // 🟣 THEME UPDATED

  return (
    <nav
      className={`w-full px-6 py-4 md:px-20 flex items-center justify-between relative z-50 transition-colors duration-500
        ${isPurpleTheme ? "bg-black text-white" : "bg-[#b0c3b1] text-black"}`} // 🟣 THEME UPDATED
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
      <div className="flex flex-col-reverse md:flex-row items-end md:items-center gap-2 absolute right-6 top-4 md:static md:gap-6">
        
        {/* Theme Toggle Icon */}
        <div
          className="cursor-pointer text-2xl md:text-3xl"
          onClick={toggleTheme} // 🟣 THEME UPDATED
        >
          {isPurpleTheme ? (
            <RiSunLine className="hover:text-yellow-400 transition-colors" /> // 🟣 THEME UPDATED
          ) : (
            <RiMoonLine className="hover:text-blue-400 transition-colors" /> // 🟣 THEME UPDATED
          )}
        </div>

        {/* Hamburger Icon (Mobile only) */}
        <div className="md:hidden">
          {menuOpen ? (
            <RiCloseLine size={30} onClick={() => setMenuOpen(false)} />
          ) : (
            <RiMenu2Line size={30} onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col absolute top-[80px] left-0 w-full px-8 py-6 text-xl font-semibold md:hidden transition-colors border border-rounded duration-500
          ${isPurpleTheme ? "bg-[#111827] text-white" : "bg-[#dce3dc] text-black"}`} // 🟣 THEME UPDATED
      >
        <li className="my-2 hover:text-blue-500 cursor-pointer">
          <a href="#About" onClick={() => setMenuOpen(false)}>About</a>
        </li>
        <li className="my-2 hover:text-blue-500 cursor-pointer">
          <a href="#Experience" onClick={() => setMenuOpen(false)}>Experience</a>
        </li>
        <li className="my-2 hover:text-blue-500 cursor-pointer">
          <a href="#Projects" onClick={() => setMenuOpen(false)}>Projects</a>
        </li>
        <li className="my-2 hover:text-blue-500 cursor-pointer">
          <a href="#Footer" onClick={() => setMenuOpen(false)}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
