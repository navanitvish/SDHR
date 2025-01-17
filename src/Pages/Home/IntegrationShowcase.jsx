import React from 'react';
import { BarChart3, Users, Clock, Target, History, Globe, TrendingUp, ArrowUpRight } from 'lucide-react';

const LeadTrackingDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
          <span className="text-blue-600 font-medium">Financial Goals</span>
          <ArrowUpRight className="h-4 w-4 text-blue-600" />
        </div>
        <h1 className="text-5xl font-bold text-blue-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Building the Future of Digital Entertainment
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Strategic goals and financial projections for SDHR InnoWorks' growth journey
        </p>
      </div>

      {/* Short Term Goals Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-1 w-16 bg-blue-600 rounded"></div>
          <h2 className="text-3xl font-bold text-gray-900">Short-Term Goals (2025-2026)</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Revenue Target Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Revenue Target</h3>
              </div>
              <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">FY 2025-26</span>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-2">₹2.5 Crores</p>
                <p className="text-gray-600">Projected Annual Revenue</p>
              </div>
              <div className="space-y-4">
                <p className="font-medium text-gray-800">Success Drivers:</p>
                <div className="grid gap-3">
                  <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                    <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Aggressive Marketing Campaigns</span>
                  </div>
                  <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                    <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Responsible Gaming Practices</span>
                  </div>
                  <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                    <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">User-Centric Features</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Acquisition Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
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
                <p className="text-gray-600">Target Active Users</p>
              </div>
              <div className="space-y-4">
                <p className="font-medium text-gray-800">Growth Strategy:</p>
                <div className="grid gap-3">
                  <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                    <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">Strategic Referral Programs</span>
                  </div>
                  <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                    <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">Influencer Partnerships</span>
                  </div>
                  <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                    <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">Organic Growth Initiatives</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Long Term Goals Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-1 w-16 bg-purple-600 rounded"></div>
          <h2 className="text-3xl font-bold text-gray-900">Long-Term Vision</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Scaling Operations Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="p-3 bg-purple-100 rounded-xl w-fit mb-6">
              <Globe className="h-6 w-6 text-purple-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Global Expansion</h4>
            <p className="text-gray-600 leading-relaxed">
              Taking WonByBid to international markets after establishing domestic market leadership
            </p>
          </div>

          {/* Diversification Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="p-3 bg-orange-100 rounded-xl w-fit mb-6">
              <Target className="h-6 w-6 text-orange-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Product Portfolio</h4>
            <p className="text-gray-600 leading-relaxed">
              Expanding into gaming, productivity, and entertainment sectors under SDHR InnoWorks
            </p>
          </div>

          {/* Revenue Projections Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="p-3 bg-red-100 rounded-xl w-fit mb-6">
              <TrendingUp className="h-6 w-6 text-red-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">2027 Target</h4>
            <p className="text-3xl font-bold text-red-600 mb-2">₹10 Crores</p>
            <p className="text-gray-600 leading-relaxed">
              Annual revenue through diversified offerings and scaling
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadTrackingDashboard;