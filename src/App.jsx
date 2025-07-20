
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Vault from './pages/Vault';
import Landing from './pages/Landing';
import Login from './pages/Login';
import NodeMonk from './pages/NodeMonk';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vault" element={<Vault />} />
        <Route path="/nodemonk" element={<NodeMonk />} />
      </Routes>
    </Router>
  );
}

export default App;
