import React from 'react';

const Welcome: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100"> {/* Increased top padding */}
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-blue-600">Welcome to QRSolutions</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
          QRSolutions is a cutting-edge QR code management service platform, designed for businesses like real estate agents and car sales, but suitable for any product requiring fast, accessible information. Our white label solution enables custom QR codes linking directly to your websites, streamlining sales processes and enhancing customer engagement by providing instant access to vital information with a quick scan.
        </p>
      </div>
    </section>
  );
};

export default Welcome;