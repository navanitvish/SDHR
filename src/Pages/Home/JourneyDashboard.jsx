import React, { useEffect } from 'react';
import { LineChart, Line, XAxis, ResponsiveContainer } from 'recharts';
import { Briefcase, Book, Code, Store, Gamepad } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const JourneyDashboard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const chartData = [
    { name: '2020', value1: 30, value2: 20 },
    { name: '2021', value1: 35, value2: 25 },
    { name: '2022', value1: 40, value2: 35 },
    { name: '2023', value1: 45, value2: 42 },
    { name: '2024', value1: 48, value2: 47 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8" data-aos="fade-down">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            Entrepreneurial Journey
          </h1>
          <div className="flex gap-4">
            <div 
              className="bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <p className="text-sm text-gray-500">Projects</p>
              <p className="text-2xl font-bold text-purple-600">5</p>
            </div>
            <div 
              className="bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <p className="text-sm text-gray-500">Years</p>
              <p className="text-2xl font-bold text-blue-600">4+</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Early Career Card */}
          <div 
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform hover:-translate-y-1 group"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            {/* Card content remains the same */}
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                  <Briefcase className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold group-hover:text-purple-600 transition-colors duration-300">Starting the Career</h2>
              </div>
              <p className="text-gray-500 text-sm">
                Exploring non-IT roles to understand business operations
              </p>
            </div>
            <div className="mt-4">
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 group-hover:scale-150 transition-transform duration-300"></div>
                  Understanding operational models
                </li>
                <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 group-hover:scale-150 transition-transform duration-300"></div>
                  Observing customer behavior
                </li>
                <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 group-hover:scale-150 transition-transform duration-300"></div>
                  Learning money management
                </li>
              </ul>
            </div>
          </div>

          {/* SP Carrier Launchers Card */}
          <div 
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform hover:-translate-y-1 group"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            {/* Card content remains the same */}
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                  <Book className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors duration-300">SP Carrier Launchers</h2>
              </div>
              <p className="text-gray-500 text-sm">
                Bridging gaps between students and colleges
              </p>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between hover:translate-x-2 transition-transform duration-300">
                <div className="text-gray-600 text-sm">Career Guidance</div>
                <span className="bg-gradient-to-r from-purple-100 to-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full font-medium group-hover:scale-110 transition-transform duration-300">Success</span>
              </div>
              <div className="flex items-center justify-between hover:translate-x-2 transition-transform duration-300">
                <div className="text-gray-600 text-sm">College Admissions</div>
                <span className="bg-gradient-to-r from-purple-100 to-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full font-medium group-hover:scale-110 transition-transform duration-300">Active</span>
              </div>
            </div>
          </div>

          {/* IT Transition Card */}
          <div 
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform hover:-translate-y-1 group"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            {/* Card content remains the same */}
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors duration-300">Shifting to IT</h2>
              </div>
              <p className="text-gray-500 text-sm">
                Exploring urban corporate culture and advanced business models
              </p>
            </div>
            <div className="mt-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4">
              <h3 className="font-medium mb-2">Key Learnings</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:scale-150 transition-transform duration-300"></div>
                  Dynamic corporate culture
                </li>
                <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:scale-150 transition-transform duration-300"></div>
                  Technology-driven business models
                </li>
              </ul>
            </div>
          </div>

          {/* Mediating Agency Card */}
          <div 
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform hover:-translate-y-1 group md:col-span-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* Card content remains the same */}
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                  <Store className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold group-hover:text-purple-600 transition-colors duration-300">Mediating Agency</h2>
              </div>
              <p className="text-gray-500 text-sm">
                Connecting local shops with customers through influencer marketing
              </p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 hover:scale-105 transition-transform duration-300">
                <h4 className="font-medium mb-2">Customers</h4>
                <p className="text-sm text-gray-600">One-stop solution for needs</p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 hover:scale-105 transition-transform duration-300">
                <h4 className="font-medium mb-2">Local Shops</h4>
                <p className="text-sm text-gray-600">Broader audience reach</p>
              </div>
            </div>
          </div>

          {/* WonByBid Card */}
          <div 
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform hover:-translate-y-1 group"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {/* Card content remains the same */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                    <Gamepad className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-xl font-semibold group-hover:text-purple-600 transition-colors duration-300">WonByBid</h2>
                </div>
                <span className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-600 text-xs px-3 py-1 rounded-full font-medium group-hover:scale-110 transition-transform duration-300">Coming Soon</span>
              </div>
              <p className="text-gray-500 text-sm">
                World's first skill-based bidding platform
              </p>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-sm text-gray-600">Quick results</span>
              </div>
              <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-sm text-gray-600">Responsible gaming</span>
              </div>
              <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-sm text-gray-600">Transparent experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyDashboard;