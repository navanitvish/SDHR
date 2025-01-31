import React, { useEffect } from 'react';
import { Wallet, Rocket, BarChart3, Lock, Building, ArrowUpRight, LineChart } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const InvestmentSection = () => {
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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-200/30 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full filter blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-1 mb-4 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
              Financial Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Investment and Financial Commitment
            </h2>
            <p className="text-gray-600">
              Track record of strategic financial management and sustainable growth
            </p>
          </div>

          {/* Main Investment Card */}
          <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 border border-indigo-100 hover:border-indigo-200 transition-all duration-500 shadow-sm hover:shadow-md">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="flex items-center">
                  <div className="p-4 bg-indigo-100 rounded-xl mr-6">
                    <Wallet className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Initial Investment</h3>
                    <div className="flex items-center text-3xl font-bold text-indigo-600">
                      ₹42 Lakhs
                    </div>
                  </div>
                </div>
                {/* <div className="flex items-center p-4 bg-indigo-50 rounded-xl">
                  <LineChart className="w-6 h-6 text-indigo-600 mr-3" />
                  <span className="text-gray-700 font-medium">Personal Capital Investment</span>
                </div> */}
              </div>
            </div>
          </div>

          {/* Financial Status Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Current Status */}
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="h-full bg-white/70 backdrop-blur-lg rounded-2xl p-8 border border-blue-100 hover:border-blue-200 transition-all duration-500 shadow-sm hover:shadow-md">
                <div className="p-3 bg-blue-100 rounded-xl w-fit mb-6">
                  <Lock className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Initial Investment</h4>
                <div className="space-y-4">
                  <div className="flex items-center bg-blue-50 rounded-xl p-4">
                    <span className="text-gray-700">
                      <strong>Bootstrapped:</strong> Maintaining complete control over vision and operations
                    </span>
                  </div>
                  <p className="text-gray-600">
                  So far, the company has invested ₹42 lakhs, reflecting the founder’s personal commitment to building a sustainable and innovative business model.
                  </p>
                </div>
              </div>
            </div>

            {/* Future Strategy */}
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="h-full bg-white/70 backdrop-blur-lg rounded-2xl p-8 border border-blue-100 hover:border-blue-200 transition-all duration-500 shadow-sm hover:shadow-md">
                <div className="p-3 bg-blue-100 rounded-xl w-fit mb-6">
                  <Rocket className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Funding Approach</h4>
                <div className="space-y-4">
                  <div className="flex items-center bg-blue-50 rounded-xl p-4">
                    <Building className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Planning strategic partnerships and potential external investments</span>
                  </div>
                  <p className="text-gray-600">
                  SDHR InnoWorks is currently bootstrapped, ensuring complete control over its vision and operations without external influence.
                  </p>
                  <p className="text-gray-600">
                  Future funding plans include potential strategic partnerships or external investments to scale operations post the launch of the flagship product.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info Card */}
          <div data-aos="fade-up" data-aos-delay="400">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100">
              <div className="flex items-center gap-4">
                <BarChart3 className="w-6 h-6 text-indigo-600" />
                <p className="text-gray-700 font-medium">
                  Committed to sustainable growth and innovation through strategic financial planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;