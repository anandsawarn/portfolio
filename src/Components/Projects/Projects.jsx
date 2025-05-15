import React from "react";
import ProjectCard from "./ProjectCard";
import photoReducerImg from "../../assets/photo-C8q0KQHG.webp";
import todoImg from "../../assets/image.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Photo Reducer"
          main="Advanced Image Processing Tool using JavaScript and component libraries."
          demo="https://image-reducer-alpha.vercel.app/"
          source="https://github.com/anandsawarn/image-reducer"
          image={photoReducerImg}
        />
        <ProjectCard
          title="To-Do List"
          main="A to-do app built with Next.js and styled using component libraries."
          demo="https://todo-list-mu-mauve.vercel.app/"
          source="https://github.com/anandsawarn/TodoList"
          image={todoImg}
        />
        
      </div>
    </div>
  );
};

export default Projects;
