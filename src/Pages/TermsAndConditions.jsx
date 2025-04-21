import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10" data-aos="fade-down">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Terms and Conditions
          </h1>
          <p className="text-gray-600" data-aos="fade-up">
            <span className="font-medium">Effective Date:</span> 09/10/2024
            <span className="mx-2">|</span>
            <span className="font-medium">Company Name:</span> SDHR InnoWorks Private Limited
            <span className="mx-2">|</span>
            <span className="font-medium">Contact Email:</span> sdhrinnoworks@gmail.com
          </p>
        </div>
        
        {/* Terms Content Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8" data-aos="fade-up">
          <div className="space-y-6">
            {/* Section 1 */}
            <div data-aos="fade-right">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700">
                By accessing or using any website, mobile application, product, or service ("Services") developed or owned by <span className="font-semibold">SDHR InnoWorks Private Limited</span>, you ("User") agree to be bound by these Terms and Conditions. If you do not agree, please do not use our Services.
              </p>
            </div>
            
            {/* Section 2 */}
            <div data-aos="fade-right" data-aos-delay="50">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                2. Eligibility
              </h2>
              <p className="text-gray-700 mb-3">
                You must be at least <span className="font-semibold">18 years old</span> to use any of our platforms or products unless otherwise specified. By using our services, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside text-gray-700 pl-2 space-y-1">
                <li>You are legally competent to enter into a binding agreement.</li>
                <li>You are not barred by any law or regulation from using our Services.</li>
              </ul>
            </div>
            
            {/* Section 3 */}
            <div data-aos="fade-right" data-aos-delay="100">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                3. Use of Services
              </h2>
              <p className="text-gray-700 mb-3">
                Users agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 pl-2 space-y-1">
                <li>Use the Services in a lawful and respectful manner.</li>
                <li>Provide accurate and complete information during registration.</li>
                <li>Not engage in activities that are fraudulent, abusive, or harmful to other users or the platform.</li>
                <li>Not attempt to hack, reverse engineer, or exploit any system vulnerabilities.</li>
              </ul>
              <p className="text-gray-700 mt-3">
                SDHR InnoWorks reserves the right to suspend or ban accounts that violate these terms.
              </p>
            </div>
            
            {/* Section 4 */}
            <div data-aos="fade-right" data-aos-delay="150">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                4. Account Responsibility
              </h2>
              <p className="text-gray-700">
                You are responsible for maintaining the confidentiality of your account, login credentials, and all activities under your account. Notify us immediately of any unauthorized use.
              </p>
            </div>
            
            {/* Section 5 */}
            <div data-aos="fade-right" data-aos-delay="200">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                5. Intellectual Property
              </h2>
              <p className="text-gray-700">
                All content, branding, software, designs, and trademarks used across our platforms are the exclusive property of <span className="font-semibold">SDHR InnoWorks Private Limited</span>. Users are not permitted to copy, distribute, or use any part of our IP without written permission.
              </p>
            </div>
            
            {/* Section 6 */}
            <div data-aos="fade-right" data-aos-delay="250">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                6. Payments and Transactions
              </h2>
              <p className="text-gray-700 mb-3">
                If any of our platforms involve payments, transactions, subscriptions, or wallet features:
              </p>
              <ul className="list-disc list-inside text-gray-700 pl-2 space-y-1">
                <li>You agree to pay all applicable fees and taxes.</li>
                <li>Refunds will be handled in accordance with platform-specific policies.</li>
                <li>All transactions are securely processed through authorized gateways.</li>
              </ul>
            </div>
            
            {/* Section 7 */}
            <div data-aos="fade-right" data-aos-delay="300">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                7. User Content
              </h2>
              <p className="text-gray-700 mb-3">
                You may submit content (profiles, chats, media, feedback, etc.) on certain platforms. You:
              </p>
              <ul className="list-disc list-inside text-gray-700 pl-2 space-y-1">
                <li>Retain ownership of your content</li>
                <li>Grant us a non-exclusive, royalty-free license to use it for operational and promotional purposes</li>
                <li>Must ensure your content is lawful, non-defamatory, and appropriate</li>
              </ul>
            </div>
            
            {/* Section 8 */}
            <div data-aos="fade-right" data-aos-delay="350">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                8. Third-Party Links and Services
              </h2>
              <p className="text-gray-700">
                Our services may contain links to or integrations with third-party platforms (e.g., payment gateways, verification partners). We are not responsible for their content or practices and encourage users to review their terms separately.
              </p>
            </div>
            
            {/* Section 9 */}
            <div data-aos="fade-right" data-aos-delay="400">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                9. Limitation of Liability
              </h2>
              <p className="text-gray-700 mb-3">
                SDHR InnoWorks Private Limited shall not be liable for:
              </p>
              <ul className="list-disc list-inside text-gray-700 pl-2 space-y-1">
                <li>Any indirect, incidental, or consequential damages</li>
                <li>Loss of data, revenue, or profits due to use or inability to use the services</li>
                <li>Any user-generated content or third-party actions</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Use of our services is at your sole risk.
              </p>
            </div>
            
            {/* Section 10 */}
            <div data-aos="fade-right" data-aos-delay="450">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                10. Termination
              </h2>
              <p className="text-gray-700">
                We reserve the right to suspend or terminate your access to any of our platforms or services at any time, for any reason, including violations of these Terms.
              </p>
            </div>
            
            {/* Section 11 */}
            <div data-aos="fade-right" data-aos-delay="500">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                11. Amendments
              </h2>
              <p className="text-gray-700">
                We may modify these Terms at any time. Continued use of the services implies acceptance of the updated Terms. Updates will be posted with a revised effective date.
              </p>
            </div>
            
            {/* Section 12 */}
            <div data-aos="fade-right" data-aos-delay="550">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                12. Governing Law
              </h2>
              <p className="text-gray-700">
                These Terms are governed by the laws of <span className="font-semibold">India</span>, and disputes shall be subject to the jurisdiction of the court.
              </p>
            </div>
            
            {/* Section 13 */}
            <div data-aos="fade-right" data-aos-delay="600">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                13. Contact Us
              </h2>
              <p className="text-gray-700">
                For any queries or support, contact: <a href="mailto:sdhrinnoworks@gmail.com" className="text-blue-500 hover:underline">sdhrinnoworks@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center text-gray-500 text-sm" data-aos="fade-up">
          <p>Last updated: October 9, 2024</p>
        </div>
      </div>
    </div>
  );
}