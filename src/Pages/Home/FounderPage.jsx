import React, { useEffect } from "react";
import {
  Lightbulb,
  Award,
  Target,
  Rocket,
  Users,
  Building,
  Brain,
  Star,
  Sparkles,
 Code, ShoppingBag, Trophy
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import JourneyDashboard from "./JourneyDashboard";
import WonByBidSection from "./WonByBidSection";

const FounderPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  
  return (
    <div className=" bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Enhanced Hero Section */}
      <div className="relative h-screen overflow-hidden bg-gradient-to-r from-purple-400/10 to-blue-400/10">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute w-96 h-96 top-1/2 right-0 bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute w-64 h-64 bottom-0 left-1/3 bg-indigo-300 rounded-full blur-3xl opacity-20 animate-pulse delay-500"></div>
        </div>

        <div className="relative h-full container mx-auto px-6">
          <div className="h-full flex flex-col justify-center items-center text-center">
            <div
              className="space-y-8 max-w-4xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Enhanced Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-lg rounded-full shadow-lg">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span className="text-purple-900 font-medium tracking-wide">
                  Visionary Leadership
                </span>
              </div>

              {/* Enhanced Title */}
              <h1 className="text-6xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                Founder’s Journey <br />
                From Dreams to Innovation
              </h1>

              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-lg rounded-full shadow-lg">
                {/* <Sparkles className="w-5 h-5 text-purple-600" /> */}
                <span className="text-purple-900 font-medium tracking-wide">
                Early Business Mindset
                </span>
              </div>

              <p className="text-xl md:text-2xl text-gray-700 max-w-8xl mx-auto">
                From a young age, the founder of SDHR InnoWorks Private Limited,
                Yachamaneni Sudheer, displayed an innate passion for business
                and innovation. Growing up, there was always a drive to explore
                opportunities, understand how the world operates, and create
                something impactful. Despite a middle-class upbringing and
                limited resources, this ambition to make a difference through
                business remained unwavering.
              </p>

              {/* Enhanced CTA Button */}
              {/* <div className="pt-8" data-aos="fade-up" data-aos-delay="400">
                <button className="group relative bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                  <span className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-10 transition-opacity"></span>
                  <span className="flex items-center gap-2">
                    Explore the Journey
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div> */}

              {/* Stats Section */}
              {/* <div className="grid grid-cols-2 gap-6 mt-16 max-w-lg mx-auto" data-aos="fade-up" data-aos-delay="600">
                {[
                  { label: "Years Experience", value: "10+" },
                  { label: "Ventures Created", value: "3+" }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-24"
            viewBox="0 0 1440 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 24C240 74 480 74 720 49C960 24 1200 24 1440 49V74H0V24Z"
              fill="white"
              fillOpacity="0.9"
            />
          </svg>
        </div>
      </div>

      {/* Mission Statement */}
     <JourneyDashboard/>
    

      {/* Journey Timeline */}
      

      {/* Rest of the sections remain the same but with updated animations */}
      {/* WonByBid Feature Section */}
      <WonByBidSection/>

      {/* Founder Quote */}
      <div className="py-24 bg-gradient-to-br from-purple-600/95 to-blue-600/95 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative" data-aos="fade-up">
              <div className="absolute -top-8 -left-8 text-8xl text-white/20">
                "
              </div>
              <blockquote className="relative text-2xl md:text-3xl font-medium leading-relaxed text-center italic mb-8">
                Success is not just about achieving milestones; it's about
                creating meaningful solutions that empower people and make a
                difference. At SDHR InnoWorks, we don't just innovate; we build
                a future where everyone wins.
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1736532496900-af334a4bce1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Yachamaneni Sudheer"
                  className="rounded-full border-2 border-white/20 w-28 h-28"
                />
                <div className="text-left">
                  <div className="font-semibold">Yachamaneni Sudheer</div>
                  <div className="text-white/70 text-sm">Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FounderPage;
