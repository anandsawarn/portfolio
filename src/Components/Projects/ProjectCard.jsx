import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import fallbackImg from "../../assets/photo-C8q0KQHG.webp";

const ProjectCard = ({ title, main, demo, source, image }) => {
  return (
    <div className="group w-full max-w-sm bg-[#0c0e19] border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          src={image || fallbackImg} 
          alt={`${title} screenshot`} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <h3 className="text-white text-xl font-bold">{title}</h3>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm md:text-base mb-4 flex-1">{main}</p>
        
        {/* Links */}
        <div className="flex gap-3 mt-auto">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              <FiExternalLink className="text-base" />
              Live Demo
            </a>
          )}
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              <FiGithub className="text-base" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;