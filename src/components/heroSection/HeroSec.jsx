// // import React from "react";

// // const Hero = () => (
// //   <div className="relative bg-transparent  overflow-hidden">
// //     {/* Animated Blur Layers */}
// //     <div className="absolute inset-0 flex justify-center items-center">
// //       <div className="relative w-80 h-80 bg-gradient-to-r from-blue-600 to-violet-600 blur-3xl rounded-full animate-spin-slow opacity-40"></div>
// //       <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-600 to-violet-600 blur-2xl rounded-full animate-pulse-slow opacity-50"></div>
// //     </div>

// //     {/* Hero Content */}
// //     <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24">
// //       <div className="flex flex-wrap lg:flex-nowrap justify-between items-center max-w-7xl mx-auto">
// //         {/* Left Content */}
// //         <div className="w-full lg:w-1/3 mb-10 lg:mb-0 z-10 text-left">
// //           <h1 className="text-3xl sm:text-6xl font-bold text-navy-900 mb-6">
// //             Predictable growth starts here.
// //           </h1>
// //           <p className="text-base sm:text-lg text-gray-700 mb-8">
// //             Clearbit gives you full context on every person and company in your
// //             target market so you can reach and convert more customers, more
// //             predictably.
// //           </p>
// //           <button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md text-sm sm:text-lg font-medium hover:bg-indigo-700">
// //             Get Started
// //           </button>
// //         </div>

// //       </div>
// //     </div>
// //   </div>
// // );

// // export default Hero;

// import React from "react";
// import CompaniesShowcase from "../../Pages/Home/CompaniesShowcase";

// const Hero = () => {
//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       <div className="absolute inset-0 flex justify-center items-center">
//         <div className="relative w-96 h-80 bg-gradient-to-r from-blue-600 to-violet-600 blur-3xl rounded-full animate-spin-slow opacity-40"></div>
//         <div className="absolute w-[50%] h-[500px] bg-gradient-to-r from-blue-600 to-violet-600 blur-2xl rounded-full animate-pulse-slow opacity-50 skew-x-6"></div>
//       </div>
//       {/* Gradient background */}
//       <div className="absolute inset-0 " />

//       {/* Grid pattern overlay */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle, rgba(79, 70, 229, 0.1) 1px, transparent 1px)",
//           backgroundSize: "30px 30px",
//         }}
//       />

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 relative">
//         <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-12 max-w-7xl mx-auto">
//           {/* Left Content */}
//           <div className="w-full lg:w-1/2 text-left">
//             <h1 className="text-4xl sm:text-6xl font-bold text-navy-900 mb-6">
//               SDHR InnoWorks <br /> Private Limited <br /> here.
//             </h1>
//             <p className="text-lg text-gray-700 mb-8 max-w-xl">
//               SDHR InnoWorks Private Limited is a visionary company committed to
//               creating innovative, user-centric solutions that bridge gaps
//               across industries. With a focus on technology and societal impact,
//               we deliver transformative products designed for modern challenges.
//             </p>
//             <button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors">
//               Get Started
//             </button>
//           </div>

//           {/* Right Content - Dashboard Card */}
//           {/* Right Content */}
//           <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10">
//             <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
//               <img
//                 src="https://plus.unsplash.com/premium_photo-1663933534026-5ae92577a95c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY2fGFldTZyTC1qNmV3fHxlbnwwfHx8fHw%3D"
//                 alt=""
//                 className="h-72 w-full object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Company logos */}
//         <div className="mt-24 text-center">
//           <CompaniesShowcase />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useEffect } from "react";
import { gsap } from "gsap";
import CompaniesShowcase from "../../Pages/Home/CompaniesShowcase";

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
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", scrollTrigger: {
        trigger: ".fade-up",
        start: "top 80%",
        toggleActions: "play none none none"
      }}
    );
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
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
            <button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Right Content - Dashboard Card */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10 fade-up">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
              <img
                src="https://plus.unsplash.com/premium_photo-1663933534026-5ae92577a95c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY2fGFldTZyTC1qNmV3fHxlbnwwfHx8fHw%3D"
                alt="Dashboard"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Company logos */}
        <div className="mt-24 text-center fade-up">
          <CompaniesShowcase />
        </div>
      </div>
    </div>
  );
};

export default Hero;
