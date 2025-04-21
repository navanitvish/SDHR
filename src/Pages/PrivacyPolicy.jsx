import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10" data-aos="fade-down">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Privacy Policy
          </h1>
          <p className="text-gray-600" data-aos="fade-up">
            <span className="font-medium">Effective Date:</span> 09/10/2023
            <span className="mx-2">|</span>
            <span className="font-medium">Company:</span> SDHR InnoWorks Private Limited
            <span className="mx-2">|</span>
            <span className="font-medium">Email:</span> sdhrinnoworks@gmail.com
          </p>
        </div>
        
        {/* Privacy Policy Content Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8" data-aos="fade-up">
          <div className="space-y-6">
            {/* Section 1 */}
            <div data-aos="fade-right">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                1. Introduction
              </h2>
              <p className="text-gray-700">
                This Privacy Policy explains how <span className="font-semibold">SDHR InnoWorks Private Limited</span> ("we", "our", "us") collects, uses, stores, protects, and shares your personal information when you interact with any of our websites, mobile applications, or services (collectively, "Services").
              </p>
              <p className="text-gray-700 mt-3">
                By accessing or using our Services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>
            
            {/* Section 2 */}
            <div data-aos="fade-right" data-aos-delay="50">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                2. Scope
              </h2>
              <p className="text-gray-700 mb-3">
                This policy applies to all platforms, mobile apps, software products, and websites owned or operated by <span className="font-semibold">SDHR InnoWorks Private Limited</span>, including but not limited to platforms in:
              </p>
              <ul className="list-disc list-inside text-gray-700 pl-2 space-y-1">
                <li>Gaming</li>
                <li>E-commerce</li>
                <li>Payments & Fintech</li>
                <li>Dating & Social</li>
                <li>Productivity & Utility tools</li>
              </ul>
            </div>
            
            {/* Section 3 */}
            <div data-aos="fade-right" data-aos-delay="100">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                3. Information We Collect
              </h2>
              <p className="text-gray-700 mb-3">
                We may collect the following types of information:
              </p>
              
              <div className="ml-4 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">a) Personal Information</h3>
                  <ul className="list-disc list-inside text-gray-700 pl-2 space-y-1 mt-2">
                    <li>Name</li>
                    <li>Phone number</li>
                    <li>Email address</li>
                    <li>Gender</li>
                    <li>Date of birth</li>
                    <li>Government-issued ID (for verification)</li>
                    <li>Payment details (as required)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800">b) Device & Technical Information</h3>
                  <ul className="list-disc list-inside text-gray-700 pl-2 space-y-1 mt-2">
                    <li>IP address</li>
                    <li>Device model, OS, and browser info</li>
                    <li>App version</li>
                    <li>Crash reports</li>
                    <li>Cookies and similar technologies</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800">c) Usage Data</h3>
                  <ul className="list-disc list-inside text-gray-700 pl-2 space-y-1 mt-2">
                    <li>Browsing activity</li>
                    <li>Clickstream data</li>
                    <li>Time spent on platforms</li>
                    <li>Login history</li>
                    <li>In-app actions</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800">d) Location Data</h3>
                  <ul className="list-disc list-inside text-gray-700 pl-2 space-y-1 mt-2">
                    <li>Approximate or precise geolocation (based on permissions)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Section 4 */}
            <div data-aos="fade-right" data-aos-delay="150">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                4. How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-3">
                We use your information to:
              </p>
              <ul className="list-disc list-inside text-gray-700 pl-2 space-y-1">
                <li>Provide, maintain, and improve our services</li>
                <li>Process payments and transactions</li>
                <li>Respond to support requests and inquiries</li>
                <li>Ensure security and fraud prevention</li>
                <li>Comply with legal obligations</li>
                <li>Customize content, offers, and experiences</li>
              </ul>
            </div>
            
            {/* Section 5 */}
            <div data-aos="fade-right" data-aos-delay="200">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                5. Information Sharing
              </h2>
              <p className="text-gray-700 mb-3">
                We do not sell your personal data.
              </p>
              <p className="text-gray-700 mb-3">
                We may share data with:
              </p>
              <ul className="list-disc list-inside text-gray-700 pl-2 space-y-1">
                <li>Third-party vendors and service providers (e.g., cloud hosting, analytics)</li>
                <li>Legal or regulatory bodies when required</li>
                <li>Affiliates, subsidiaries, or partners under NDA</li>
                <li>Payment gateways, KYC, or verification agencies (if applicable)</li>
              </ul>
            </div>
            
            {/* Section 6 */}
            <div data-aos="fade-right" data-aos-delay="250">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                6. Data Storage & Security
              </h2>
              <p className="text-gray-700 mb-3">
                Your data is stored securely on third-party cloud infrastructure (e.g., AWS, Firebase, MongoDB) with encryption protocols in place.
              </p>
              <p className="text-gray-700">
                We implement physical, administrative, and technical safeguards to protect your information.
              </p>
            </div>
            
            {/* Section 7 */}
            <div data-aos="fade-right" data-aos-delay="300">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                7. Your Rights
              </h2>
              <p className="text-gray-700 mb-3">
                You may:
              </p>
              <ul className="list-disc list-inside text-gray-700 pl-2 space-y-1">
                <li>Access or update your personal data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent (where applicable)</li>
                <li>Lodge complaints with a data protection authority</li>
              </ul>
              <p className="text-gray-700 mt-3">
                To make a request, contact: <a href="mailto:sdhrinnoworks@gmail.com" className="text-blue-500 hover:underline">sdhrinnoworks@gmail.com</a>
              </p>
            </div>
            
            {/* Section 8 */}
            <div data-aos="fade-right" data-aos-delay="350">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                8. Children's Privacy
              </h2>
              <p className="text-gray-700">
                We do not knowingly collect personal data from children under the age of 18. If we learn that we have collected such data, we will delete it immediately.
              </p>
            </div>
            
            {/* Section 9 */}
            <div data-aos="fade-right" data-aos-delay="400">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                9. Changes to This Policy
              </h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify users by revising the "Effective Date" and posting updates on our official website or platform.
              </p>
            </div>
            
            {/* Section 10 */}
            <div data-aos="fade-right" data-aos-delay="450">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                10. Contact Us
              </h2>
              <p className="text-gray-700">
                For questions or concerns about this Privacy Policy, contact: <a href="mailto:sdhrinnoworks@gmail.com" className="text-blue-500 hover:underline">sdhrinnoworks@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center text-gray-500 text-sm" data-aos="fade-up">
          <p>Last updated: October 9, 2023</p>
        </div>
      </div>
    </div>
  );
}
