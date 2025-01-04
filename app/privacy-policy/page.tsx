import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="text-gray-50 flex-grow min-h-screen mt-28 p-8">
      <h1 className="text-3xl">Privacy Policy</h1>
      <p className="mb-4">Last Updated: 01/01/2025</p>
      <h2 className="text-xl">Introduction</h2>
      <p className="mb-4">
        Welcome to heart & hustle films. Your privacy is critically important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit or interact
        with our website/application.
      </p>
      <h2 className="text-xl">Information We Collect</h2>
      <p className="mb-4">We collect the following types of information:</p>
      <ul className="list-disc px-8 mb-4">
        <li>Personal Information: Information you provide to us directly, such as your name, email address, phone number, or payment details when you sign up, contact us, or make a purchase.</li>
        <li>Usage Data: Information collected automatically, including your IP address, browser type, device information, and browsing behavior.</li>
        <li>Cookies and Tracking Technologies: We use cookies and similar tracking technologies to enhance your experience on our site.</li>
      </ul>

      <h2 className="text-xl">How We Use Your Information</h2>
      <p className="mb-4">We use the information we collect for the following purposes:</p>
      <ul className="list-disc px-8 mb-4">
        <li>To provide and maintain our services.</li>
        <li>To process transactions and send you related information.</li>
        <li>To communicate with you, including responding to inquiries and sending promotional messages.</li>
        <li>To analyze and improve the performance of our website/application.</li>
        <li>To comply with legal obligations.</li>
      </ul>
      <h2 className="text-xl">Sharing Your Information</h2>
      <p className="mb-4">We do not sell or share your personal information with third parties, except in the following circumstances:</p>
      <ul className="list-disc px-8 mb-4">
        <li>With service providers who assist in providing our services (e.g., payment processors, analytics providers).</li>
        <li>When required by law or to protect our legal rights.</li>
        <li>With your consent.</li>
      </ul>
      <h2 className="text-xl">Data Retention</h2>
      <p className="mb-4">We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy unless a longer retention period is required by law.</p>
      <h2 className="text-xl">Your Rights</h2>
      <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information, such as:</p>
      <ul className="list-disc px-8 mb-4">
        <li>Accessing, updating, or deleting your data.</li>
        <li>Opting out of marketing communications.</li>
        <li>Restricting the processing of your data.</li>
      </ul>
      <h2 className="text-xl">Security</h2>
      <p className="mb-4">We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse.</p>
      <h2 className="text-xl">Third-Party Links</h2>
      <p className="mb-4">Our website/application may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites.</p>
      <h2 className="text-xl">Changes to This Privacy Policy</h2>
      <p className="mb-4">We may update this Privacy Policy from time to time. We encourage you to review this page periodically for the latest information.</p>
      <h2 className="text-xl">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please{" "}
        <a className="text-brand" href="/contact">
          contact us
        </a>
        .
      </p>
      <p className="mb-4">Thank you for trusting us with your personal information.</p>
    </div>
  );
};

export default PrivacyPolicy;
