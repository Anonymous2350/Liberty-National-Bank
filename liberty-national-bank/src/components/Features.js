import React from 'react';

const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="feature-item">
            <h3 className="text-xl font-bold mb-2">High-Yield Savings & Checking</h3>
          </div>
          <div className="feature-item">
            <h3 className="text-xl font-bold mb-2">24/7 Digital Banking</h3>
          </div>
          <div className="feature-item">
            <h3 className="text-xl font-bold mb-2">Secure Transfers</h3>
          </div>
          <div className="feature-item">
            <h3 className="text-xl font-bold mb-2">Loans & Credit Solutions</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
