import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="testimonial-item">
            <p className="text-lg">"Liberty National Bank has been a game-changer for my finances."</p>
            <p className="mt-4 font-bold">- John Doe</p>
          </div>
          <div className="testimonial-item">
            <p className="text-lg">"The best banking experience I've ever had."</p>
            <p className="mt-4 font-bold">- Jane Smith</p>
          </div>
          <div className="testimonial-item">
            <p className="text-lg">"Secure, reliable, and always there when I need them."</p>
            <p className="mt-4 font-bold">- Samuel Green</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
