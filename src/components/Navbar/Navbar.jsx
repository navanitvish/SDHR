import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // GSAP Fade-Up Animation on component load
  useEffect(() => {
    // Animate navbar when it comes into view
    gsap.fromTo(
      "#animated-navbar", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <nav 
      id="animated-navbar" 
      className="max-w-7xl mx-auto bg-transparent z-50 flex items-center justify-between px-6 py-4"
    >
      {/* Left: Logo */}
      <div className="flex items-center">
        <img src="/api/placeholder/32/32" alt="SDHR" className="h-8" />
      </div>

      {/* Center: Navigation Links */}
      {/* <div className="hidden md:flex flex-grow justify-center space-x-6">
        <button className="text-gray-800 hover:text-blue-600 font-semibold text-lg">Solutions</button>
        <button className="text-gray-800 hover:text-blue-600 font-semibold text-lg">Platform</button>
        <button className="text-gray-800 hover:text-blue-600 font-semibold text-lg">Customers</button>
        <button className="text-gray-800 hover:text-blue-600 font-semibold text-lg">Company</button>
        <button className="text-gray-800 hover:text-blue-600 font-semibold text-lg">Resources</button>
      </div> */}

      {/* Mobile menu toggle */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 hover:text-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Right: Login and Get Started */}
      {/* <div className="hidden md:flex items-center space-x-4">
        <button className="text-gray-800 hover:text-blue-600 font-semibold text-lg">Login</button>
        <button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-4 py-2 font-semibold text-lg rounded-md hover:bg-indigo-700">
          Get started
        </button>
      </div> */}

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <button className="text-gray-800 hover:text-blue-600 font-semibold text-lg">Solutions</button>
          <button className="text-gray-800 hover:text-blue-600 font-semibold text-lg">Platform</button>
          <button className="text-gray-800 hover:text-blue-600 font-semibold text-lg">Customers</button>
          <button className="text-gray-800 hover:text-blue-600 font-semibold text-lg">Company</button>
          <button className="text-gray-800 hover:text-blue-600 font-semibold text-lg">Resources</button>
          <div className="mt-6 flex flex-col items-center space-y-4">
            <button className="text-gray-800 hover:text-blue-600 font-semibold text-lg">Login</button>
            <button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-4 py-2 font-semibold text-lg rounded-md hover:bg-indigo-700">
              Get started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
