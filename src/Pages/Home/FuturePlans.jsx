import React, { useEffect } from 'react';
import { Users, Gamepad2, Handshake, Heart, ChevronRight } from 'lucide-react';
import AOS from 'aos';

const FuturePlans = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const plans = [
    {
      title: "Expansion of WonByBid",
      icon: <Users className="h-6 w-6 text-purple-600" />,
      points: [
        "Strengthening domestic presence by targeting Tier 2 and Tier 3 cities",
        "Scaling infrastructure to support 1 million daily active users within the first two years"
      ]
    },
    {
      title: "New Product Development",
      icon: <Gamepad2 className="h-6 w-6 text-purple-600" />,
      points: [
        " Exploregaming apps in other sub-segments like fantasy sports or puzzle games",
        "Diversify into non-gaming apps, including productivity tools or local e-commerce platforms"
      ]
    },
    {
      title: "Partnerships",
      icon: <Handshake className="h-6 w-6 text-purple-600" />,
      points: [
        "Collaborate with influencers, tech firms, and strategic investors to drive growth and scalability"
      ]
    },
    {
      title: "Social Responsibility",
      icon: <Heart className="h-6 w-6 text-purple-600" />,
      points: [
        "Launch campaigns to educate users about responsible gaming practices and financial management"
      ]
    }
  ];

  const animationDirections = ['fade-right', 'fade-left', 'fade-right', 'fade-left'];

  return (

    <section className="relative overflow-hidden bg-gray-50 py-14">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-200/30 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full filter blur-3xl" />
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-12 text-center"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Future Plans
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            data-aos={animationDirections[index]}
            data-aos-delay={200 + index * 100}
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
            
            <div className="relative">
              <div className="flex items-center space-x-4 mb-6">
                <div 
                  className="p-3 bg-purple-50 rounded-lg transform transition-transform duration-300 group-hover:rotate-12"
                >
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 transform transition-all duration-300 group-hover:translate-x-2">
                  {plan.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {plan.points.map((point, pointIndex) => (
                  <li 
                    key={pointIndex} 
                    className="flex items-start space-x-3 group/item"
                    data-aos="fade-up"
                    data-aos-delay={300 + pointIndex * 100}
                  >
                    <ChevronRight className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-600 leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default FuturePlans;