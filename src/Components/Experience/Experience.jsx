import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis, SiMongodb } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        {/* Skills Section */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedis color="#FF4438" size={50} />
          </span>
        </div>

        {/* Projects Section */}
        <div className="flex flex-col gap-6 mt-6 md:mt-0">
          <div className="bg-slate-950 bg-opacity-45 rounded-lg p-4 text-white">
            <h2 className="text-lg font-semibold">Laundry at Doorstep</h2>
            <p className="text-sm font-thin">Jan 2025 – Feb 2025</p>
            <ul className="text-sm p-2 list-disc list-inside">
              <li>Full-stack web app using MERN stack</li>
              <li>Implemented authentication and order management</li>
              <li>Designed modern UI with Tailwind CSS</li>
            </ul>
          </div>

          <div className="bg-slate-950 bg-opacity-45 rounded-lg p-4 text-white">
            <h2 className="text-lg font-semibold">Image Reducer</h2>
            <p className="text-sm font-thin">Feb 2025 – Mar 2025</p>
            <ul className="text-sm p-2 list-disc list-inside">
              <li>React-based image compression tool</li>
              <li>Supports JEE Main format with preset DPI and resolution</li>
              <li>Used MongoDB for storing image metadata</li>
            </ul>
          </div>

          <div className="bg-slate-950 bg-opacity-45 rounded-lg p-4 text-white">
            <h2 className="text-lg font-semibold">PC Game Price Comparison</h2>
            <p className="text-sm font-thin">Dec 2024 – Jan 2025</p>
            <ul className="text-sm p-2 list-disc list-inside">
              <li>Python CLI app using CheapShark API</li>
              <li>Secure login system with password recovery</li>
              <li>Compares game prices from multiple platforms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
