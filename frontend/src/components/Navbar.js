// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 p-4 text-white">
    <div className="container mx-auto flex justify-between">
      <h1 className="text-lg font-semibold">
        <Link to="/">Flight Booker</Link>
      </h1>
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search Flights</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
