import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg'; // Ensure this path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md h-16 flex items-center p-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto" /> {/* Adjust size */}
        </div>
        
        {/* Mobile menu button */}
        <button
          className="text-gray-800 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        
        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? 'block top-16' : 'hidden '
          } lg:flex lg:items-center lg:w-auto lg:space-x-4 absolute lg:relative  left-0 w-full bg-white lg:bg-transparent shadow-lg lg:shadow-none z-40 lg:z-auto`}
        >
          <Link
            to="/"
            className="block lg:inline-block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded mt-2 lg:mt-0"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block lg:inline-block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded mt-2 lg:mt-0"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block lg:inline-block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded mt-2 lg:mt-0"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
