import React from "react";
import ProjectCard from "./ProjectCard";
import photoReducerImg from "../../assets/photo-C8q0KQHG.webp";
import todoImg from "../../assets/image.png";
import fixease from "../../assets/fixease.png";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  const projects = [
    {
      title: "FixEase",
      main: "A home service platform connecting users with professionals. Features dynamic booking for electricians, plumbers, and more. Built with React, Tailwind CSS, Node.js, and MongoDB.",
      demo: "https://fixease.onrender.com/",
      source: "https://github.com/anandsawarn/fixease",
      image: fixease
    },
    {
      title: "Photo Reducer",
      main: "Advanced image processing tool that optimizes and compresses images without significant quality loss. Built with JavaScript and modern component libraries.",
      demo: "https://image-reducer-alpha.vercel.app/",
      source: "https://github.com/anandsawarn/image-reducer",
      image: photoReducerImg
    },
    {
      title: "To-Do List",
      main: "Productive task management app with prioritization features. Built with Next.js and styled using component libraries with local storage persistence.",
      demo: "https://todo-list-mu-mauve.vercel.app/",
      source: "https://github.com/anandsawarn/TodoList",
      image: todoImg
    }
  ];

  return (
    <section id="Projects" className="py-16 px-6 sm:px-12 lg:px-24 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            My <span className="text-blue-400">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my featured projects showcasing different skills and technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              main={project.main}
              demo={project.demo}
              source={project.source}
              image={project.image}
            />
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Projects;