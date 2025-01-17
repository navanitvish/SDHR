import React, { useEffect } from 'react';
import { Lightbulb, Trophy, Target, ChevronRight,  } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const features = [
    {
      title: "Innovation",
      description: "Every product and service is designed to fill a gap in the market, ensuring both user satisfaction and societal benefit.",
      icon: <Lightbulb className="w-12 h-12 text-purple-500" />,
      bgClass: "from-purple-500/10 to-blue-500/10"
    },
    {
      title: "Leadership",
      description: "Led by a visionary founder with a deep understanding of business operations, user behavior, and technology.",
      icon: <Trophy className="w-12 h-12 text-purple-500" />,
      bgClass: "from-blue-500/10 to-purple-500/10"
    },
    {
      title: "Commitment to Excellence",
      description: "SDHR InnoWorks combines passion, innovation, and a customer-first approach to deliver transformative solutions.",
      icon: <Target className="w-12 h-12 text-purple-500" />,
      bgClass: "from-purple-500/10 to-blue-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-24" data-aos="fade-up">
          <div className="inline-block px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full mb-6">
            <span className="text-purple-600 font-semibold flex items-center gap-2">
              Welcome to SDHR InnoWorks <ChevronRight className="w-4 h-4" />
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-8">
            What Sets SDHR InnoWorks Apart?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're dedicated to pushing boundaries and creating innovative solutions that make a real difference in the world.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div 
              key={index} 
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`
                relative overflow-hidden
                bg-gradient-to-br ${feature.bgClass}
                backdrop-blur-sm
                rounded-2xl p-8
                border border-white/20
                shadow-xl
                transform hover:scale-105 transition-all duration-300
                hover:shadow-2xl hover:border-purple-500/30
              `}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 rounded-2xl bg-white/80 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-purple-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24" data-aos="fade-up">
          {[
            { label: "Years Experience", value: "10+" },
            { label: "Projects Completed", value: "500+" },
            { label: "Team Members", value: "50+" },
            { label: "Client Satisfaction", value: "98%" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div> */}

        {/* Call to Action */}
        {/* <div className="text-center" data-aos="fade-up">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Experience Innovation?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join us in shaping the future of technology and business solutions.
            </p>
            <button className="group bg-white text-purple-600 font-semibold py-3 px-8 rounded-full hover:bg-purple-50 transition-all duration-300 flex items-center gap-2 mx-auto">
              Get Started Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutPage;