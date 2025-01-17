import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronDown, Users, Target, Rocket, Globe, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Heros = () => {
  const heroRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute rounded-full bg-white" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            animation: `float ${Math.random() * 10 + 5}s infinite`
          }} />
        ))}
      </div>
      <div className="container mx-auto px-6 text-center text-white z-10">
        <h1 className="hero-text text-5xl md:text-7xl font-bold mb-6">SDHR InnoWorks</h1>
        <p className="hero-text text-xl md:text-2xl mb-8">A visionary company committed to creating innovative, user-centric solutions that bridge gaps across industries.</p>
        <p className="hero-text text-lg mb-8">Founded on the principles of hard work, resilience, and creativity</p>
        <button className="hero-text bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all flex items-center mx-auto">
          Discover More <ArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};
