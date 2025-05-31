import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { FaCode, FaServer, FaMobileAlt, FaShieldAlt } from "react-icons/fa";

const About = () => {
  return (
    <section id="About" className="py-16 px-6 sm:px-12 lg:px-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Passionate developer with expertise in building full-stack applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Professional Summary */}
          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Professional Summary</h3>
            <p className="text-gray-300 mb-6">
              Full Stack Developer with experience in building scalable web applications
              using modern technologies. Specialized in MERN stack development with
              a focus on clean code, performance optimization, and user experience.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-gray-700 px-3 py-2 rounded-lg">
                <FaCode className="text-blue-400" />
                <span>Frontend</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-700 px-3 py-2 rounded-lg">
                <FaServer className="text-blue-400" />
                <span>Backend</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-700 px-3 py-2 rounded-lg">
                <FaMobileAlt className="text-blue-400" />
                <span>Responsive</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-700 px-3 py-2 rounded-lg">
                <FaShieldAlt className="text-blue-400" />
                <span>Security</span>
              </div>
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="space-y-6">
            <div className="flex gap-4 bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-colors">
              <div className="text-blue-400 mt-1">
                <IoArrowForward size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
                <p className="text-gray-300">
                  Developed FixEase, an on-demand home service platform using MERN stack.
                  Built RESTful APIs, JWT authentication, and dynamic service management.
                </p>
                <ul className="mt-2 text-sm text-gray-400 list-disc list-inside">
                  <li>Scalable Node.js backend with Express</li>
                  <li>React frontend with Tailwind CSS</li>
                  <li>MongoDB database design</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-colors">
              <div className="text-blue-400 mt-1">
                <IoArrowForward size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Web Developer</h3>
                <p className="text-gray-300">
                  Designed responsive UIs with React and Tailwind CSS. Focused on
                  component architecture, state management, and performance optimization.
                </p>
                <ul className="mt-2 text-sm text-gray-400 list-disc list-inside">
                  <li>Mobile-first responsive design</li>
                  <li>Reusable component library</li>
                  <li>Performance optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mt-12 bg-gray-800 p-8 rounded-xl border border-gray-700">
          <h3 className="text-xl font-bold mb-6 text-blue-400">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h4 className="font-medium mb-2">Frontend</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>React.js</li>
                
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Backend</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>REST APIs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Tools</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>Git/GitHub</li>
                <li>VS Code</li>
                <li>Postman</li>
                <li>Docker</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Other</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>Responsive Design</li>
                <li>JWT Authentication</li>
                <li>Performance Optimization</li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;