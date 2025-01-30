import React, { useState, useEffect } from 'react';
import {
  Lightbulb,
  Award,
  Target,
  Rocket,
  Users,
  Brain,
  Sparkles,
  ChevronDown,
  Briefcase,
  Building,
  Shield,
  Search,
  Trophy
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FounderStory = () => {
  const [activeChapter, setActiveChapter] = useState(1);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
      easing: 'ease-in-out'
    });
  }, []);

  const chapters = [
    {
      id: 1,
      title: "Early Business Mindset",
      icon: <Brain className="w-6 h-6" />,
      content: `From a young age, the founder of SDHR InnoWorks Private Limited, Yachamaneni Sudheer, displayed an innate passion for business and innovation. Growing up, there was always a drive to explore opportunities, understand how the world operates, and create something impactful. Despite a middle-class upbringing and limited resources, this ambition to make a difference through business remained unwavering.`,
      animation: "fade-right"
    },
    {
      id: 2,
      title: "Starting the Career",
      icon: <Briefcase className="w-6 h-6" />,
      content: `After completing graduation, the journey began in non-IT roles, both as a permanent and contract employee. This decision wasn't just about employment but a conscious effort to explore how businesses function. During this time, there was a keen focus on understanding operational models, observing how customer behavior influences business decisions, and learning effective money management strategies.`,
      animation: "fade-left"
    },
    {
      id: 3,
      title: "SP Carrier Launchers",
      icon: <Building className="w-6 h-6" />,
      content: `The core idea behind SP Carrier Launchers was to assist intermediate students in their transition to higher education. The business model focused on charging students a small fee to provide career guidance, connecting students with colleges to ensure seamless admissions support, and acting as a bridge between intermediate to B.Tech or degree colleges. While this venture achieved significant success in helping students and colleges alike, the founder felt it wasn't enough to fulfill the bigger dream of creating a transformative impact.`,
      animation: "fade-right"
    },
    {
      id: 4,
      title: "Shifting to IT",
      icon: <Building className="w-6 h-6" />,
      content: `The next phase involved transitioning to a career in IT, driven by the need to explore the dynamic culture of urban corporate settings and advanced business models leveraging technology. While working in IT, the founder launched another venture: Mediating Agency.`,
      animation: "fade-left"
    },
    {
      id: 5,
      title: "Mediating Agency",
      icon: <Users className="w-6 h-6" />,
      content: `The mediating agency was a forward-thinking initiative designed to bridge gaps between customers and local shops. Key highlights included employing local influencers on fixed salaries to promote products and creating a seamless ecosystem for both customers and shop owners. Though this venture saw success and growth, it still left the founder searching for something more impactful and scalable.`,
      animation: "fade-right"
    },
    {
      id: 6,
      title: "The App Revolution",
      icon: <Search className="w-6 h-6" />,
      content: `Observing the evolution of gaming apps, the founder noticed significant trends in companies launching their own apps and the rise of real-money gaming. This sparked extensive research into app development and user behavior, including purchasing apps across various domains and studying user engagement patterns.`,
      animation: "fade-left"
    },
    {
      id: 7,
      title: "Birth of WonByBid",
      icon: <Trophy className="w-6 h-6" />,
      content: `Driven by a vision to solve gaps in the real-money gaming industry, the founder started working on WonByBid, the world's first skill-based bidding platform. The mission was clear: to offer users quick results, ensure responsible gaming practices, and provide a transparent experience. The platform aims to revolutionize the industry with its planned launch in January 2025.`,
      animation: "fade-right"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Enhanced Hero Section */}
      <div className="relative  flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse delay-700"></div>
          <div className="absolute w-64 h-64 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-300 rounded-full blur-3xl opacity-10 animate-pulse delay-500"></div>
        </div>
        
        <div className="relative px-6 py-14 text-center">
          <div 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-lg rounded-full shadow-lg mb-8 hover:shadow-xl transition-all"
            data-aos="zoom-in"
          >
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-purple-900 font-medium">A Visionary's Journey</span>
          </div>
          
          <h1 
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-8"
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            Founder's Journey
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            From Dreams to Innovation: The story of how Yachamaneni Sudheer built SDHR InnoWorks Private Limited and revolutionized the industry.
          </p>
          
          <ChevronDown className="w-8 h-8 mx-auto text-purple-600 animate-bounce" />
        </div>
      </div>

      {/* Enhanced Timeline Section */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="space-y-12">
          {chapters.map((chapter, index) => (
            <div
              key={chapter.id}
              data-aos={chapter.animation}
              data-aos-duration="1000"
              className={`transition-all duration-500 ${
                activeChapter === chapter.id ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
              }`}
              onClick={() => setActiveChapter(chapter.id)}
            >
              <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all cursor-pointer border border-purple-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg text-purple-600 shadow-inner">
                    {chapter.icon}
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {chapter.title}
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {chapter.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Flagship Product Section */}
        <div className="mt-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white shadow-2xl" data-aos="zoom-in">
          <div className="flex items-center gap-4 mb-6">
            <Rocket className="w-8 h-8" />
            <h2 className="text-3xl font-bold">The Flagship Product: WonByBid</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all" data-aos="fade-right">
              <h3 className="text-xl font-semibold mb-4">Launch Timeline</h3>
              <p className="text-white/90">Planned Launch: January 2025</p>
              <p className="text-white/90">WonByBid is set to revolutionize the real-money gaming industry by introducing a world's first skill-based bidding model.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all" data-aos="fade-left">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  <span>Quick Results: Delivering instant outcomes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span>Responsible Gaming: Implementing spending limits</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span>Transparent Rankings: Real-time visibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enhanced Quote Section */}
        <div className="mt-24 text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white shadow-2xl" data-aos="fade-up">
          <blockquote className="text-2xl md:text-3xl italic font-light">
            "Success is not just about achieving milestones; it's all about creating meaningful solutions that empower people and make a difference. At SDHR InnoWorks, we don't just innovate; we build a future where everyone wins."
          </blockquote>
          <div className="mt-8">
            <div className="font-semibold text-xl">Yachamaneni Sudheer</div>
            <div className="text-white/80">Founder & CEO, SDHR InnoWorks Private Limited</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderStory;