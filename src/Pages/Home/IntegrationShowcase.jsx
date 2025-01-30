import React, { useEffect } from 'react';
import { BarChart3, Users, Clock, Target, History, Gamepad2, TrendingUp, ArrowUpRight } from 'lucide-react';
import AOS from 'aos';

const LeadTrackingDashboard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
        <div 
          data-aos="fade-down"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full"
        >
          <span className="text-blue-600 font-medium">Financial Goals</span>
          <ArrowUpRight className="h-4 w-4 text-blue-600" />
        </div>
        <h1 
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-5xl font-bold text-blue-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Building the Future of Digital Entertainment
        </h1>
        <p 
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Strategic goals and financial projections for SDHR InnoWorks' growth journey
        </p>
      </div>

      {/* Short Term Goals Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div 
          data-aos="fade-right"
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-1 w-16 bg-blue-600 rounded"></div>
          <h2 className="text-3xl font-bold text-gray-900">Short-Term Goals (2025-2026)</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Revenue Target Card */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Revenue Target</h3>
              </div>
              <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">financial year 2025-26</span>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-2">₹2.5 Crores</p>
                <p className="text-gray-600">This goal is based on the anticipated success of WonByBid, leveraging aggressive marketing, responsible gaming practices, and user-centric features.</p>
              </div>
              <div className="space-y-4">
                <p className="font-medium text-gray-800">Success Drivers:</p>
                <div className="grid gap-3">
                  {["Aggressive Marketing Campaigns", "Responsible Gaming Practices", "User-Centric Features"].map((item, idx) => (
                    <div 
                      key={idx}
                      data-aos="fade-left"
                      data-aos-delay={400 + (idx * 100)}
                      className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg"
                    >
                      <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* User Acquisition Card */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">User Acquisition</h3>
              </div>
              <span className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-medium">Year 1</span>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-4xl font-bold text-green-600 mb-2">10 Lakh</p>
                <p className="text-gray-600">Targeting 10 lakh active users in the first year by utilizing a combination of referral programs, influencer partnerships, and organic growth strategies.</p>
              </div>
              <div className="space-y-4">
                <p className="font-medium text-gray-800">Growth Strategy:</p>
                <div className="grid gap-3">
                  {["Strategic Referral Programs", "Influencer Partnerships", "Organic Growth Initiatives"].map((item, idx) => (
                    <div 
                      key={idx}
                      data-aos="fade-left"
                      data-aos-delay={500 + (idx * 100)}
                      className="flex items-center gap-3 bg-green-50 p-3 rounded-lg"
                    >
                      <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Long Term Goals Section */}
      <div className="max-w-7xl mx-auto">
        <div 
          data-aos="fade-right"
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-1 w-16 bg-purple-600 rounded"></div>
          <h2 className="text-3xl font-bold text-gray-900">Long-Term Vision</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: TrendingUp,
              iconClass: "text-red-600",
              bgClass: "bg-red-100",
              title: "Revenue Projections",
              description: "Achieve ₹10 crores annual revenue by 2027 through diversified product offerings and scaling strategies.",
              revenue: "₹10 Crores"
            },

            {
              icon: Users,
              iconClass: "text-purple-600",
              bgClass: "bg-purple-100",
              title: "Expansion of WonByBid",
              description: "Strengthening domestic presence by targeting Tier 2 and Tier 3 cities,Scaling infrastructure to support 1 million daily active users within the first two years"
            },
            {
              icon: Gamepad2,
              iconClass: "text-orange-600",
              bgClass: "bg-orange-100",
              title: "New Product Development",
              description: "Exploregaming apps in other sub-segments like fantasy sports or puzzle games,Diversify into non-gaming apps, including productivity tools or local e-commerce platforms."
            },
                      ].map((item, idx) => (
            <div 
              key={idx}
              data-aos="fade-up"
              data-aos-delay={600 + (idx * 100)}
              className="bg-gradient-to-r from-purple-600/5 to-blue-600/5 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`p-3 ${item.bgClass} rounded-xl w-fit mb-6`}>
                <item.icon className={`h-6 w-6 ${item.iconClass}`} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
              {item.revenue && <p className="text-3xl font-bold text-red-600 mb-2">{item.revenue}</p>}
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadTrackingDashboard;