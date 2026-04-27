import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import TechStack from "./Components/TechStack/TechStack";
import Contact from "./Components/Contact";

function App() {

  useEffect(() => {
  const container = document.getElementById("shooting-stars");

  if (!container) return;

  const createStar = () => {
  const star = document.createElement("div");
  star.className = "shooting-star";

  const container = document.getElementById("shooting-stars");

  // Start near top
  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight * 0.3;

  // Angle in degrees → convert to radians
  const angleDeg = -45; // try -30, -60 etc
  const angle = (angleDeg * Math.PI) / 180;

  

  const distance = 400 + Math.random() * 200;
  const duration = 600 + Math.random() * 400;

  // Calculate correct movement direction
  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  star.style.left = `${startX}px`;
  star.style.top = `${startY}px`;

  container.appendChild(star);

  star.animate(
    [
      {
        transform: `translate(0, 0) rotate(${angleDeg}deg)`,
        opacity: 1,
      },
      {
        transform: `translate(${moveX}px, ${moveY}px) rotate(${angleDeg}deg)`,
        opacity: 0,
      },
    ],
    {
      duration: duration,
      easing: "linear",
    }
  );

  setTimeout(() => star.remove(), duration);
};

  const interval = setInterval(() => {
    createStar();
  }, 3000 + Math.random() * 400); // random delay

  return () => clearInterval(interval);
}, []);



  const [isPurpleTheme, setIsPurpleTheme] = useState(true);

  const toggleTheme = () => {
    setIsPurpleTheme(!isPurpleTheme);
  };

  return (
    <ThemeContext.Provider value={{ isPurpleTheme, toggleTheme }}>
      <div
        className={` rounded-lg relative min-h-dvh w-full overflow-hidden transition-all duration-500 ${isPurpleTheme ? "bg-black text-white" : "bg-[#b0c3b1] text-black"
          }`}
      >
        {/* 🌌 Stars */}
        {isPurpleTheme && <div className="stars" id="shooting-stars"></div>}
        <div >
          <Navbar />
          <Home />
          <About />
          <TechStack />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
