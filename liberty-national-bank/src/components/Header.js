import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-navy-blue">Liberty National Bank</h1>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-600 hover:text-navy-blue">Home</a></li>
          <li><a href="#" className="text-gray-600 hover:text-navy-blue">About Us</a></li>
          <li><a href="#" className="text-gray-600 hover:text-navy-blue">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
