import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const userAuth = true // check user session and update;
  if (!userAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
export default PrivateRoute;
