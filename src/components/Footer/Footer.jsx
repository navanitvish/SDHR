import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-purple-300 to-blue-500 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col items-center space-y-4">
          {/* Company Info */}
          <h3 className="text-white text-lg font-bold">SDHR InnoWorks</h3>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-white">
            <Link to="/contact" className="hover:underline">Contact Us</Link>
            <Link to="/refund-policy" className="hover:underline">Cancellation & Refund Policy</Link>
            <Link to="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link>
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          </div>

          {/* Copyright */}
          <div className="mt-4 text-center font-medium text-white">
            © {currentYear} SDHR InnoWorks. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
