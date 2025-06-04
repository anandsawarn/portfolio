import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="bg-gradient-to-r from-[#465697] to-[#3d4e87] text-white py-10 px-6 md:px-20"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Contact Title */}
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold">Contact</h1>
          <h3 className="text-base md:text-xl font-light mt-2">
            Feel free to reach out!
          </h3>
        </div>

        {/* Contact Links */}
        <ul className="space-y-4 text-sm md:text-lg">
          <li className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-300">
            <MdOutlineEmail size={20} />
            <a
              href="mailto:mailsforanandkumar@gmail.com"
              className="underline-offset-4 hover:underline"
            >
              mailsforanandkumar@gmail.com
            </a>
          </li>

          <li className="flex items-center gap-2 hover:text-blue-300 transition-colors duration-300">
            <CiLinkedin size={20} />
            <a
              href="https://www.linkedin.com/in/anand-kumar-404959237"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline"
            >
              linkedin.com/in/anand-kumar-404959237
            </a>
          </li>

          <li className="flex items-center gap-2 hover:text-pink-300 transition-colors duration-300">
            <FaGithub size={20} />
            <a
              href="https://github.com/anandsawarn"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline"
            >
              github.com/anandsawarn
            </a>
          </li>
        </ul>
      </div>

      {/* Footer bottom */}
      <div className="mt-8 text-center text-xs md:text-sm text-gray-300">
        © {new Date().getFullYear()} Anand Kumar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
