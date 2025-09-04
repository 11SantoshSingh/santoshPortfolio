import React from "react";
import ProjectCard from "./ProjectCard";

// Example: import images (or use external URLs)
import imgDetector from "../../assets/learningdisabiliy.jpeg";
import imgValley from "../../assets/valleyVerse.png";
import imgUrlShortener from "../../assets/UrlProject.png";
import imgHealix from "../../assets/healix.png";
const Projects = () => {
  const projects = [
    {
      title: "Learning Disability Detector and Classifier",
      main: "Built a predictive model with Python and Scikit-learn...",
      image: imgDetector,
      codeUrl: "https://github.com/11SantoshSingh/Learning_disability_Detector",
    },
    {
      title: "ValleyVerse - Tourism Website",
      main: "Created a full-stack tourism platform...",
      image: imgValley,
      codeUrl: "https://github.com/11SantoshSingh/ValleyVerse",
    },
    {
      title: "Healix - Hospital Management UI",
      main: "Designed frontend interfaces using React and Tailwind CSS...",
      image: imgHealix,
      codeUrl: "https://github.com/11SantoshSingh/Healix",
    },
    {
      // CHANGED: URL Shortener project
      title: "URL Shortener",
      main: "Built a fast URL shortener with Node.js/Express, MongoDB, and a simple React UI. Supports custom aliases, click tracking, and 301 redirects with validation.", // CHANGED [1]
      image: imgUrlShortener, // CHANGED: import this asset or use an external URL string [2]
      codeUrl: "https://github.com/11SantoshSingh/2219559", // CHANGED [1]
    },
  ];

  return (
    <div id="Projects" className="p-6 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center">
        Projects
      </h1>

      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between gap-6">
        {projects.map((p, i) => (
          <div key={i} className="w-full md:w-[48%] lg:w-[32%] mx-auto">
            <ProjectCard
              title={p.title}
              main={p.main}
              image={p.image}
              codeUrl={p.codeUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
