import React, { useEffect } from 'react';
import { Globe, Target, Users, Lightbulb, ArrowRight, Star, Compass } from 'lucide-react';
import AOS from 'aos';

const VisionMissionPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-top"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-14 md:py-14">
          <div className="text-center space-y-8">
            <div 
              data-aos="fade-down"
              className="inline-flex items-center rounded-full bg-white px-6 py-2 text-sm mb-4 shadow-md hover:shadow-lg transition-shadow duration-300 border border-purple-100"
            >
              <span className="text-purple-600 font-medium">Vision & Mission</span>
            </div>
            <h1 
              data-aos="fade-up" 
              data-aos-delay="100"
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              Shaping the Future of
              <span className="block bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Digital Innovation
              </span>
            </h1>
            <p 
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-2xl mx-auto text-lg text-gray-600"
            >
              Building tomorrow's solutions with purpose, innovation, and commitment to excellence
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision Card */}
          <div 
            data-aos="fade-right"
            data-aos-delay="300"
            className="group relative"
          >
            <div className="absolute -inset-px bg-gradient-to-r from-purple-200 to-blue-100 rounded-3xl blur-lg opacity-25 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-purple-100 h-full hover:translate-y-[-4px] transition-transform duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl shadow-md">
                  <Compass className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                To be a global leader in innovative solutions that empower users and drive transformative societal impact.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Globe, text: "Global Leadership & Impact" },
                  { icon: Users, text: "User Empowerment" },
                  { icon: Star, text: "Transformative Solutions" }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    data-aos="fade-up"
                    data-aos-delay={400 + (idx * 100)}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl hover:shadow-md transition-shadow duration-300"
                  >
                    <item.icon className="h-5 w-5 text-purple-500 shrink-0" />
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div 
            data-aos="fade-left"
            data-aos-delay="300"
            className="group relative"
          >
            <div className="absolute -inset-px bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl blur-lg opacity-25 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-blue-100 h-full hover:translate-y-[-4px] transition-transform duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl shadow-md">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                To deliver user-centric products that bridge gaps across industries, ensuring financial sustainability and societal value.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "User-Centric Innovation",
                    desc: "Developing solutions focused on user needs and experiences"
                  },
                  {
                    title: "Industry Integration",
                    desc: "Bridging gaps and creating seamless solutions across sectors"
                  },
                  {
                    title: "Sustainable Growth",
                    desc: "Building for long-term success and societal impact"
                  }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    data-aos="fade-up"
                    data-aos-delay={400 + (idx * 100)}
                    className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-1.5 w-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 pl-4">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16">
          <div 
            data-aos="zoom-in"
            data-aos-delay="600"
            className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Committed to Excellence
              </h3>
              <p className="text-lg text-white/90">
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