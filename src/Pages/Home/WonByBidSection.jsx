import React from 'react';
import { Rocket, Brain, Award, ArrowRight } from 'lucide-react';

const WonByBidSection = () => {
  return (
    <div className="py-32 bg-gradient-to-b from-white via-purple-50/50 to-blue-50/50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(147,51,234,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div data-aos="fade-right" className="relative z-10">
            {/* <div className="inline-block">
              <span className="bg-gradient-to-r from-purple-200 to-blue-200 text-purple-700 text-sm font-medium px-4 py-1 rounded-full mb-4 inline-block">
                Coming Soon
              </span>
            </div> */}
            
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-8">
              Introducing WonByBid
            </h2>

            <div className="space-y-8">
              {[
                {
                  icon: <Rocket className="w-6 h-6 text-purple-600" />,
                  title: "Revolutionary Gaming",
                  description: "First-of-its-kind skill-based bidding platform changing how people compete and win",
                },
                {
                  icon: <Brain className="w-6 h-6 text-purple-600" />,
                  title: "Smart Protection",
                  description: "Advanced systems ensuring responsible gaming and user safety",
                },
                {
                  icon: <Award className="w-6 h-6 text-purple-600" />,
                  title: "Fair Competition",
                  description: "Transparent ranking system rewarding genuine skill and strategy",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="p-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl shadow-lg shadow-purple-100/50 group-hover:shadow-purple-200/50 transition-all duration-300 group-hover:scale-105">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-purple-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-12 group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105">
              Join Waitlist
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Image Section */}
          <div data-aos="fade-left" className="relative">
            {/* Gradient Blob */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-[2rem] blur-3xl opacity-30 transform rotate-3" />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-[2rem] blur-3xl opacity-30 transform -rotate-3" />
            
            {/* Image Container */}
            <div className="relative rounded-[2rem] overflow-hidden p-2 bg-gradient-to-br from-purple-100 to-blue-100">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm" />
              <img
                src="https://images.unsplash.com/photo-1736532496900-af334a4bce1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D"
                alt="WonByBid Platform"
                className="relative rounded-[1.8rem] w-full object-cover shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">50K+</div>
                    <div className="text-sm text-gray-600">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">95%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">4.9★</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WonByBidSection;