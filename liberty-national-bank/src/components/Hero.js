import React from 'react';

const Hero = () => {
  return (
    <section className="bg-navy-blue text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Experience Modern Banking with Liberty National Bank.</h2>
        <p className="text-lg mb-8">Safe, secure, and smart banking at your fingertips.</p>
        <div className="space-x-4">
          <button className="bg-gold text-navy-blue px-6 py-3 rounded-full font-bold hover:bg-opacity-80">Open Account</button>
          <button className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-navy-blue">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
