import React from 'react';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => (
  <div className="min-h-screen bg-black text-white">
    <Navbar />
    <main className="p-4">{children}</main>
  </div>
);

export default Layout;
