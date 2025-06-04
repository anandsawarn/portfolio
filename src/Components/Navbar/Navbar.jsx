import React, { useState } from 'react';
import { RiMenu2Line, RiCloseLine } from '@remixicon/react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 shadow-md">
      <div className="flex justify-between items-center text-white px-6 py-4 md:px-20">
        {/* Logo */}
        <span className="text-2xl font-extrabold tracking-wider">Portfolio</span>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 text-lg font-medium">
          {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="transition-all duration-300 hover:underline underline-offset-8 hover:text-yellow-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-base font-medium bg-black/60 text-white backdrop-blur-md rounded-b-xl">
          {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
