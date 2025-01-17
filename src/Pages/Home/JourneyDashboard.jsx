import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Briefcase, Book, Code, Store, Gamepad, ChevronRight } from 'lucide-react';

const journeyData = [
  {
    id: 'early-career',
    title: 'Starting the Career',
    subtitle: 'Exploring non-IT roles to understand business operations',
    icon: Briefcase,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
    points: [
      'Understanding operational models',
      'Observing customer behavior',
      'Learning money management'
    ]
  },
  {
    id: 'sp-launchers',
    title: 'SP Carrier Launchers',
    subtitle: 'Bridging gaps between students and colleges',
    icon: Book,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
    metrics: [
      { label: 'Career Guidance', status: 'Success' },
      { label: 'College Admissions', status: 'Active' }
    ]
  },
  {
    id: 'it-transition',
    title: 'Shifting to IT',
    subtitle: 'Exploring urban corporate culture and advanced business models',
    icon: Code,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
    learnings: [
      'Dynamic corporate culture',
      'Technology-driven business models'
    ]
  },
  {
    id: 'mediating-agency',
    title: 'Mediating Agency',
    subtitle: 'Connecting local shops with customers through influencer marketing',
    icon: Store,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
    features: [
      { title: 'Customers', description: 'One-stop solution for needs' },
      { title: 'Local Shops', description: 'Broader audience reach' }
    ],
    isWide: true
  },
  {
    id: 'wonbybid',
    title: 'WonByBid',
    subtitle: "World's first skill-based bidding platform",
    icon: Gamepad,
    iconColor: 'text-purple-600',
    iconBg: 'bg-gradient-to-r from-purple-100 to-blue-100',
    features: [
      'Quick results',
      'Responsible gaming',
      'Transparent experience'
    ]
  }
];

const progressData = [
  { year: '2020', growth: 30, adoption: 20 },
  { year: '2021', growth: 35, adoption: 25 },
  { year: '2022', growth: 40, adoption: 35 },
  { year: '2023', growth: 45, adoption: 42 },
  { year: '2024', growth: 48, adoption: 47 }
];

const JourneyCard = ({ data }) => {
  const Icon = data.icon;
  
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 group transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-xl ${data.isWide ? 'md:col-span-2' : ''}`}>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 ${data.iconBg} rounded-lg group-hover:rotate-12 transition-transform duration-300`}>
            <Icon className={`w-6 h-6 ${data.iconColor}`} />
          </div>
          <div>
            <h3 className={`text-xl font-semibold group-hover:${data.iconColor} transition-colors duration-300`}>
              {data.title}
            </h3>
            <p className="text-gray-500 text-sm">{data.subtitle}</p>
          </div>
        </div>

        <div className="mt-4">
          {data.points && (
            <ul className="space-y-2">
              {data.points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm hover:translate-x-2 transition-transform duration-300">
                  <div className={`w-1.5 h-1.5 rounded-full ${data.iconColor}`} />
                  {point}
                </li>
              ))}
            </ul>
          )}

          {data.metrics && (
            <div className="space-y-3">
              {data.metrics.map((metric, idx) => (
                <div key={idx} className="flex items-center justify-between hover:translate-x-2 transition-transform duration-300">
                  <div className="text-gray-600 text-sm">{metric.label}</div>
                  <span className="bg-gradient-to-r from-purple-100 to-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full font-medium">
                    {metric.status}
                  </span>
                </div>
              ))}
            </div>
          )}

          {data.features && Array.isArray(data.features) && !data.features[0].title && (
            <div className="space-y-2">
              {data.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {data.features && data.features[0].title && (
            <div className="grid grid-cols-2 gap-4">
              {data.features.map((feature, idx) => (
                <div key={idx} className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 hover:scale-105 transition-transform duration-300">
                  <h4 className="font-medium mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const JourneyDashboard = () => {
  return (
    <div className=" bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            Entrepreneurial Journey
          </h1>
        </div>

        {/* <div className="bg-white rounded-xl p-6 shadow-lg h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={progressData}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="growth" stroke="#9333EA" strokeWidth={2} />
              <Line type="monotone" dataKey="adoption" stroke="#2563EB" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {journeyData.map((journey) => (
            <JourneyCard key={journey.id} data={journey} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyDashboard;