import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  path: string;
  element: React.ReactNode;
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  path,
  element: Element,
  isAuthenticated,
}) => {
  return isAuthenticated ? (
    <Route path={path} element={Element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
