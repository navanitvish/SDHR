import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  


  return (
    <footer className="bg-gradient-to-br from-purple-300 to-blue-500 text-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col items-center space-y-4">
          {/* Company Info */}
          <h3 className="text-white text-lg font-bold">SDHR InnoWorks</h3>


          {/* Copyright */}
          <div className="mt-4 text-center font-medium">
            © {currentYear} SDHR InnoWorks. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;