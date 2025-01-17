import React, { useEffect } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  useEffect(() => {
    gsap.fromTo(
      "#animated-navbar",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <nav
      id="animated-navbar"
      className="max-w-7xl mx-auto z-50 flex justify-center px-6 py-4"
    >
      <div className="inline-flex bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full shadow-lg border border-white/20 backdrop-blur-md hover:backdrop-blur-lg transition-all duration-300">
        <div className="flex justify-center items-center py-3 px-8 relative overflow-hidden">
          {/* Subtle gradient overlay for glass effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full"></div>
          
          {/* Company name with text gradient */}
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent tracking-wide relative z-10">
            SDHR InnoWorks
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;