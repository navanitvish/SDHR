import React from 'react';

export default function SimpleContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600" data-aos="fade-up">
            We're here to help you. Feel free to reach out!
          </p>
        </div>
        
        {/* Contact Information Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8" data-aos="fade-up">
          <div className="space-y-8">
            {/* Email Section */}
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="flex-shrink-0 bg-gradient-to-r from-purple-400 to-blue-400 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800">Email</h3>
                <div className="mt-2 space-y-1">
                  <p className="text-gray-600">General Inquiries & Support:</p>
                  <p className="text-blue-500">support@sdhrinnoworks.com</p>
                  
                  <p className="mt-3 text-gray-600">Business/Partnership Queries:</p>
                  <p className="text-blue-500">business@sdhrinnoworks.com</p>
                </div>
              </div>
            </div>
            
            {/* Address Section */}
            <div className="flex items-start space-x-4" data-aos="fade-right" data-aos-delay="100">
              <div className="flex-shrink-0 bg-gradient-to-r from-purple-400 to-blue-400 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800">Registered Office Address</h3>
                <p className="mt-2 text-gray-600">
                  SDHR InnoWorks Private Limited<br />
                  9/25/1 K K GUNTA, YERPEDU,<br />
                  Thondamanadu, Srikalahasti,<br />
                  Chittoor- 517641, Andhra Pradesh<br />
                  India
                </p>
              </div>
            </div>
            
            {/* Support Hours Section */}
            <div className="flex items-start space-x-4" data-aos="fade-right" data-aos-delay="200">
              <div className="flex-shrink-0 bg-gradient-to-r from-purple-400 to-blue-400 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800">Support Hours</h3>
                <p className="mt-2 text-gray-600">
                  Monday to Saturday<br />
                  10:00 AM to 6:00 PM IST
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Note */}
        <div className="text-center text-gray-500" data-aos="fade-up">
          <p>Thank you for your interest in SDHR InnoWorks. We look forward to hearing from you!</p>
        </div>
      </div>
    </div>
  );
}