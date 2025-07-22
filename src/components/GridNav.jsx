import React from 'react';
import { Link } from 'react-router-dom';

const GridNav = () => (
  <nav className="text-sm text-white bg-black border-b border-yellow-600 p-2 space-x-4">
    <Link to="/dashboard" className="hover:underline">Grid</Link>
    <Link to="/vault" className="hover:underline">Vault</Link>
    <Link to="/map" className="hover:underline">Map</Link>
    <Link to="/codex" className="hover:underline">Codex</Link>
    <Link to="/leaderboard" className="hover:underline">Ranks</Link>
  </nav>
);

export default GridNav;
