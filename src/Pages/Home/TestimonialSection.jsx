import React from 'react';
import { Globe, Target, Users, Lightbulb, ArrowRight, Star, Compass } from 'lucide-react';

const VisionMissionPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-top"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm mb-4">
              <span className="text-slate-600 font-medium">Vision & Mission</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
              Shaping the Future of
              <span className="block text-blue-600">Digital Innovation</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-600">
              Building tomorrow's solutions with purpose, innovation, and commitment to excellence
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="group relative">
            <div className="absolute -inset-px bg-gradient-to-r from-blue-100 to-blue-50 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-sm border border-slate-100 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-sm">
                  <Compass className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                To be a global leader in innovative solutions that empower users and drive transformative societal impact.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                  <Globe className="h-5 w-5 text-blue-600 shrink-0" />
                  <span className="text-slate-700">Global Leadership & Impact</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                  <Users className="h-5 w-5 text-blue-600 shrink-0" />
                  <span className="text-slate-700">User Empowerment</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                  <Star className="h-5 w-5 text-blue-600 shrink-0" />
                  <span className="text-slate-700">Transformative Solutions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group relative">
            <div className="absolute -inset-px bg-gradient-to-r from-slate-100 to-blue-50 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-sm border border-slate-100 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl shadow-sm">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                To deliver user-centric products that bridge gaps across industries, ensuring financial sustainability and societal value.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-1 w-1 bg-slate-700 rounded-full"></div>
                    <h3 className="font-semibold text-slate-900">User-Centric Innovation</h3>
                  </div>
                  <p className="text-slate-600 pl-4">Developing solutions focused on user needs and experiences</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-1 w-1 bg-slate-700 rounded-full"></div>
                    <h3 className="font-semibold text-slate-900">Industry Integration</h3>
                  </div>
                  <p className="text-slate-600 pl-4">Bridging gaps and creating seamless solutions across sectors</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-1 w-1 bg-slate-700 rounded-full"></div>
                    <h3 className="font-semibold text-slate-900">Sustainable Growth</h3>
                  </div>
                  <p className="text-slate-600 pl-4">Building for long-term success and societal impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Committed to Excellence
              </h3>
              <p className="text-lg text-slate-200">
                Our dedication to innovation and value creation drives us to develop solutions that shape the future of digital technology and human interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionPage;