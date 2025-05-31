import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiPhone } from "react-icons/fi";
import { FaCode, FaServer, FaWhatsapp } from "react-icons/fa";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";
import resumePDF from "../../assets/resume.pdf";

const Home = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/918789494772?text=Hi%20Anand,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.`, '_blank');
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-20 md:py-28">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 space-y-6 relative z-10"
          >
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-blue-400 font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                <TextChange />
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300">
                Full Stack Developer
              </h2>
              <p className="text-gray-300 text-base md:text-lg max-w-lg">
                I craft exceptional digital experiences with modern web technologies.
                Specializing in responsive, performant applications with clean code architecture.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg shadow-lg shadow-blue-500/20"
              >
                Contact Me
                <FiMail className="text-lg" />
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={resumePDF}
                download="Anand_Kumar_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg border border-gray-700"
              >
                Download CV
                <FiDownload className="text-lg" />
              </motion.a>
            </div>

            <div className="pt-4">
              <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm md:text-base">
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full">
                  <FaCode className="text-blue-400" />
                  <span>React</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full">
                  <FaServer className="text-blue-400" />
                  <span>Node.js</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full">
                  <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </div>
              </div>
            </div>

            <div className="flex gap-5 pt-4">
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://github.com/anandsawarn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl"
                aria-label="GitHub"
              >
                <FiGithub />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://linkedin.com/in/anand-kumar-404959237" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 text-xl"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </motion.a>
              <motion.button 
                whileHover={{ y: -3 }}
                onClick={openWhatsApp}
                className="text-gray-400 hover:text-green-400 text-xl"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Avatar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 flex justify-center relative"
          >
            <div className="relative w-full max-w-xs md:max-w-sm">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-20 animate-pulse"></div>
              <img
                className="w-full h-auto relative z-10"
                src={avatarImg}
                alt="Anand Kumar - Full Stack Developer"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div id="contact" className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Contact Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <motion.a
              whileHover={{ y: -5 }}
              href="mailto:mailsforanandkumar@gmail.com"
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all flex items-center gap-4"
            >
              <div className="p-3 bg-blue-500/10 rounded-full">
                <FiMail className="text-blue-400 text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-400 mt-1 break-all">mailsforanandkumar@gmail.com</p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              whileHover={{ y: -5 }}
              href="tel:+918789494772"
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all flex items-center gap-4"
            >
              <div className="p-3 bg-blue-500/10 rounded-full">
                <FiPhone className="text-blue-400 text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-400 mt-1">+91 8789494772</p>
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.button
              whileHover={{ y: -5 }}
              onClick={openWhatsApp}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500/30 transition-all flex items-center gap-4"
            >
              <div className="p-3 bg-green-500/10 rounded-full">
                <FaWhatsapp className="text-green-400 text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">WhatsApp</h3>
                <p className="text-gray-400 mt-1">Chat directly</p>
              </div>
            </motion.button>

            {/* LinkedIn */}
            <motion.a
              whileHover={{ y: -5 }}
              href="https://linkedin.com/in/anand-kumar-404959237"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all flex items-center gap-4"
            >
              <div className="p-3 bg-blue-500/10 rounded-full">
                <FiLinkedin className="text-blue-400 text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">LinkedIn</h3>
                <p className="text-gray-400 mt-1">anand-kumar-404959237</p>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;