import React from 'react';
import { Navigate } from 'react-router-dom';
interface ProtectedRouteProps {
  children: JSX.Element;
  isAuthenticated: boolean;
  fallbackPath: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, isAuthenticated, fallbackPath }) => {
  return isAuthenticated ? children : <Navigate to={fallbackPath} replace />;
};

export default ProtectedRoute;
