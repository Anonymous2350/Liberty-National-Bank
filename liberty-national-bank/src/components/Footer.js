import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy-blue text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Liberty National Bank</h3>
          <p>Your trusted financial partner.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Links</h3>
          <ul>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <form>
            <input type="email" placeholder="Your email" className="w-full p-2 rounded-l-md" />
            <button type="submit" className="bg-gold text-navy-blue px-4 py-2 rounded-r-md">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
