import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const companies = [
  { name: 'Segment', logo: 'https://via.placeholder.com/100x50.png?text=Segment' },
  { name: 'Asana', logo: 'https://via.placeholder.com/100x50.png?text=Asana' },
  { name: 'Intercom', logo: 'https://via.placeholder.com/100x50.png?text=Intercom' },
  { name: 'Gong', logo: 'https://via.placeholder.com/100x50.png?text=Gong' },
  { name: 'HubSpot', logo: 'https://via.placeholder.com/100x50.png?text=HubSpot' }
];

const CompaniesShowcase = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const logos = containerRef.current.children;

      // Fade-up animation for each logo when it enters the viewport
      gsap.fromTo(
        logos,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%', // Trigger when container is 80% into the viewport
            end: 'bottom 20%', // End when container is 20% into the viewport
            toggleActions: 'play none none none'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-transparent overflow-hidden py-16">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-lg md:text-xl text-gray-700">
          Clearbit is behind the world's fastest-growing companies
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div ref={containerRef} className="flex items-center justify-around space-x-8 max-w-7xl mx-auto">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 hover:opacity-75 transition-opacity cursor-pointer "
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesShowcase;
