import React, { useEffect } from 'react';
import { Users, Crown, Shield, ChartPie, Star, TrendingUp, Sparkles, ArrowUpRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ShareholdingSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-gray-50 py-14">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full filter blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-medium">
              Ownership Structure
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Equity & Shareholding
            </h2>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Founder Card - Spans 2 columns */}
            <div className="md:col-span-2" data-aos="fade-up" data-aos-delay="100">
              <div className="group h-full bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-purple-100 hover:border-purple-300 transition-all duration-500 hover:shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-purple-200">
                          <img 
                            src="https://plus.unsplash.com/premium_photo-1663933534026-5ae92577a95c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY2fGFldTZyTC1qNmV3fHxlbnwwfHx8fHw%3D" 
                            alt="Yachamaneni Sudheer" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 p-2 bg-purple-100 rounded-lg">
                          <Crown className="w-5 h-5 text-purple-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-gray-900">Yachamaneni Sudheer</h3>
                        <p className="text-purple-600 font-medium">Founder and CEO</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-purple-400 group-hover:text-purple-600 transition-colors" />
                  </div>
                  <div className="flex items-center mb-6 bg-purple-50/80 p-4 rounded-2xl">
                    <ChartPie className="w-6 h-6 text-purple-600 mr-3" />
                    <span className="text-2xl font-bold text-gray-900">99% Equity</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Driving force behind SDHR InnoWorks with visionary leadership and entrepreneurial excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="h-full bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-blue-100 hover:border-blue-300 transition-all duration-500 hover:shadow-lg">
                <div className="flex flex-col h-full">
                  <div className="p-3 bg-blue-100 rounded-2xl w-fit">
                    <Sparkles className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-900">Leadership Focus</h4>
                    <p className="text-gray-600 mt-2">Strategic decision-making with clear vision</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Stakeholder Card */}
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="h-full group bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-blue-100 hover:border-blue-300 transition-all duration-500 hover:shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-blue-200">
                        <img 
                          src="https://plus.unsplash.com/premium_photo-1663933534026-5ae92577a95c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY2fGFldTZyTC1qNmV3fHxlbnwwfHx8fHw%3D" 
                          alt="Vijaya Nirmala" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 p-2 bg-blue-100 rounded-lg">
                        <Star className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-blue-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-bold text-gray-900">Vijaya Nirmala</h3>
                    <p className="text-blue-600 font-medium">Key Stakeholder</p>
                    <div className="mt-4 flex items-center">
                      <ChartPie className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-lg font-semibold text-gray-900">1% Equity</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy Section - Spans 4 columns */}
            <div className="md:col-span-4" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-purple-100 hover:border-purple-300 transition-all duration-500 hover:shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl">
                        <Shield className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 ml-4">Ownership Philosophy</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Our concentrated equity structure ensures focused leadership and clear decision-making, 
                      backed by strong family involvement for long-term stability.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-purple-50/80 rounded-2xl">
                      <TrendingUp className="w-6 h-6 text-purple-600 mb-3" />
                      <span className="text-gray-900 font-medium">Strategic Growth</span>
                    </div>
                    <div className="p-4 bg-blue-50/80 rounded-2xl">
                      <Users className="w-6 h-6 text-blue-600 mb-3" />
                      <span className="text-gray-900 font-medium">Family-Backed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareholdingSection;