import React from "react";
import ProjectCard from "./ProjectCard";

// Example: import images (or use external URLs)
import imgDetector from "../../assets/learningdisabiliy.jpeg";
import imgValley from "../../assets/ValleyVerse.png";
import imgUrlShortener from "../../assets/UrlProject.png";
import imgHealix from "../../assets/healix.png";
const Projects = () => {
  const projects = [
    {
      title: "Learning Disability Detector and Classifier",
      main: "Built a predictive model with Python and Scikit-learn...",
      image: imgDetector,
      codeUrl: "https://github.com/11SantoshSingh/Learning_disability_Detector",
      liveUrl: "https://example.com/learning-disability-detector"
    },
    {
      title: "MealMate",
      main: "Smart Food Inventory & Meal Management System",
      image: imgValley,
      codeUrl: "https://github.com/11SantoshSingh/ArmyFoodSystem",
      liveUrl: "https://messmate-app-five.vercel.app/"
    },
    {
      title: "SkillForgeAI ",
      main: "AI Powered SaaS Platform",
      image: imgHealix,
      codeUrl: "https://github.com/11SantoshSingh/skillForgeAi",
      liveUrl: "https://skill-forge-ai-sand.vercel.app/"
    },
    {
      title: "URL Shortener",
      main: "Built a fast URL shortener with Node.js/Express, MongoDB, and a simple React UI. Supports custom aliases, click tracking, and 301 redirects with validation.",
      image: imgUrlShortener,
      codeUrl: "https://github.com/11SantoshSingh/2219559",
      liveUrl: "https://urlshortener.com"
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
              liveUrl={p.liveUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
