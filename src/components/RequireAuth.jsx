import React from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const isAuthenticated = true; // ✅ Replace with real auth check later
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default RequireAuth;
