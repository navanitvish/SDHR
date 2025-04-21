import React from 'react';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10" data-aos="fade-down">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Cancellation & Refund Policy
          </h1>
          <p className="text-gray-600" data-aos="fade-up">
            <span className="font-medium">Effective Date:</span> 09/10/2023
            <span className="mx-2">|</span>
            <span className="font-medium">Company:</span> Sdhr InnoWorks Private Limited
          </p>
        </div>
        
        {/* Policy Content Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8" data-aos="fade-up">
          <div className="space-y-6">
            {/* Section 1 */}
            <div data-aos="fade-right">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                1. Overview
              </h2>
              <p className="text-gray-700">
                At <span className="font-semibold">SDHR InnoWorks Private Limited</span>, we strive to offer exceptional digital products and user experiences across our platforms. This Cancellation & Refund Policy outlines the terms for cancellations and refunds applicable to our services.
              </p>
            </div>
            
            {/* Section 2 */}
            <div data-aos="fade-right" data-aos-delay="50">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                2. Current Policy – No Refunds
              </h2>
              <p className="text-gray-700 mb-3">
                As of the effective date of this policy, <span className="font-semibold">all transactions made through our platforms are final and non-refundable</span>. This includes, but is not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 pl-2 space-y-1">
                <li>Subscriptions</li>
                <li>Entry fees for contests, bids, or games</li>
                <li>In-app purchases or wallet top-ups</li>
                <li>Digital products or services delivered instantly</li>
              </ul>
              <p className="text-gray-700 mt-3">
                We encourage users to review all terms and product details before completing a transaction.
              </p>
            </div>
            
            {/* Section 3 */}
            <div data-aos="fade-right" data-aos-delay="100">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                3. Cancellation Policy
              </h2>
              <p className="text-gray-700 mb-3">
                Due to the digital and often real-time nature of our services, <span className="font-semibold">cancellations are not supported</span> once a transaction or participation is confirmed.
              </p>
              <p className="text-gray-700">
                If you believe there has been an unauthorized charge or technical issue, please contact our support team at sdhrinnoworks@gmail.com within 24 hours of the transaction.
              </p>
            </div>
            
            {/* Section 4 */}
            <div data-aos="fade-right" data-aos-delay="150">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                4. Future Refund Eligibility (Subject to Change)
              </h2>
              <p className="text-gray-700 mb-3">
                As we expand our product offerings, some services <span className="font-semibold">may support refunds or partial refunds</span> in specific cases, such as:
              </p>
              <ul className="list-disc list-inside text-gray-700 pl-2 space-y-1">
                <li>Failed delivery of service</li>
                <li>Technical errors resulting in loss of paid content</li>
                <li>Duplicate transactions</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Any such changes will be explicitly mentioned in the product-specific terms at the time of purchase.
              </p>
            </div>
            
            {/* Section 5 */}
            <div data-aos="fade-right" data-aos-delay="200">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                5. Dispute Resolution
              </h2>
              <p className="text-gray-700">
                If you have a concern regarding a transaction, we recommend first reaching out to our customer support. We will make every reasonable effort to investigate and resolve the issue.
              </p>
            </div>
            
            {/* Section 6 */}
            <div data-aos="fade-right" data-aos-delay="250">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                6. Changes to This Policy
              </h2>
              <p className="text-gray-700">
                We reserve the right to amend this Cancellation & Refund Policy as our services evolve. Any updates will be published on our official platforms with the revised effective date.
              </p>
            </div>
            
            {/* Section 7 */}
            <div data-aos="fade-right" data-aos-delay="300">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                7. Contact Us
              </h2>
              <p className="text-gray-700">
                For queries or support, please contact: <a href="mailto:sdhrinnoworks@gmail.com" className="text-blue-500 hover:underline">sdhrinnoworks@gmail.com</a>
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