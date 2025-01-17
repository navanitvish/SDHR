import React, { useEffect } from 'react';
import { Lightbulb, Trophy, Target, ChevronRight, ArrowUpRight } from 'lucide-react';
import AOS from 'aos';

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const features = [
    {
      title: "Innovation",
      description: "Every product and service is designed to fill a gap in the market, ensuring both user satisfaction and societal benefit.",
      icon: <Lightbulb className="w-8 h-8 text-purple-500" />,
      bgClass: "from-purple-500/5 to-blue-500/5",
      highlights: ["Market Analysis", "User-Centric Design", "Future-Ready Solutions"]
    },
    {
      title: "Leadership",
      description: "Led by a visionary founder with a deep understanding of business operations, user behavior, and technology.",
      icon: <Trophy className="w-8 h-8 text-purple-500" />,
      bgClass: "from-blue-500/5 to-purple-500/5",
      highlights: ["Strategic Vision", "Industry Expertise", "Proven Track Record"]
    },
    {
      title: "Excellence",
      description: "SDHR InnoWorks combines passion, innovation, and a customer-first approach to deliver transformative solutions.",
      icon: <Target className="w-8 h-8 text-purple-500" />,
      bgClass: "from-purple-500/5 to-blue-500/5",
      highlights: ["Quality Assurance", "Customer Success", "Continuous Improvement"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-100/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center space-y-8">
            <div 
              data-aos="fade-down"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="text-purple-600 font-medium">Welcome to SDHR InnoWorks</span>
              <ChevronRight className="w-4 h-4 text-purple-400" />
            </div>
            
            <h1 
              data-aos="fade-up" 
              data-aos-delay="100" 
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              Building The Future
              <span className="block mt-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Through Innovation
              </span>
            </h1>
            
            <p 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="max-w-2xl mx-auto text-lg text-gray-600"
            >
              We're dedicated to pushing boundaries and creating innovative solutions that make a real difference in the world.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {features.map((feature, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={300 + (index * 100)}
                className={`
                  group relative overflow-hidden
                  bg-gradient-to-br ${feature.bgClass}
                  rounded-2xl p-8
                  border border-white
                  backdrop-blur-md
                  shadow-lg
                  hover:shadow-xl
                  transition-all duration-500
                  hover:border-purple-200
                `}
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-6 h-6 text-purple-400" />
                </div>

                <div className="space-y-6">
                  <div className="p-3 bg-white rounded-xl shadow-md inline-block">
                    {feature.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4">
                    {feature.highlights.map((highlight, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600 group-hover:translate-x-2 transition-transform duration-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-20">
            <div 
              data-aos="zoom-in"
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-purple-500 to-blue-500 shadow-xl"
            >
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-bold text-white">
                  Ready to Transform Your Ideas?
                </h2>
                <p className="text-lg text-white/90">
                  Join us in building innovative solutions that shape the future.
                </p>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full font-medium text-purple-600 hover:bg-purple-50 transition-colors duration-300">
                  Get Started
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;