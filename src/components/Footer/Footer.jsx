import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-purple-300 to-blue-500 text-white pt-4 pb-4">
      <div className="container mx-auto px-6">
        <div className="border-t border-white/10 pt-8" data-aos="fade-up" data-aos-delay="500">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-black/60">
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