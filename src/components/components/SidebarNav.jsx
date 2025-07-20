
import React from 'react';
import { Link } from 'react-router-dom';

function SidebarNav() {
  return (
    <nav className="w-full md:w-64 bg-zinc-900 text-white p-4 space-y-2">
      <Link className="block hover:text-blue-400" to="/">🏠 Home</Link>
      <Link className="block hover:text-blue-400" to="/dashboard">📊 Dashboard</Link>
      <Link className="block hover:text-blue-400" to="/vault">🔥 Vault</Link>
      <Link className="block hover:text-blue-400" to="/login">🔐 Login</Link>
    </nav>
  );
}

export default SidebarNav;
