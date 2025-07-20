import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-black text-white p-4 flex justify-center space-x-6 border-b border-gray-800">
    <Link to="/" className="hover:text-yellow-300">Grid</Link>
    <Link to="/map" className="hover:text-yellow-300">Map</Link>
    <Link to="/vault" className="hover:text-yellow-300">Vault</Link>
    <Link to="/codex" className="hover:text-yellow-300">Codex</Link>
  </nav>
);

export default Navbar;
