import React, { useEffect } from "react";
import { gsap } from "gsap";
import image from "../../assets/Founder.jpg";

const Hero = () => {
  useEffect(() => {
    // Page load fade-up animation for Hero content
    gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Scroll-triggered fade-up animation for elements
    gsap.fromTo(
      ".fade-up",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".fade-up",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative w-96 h-80 bg-gradient-to-r from-blue-600 to-violet-600 blur-3xl rounded-full animate-spin-slow opacity-40"></div>
        <div className="absolute w-[50%] h-[500px] bg-gradient-to-r from-blue-600 to-violet-600 blur-2xl rounded-full animate-pulse-slow opacity-50 skew-x-6"></div>
      </div>
      {/* Gradient background */}
      <div className="absolute inset-0 " />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(79, 70, 229, 0.1) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 relative hero-content">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-12 max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-left fade-up">
            <h1 className="text-4xl sm:text-6xl font-bold text-navy-900 mb-6">
              SDHR InnoWorks <br /> Private Limited <br /> here.
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              SDHR InnoWorks Private Limited is a visionary company committed to
              creating innovative, user-centric solutions that bridge gaps
              across industries. With a focus on technology and societal impact,
              we deliver transformative products designed for modern challenges.
            </p>
          </div>

          {/* Right Content - Dashboard Card */}
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl transform rotate-3" />
            <img
              src={image}
              alt="Legal Team"
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
