import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import TechStack from "./Components/TechStack/TechStack";

function App() {
  const [isPurpleTheme, setIsPurpleTheme] = useState(true);

  const toggleTheme = () => {
    setIsPurpleTheme(!isPurpleTheme);
  };

  return (
    <ThemeContext.Provider value={{ isPurpleTheme, toggleTheme }}>
      <div
        className={`min-h-dvh w-full overflow-hidden transition-all duration-500 ${
          isPurpleTheme ? "bg-black text-white" : "bg-[#b0c3b1] text-black"
        }`}
      >
        <Navbar />
        <Home />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
