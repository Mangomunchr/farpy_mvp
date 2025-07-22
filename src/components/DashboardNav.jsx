import React from 'react';
import { Link } from 'react-router-dom';

export default function DashboardNav() {
  return (
    <nav className="flex space-x-4 mt-4 text-sm font-medium text-noxo-primary">
      <Link to="/dashboard">🏠 Dashboard</Link>
      <Link to="/vault">🏦 Vault</Link>
      <Link to="/codex">📖 Codex</Link>
    </nav>
  );
}
