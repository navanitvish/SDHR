import React, { useEffect } from 'react';
import { 
  Users, 
  Building, 
  Star, 
  Target, 
  Lightbulb, 
  Calendar, 
  Brain, 
  ArrowRight 
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <footer className="bg-gradient-to-br from-purple-900 to-blue-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Overview */}
          <div className="space-y-4" data-aos="fade-up">
            <h3 className="text-xl font-bold mb-4">SDHR InnoWorks</h3>
            <p className="text-white/70 leading-relaxed">
              Pioneering innovation through strategic solutions and sustainable growth. Building tomorrow's technology today.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Instagram'].map((social, index) => (
                <button 
                  key={index}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  aria-label={social}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Ventures */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-bold mb-4">Our Ventures</h3>
            <ul className="space-y-3">
              {[
                { icon: Users, text: 'SP Carrier Launchers' },
                { icon: Building, text: 'Mediating Agency' },
                { icon: Star, text: 'WonByBid Platform' }
              ].map((item, index) => (
                <li 
                  key={index} 
                  className="hover:text-purple-300 transition-colors"
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                >
                  <a href="#" className="flex items-center gap-2">
                    <item.icon className="w-4 h-4" />
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { icon: Target, text: 'Our Mission' },
                { icon: Lightbulb, text: 'Innovation Lab' },
                { icon: Calendar, text: 'Events & News' },
                { icon: Brain, text: 'Career Opportunities' }
              ].map((item, index) => (
                <li 
                  key={index} 
                  className="hover:text-purple-300 transition-colors"
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                >
                  <a href="#" className="flex items-center gap-2">
                    <item.icon className="w-4 h-4" />
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <button 
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                data-aos="zoom-in"
              >
                Contact Us
              </button>
              <div 
                className="bg-white/10 rounded-xl p-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <p className="text-sm text-white/70">Newsletter Signup</p>
                <div className="flex gap-2 mt-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                  <button className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8" data-aos="fade-up" data-aos-delay="500">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <div>
              © {currentYear} SDHR InnoWorks. All rights reserved.
            </div>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((text, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="hover:text-purple-300 transition-colors"
                  data-aos="fade-left"
                  data-aos-delay={600 + index * 100}
                >
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;