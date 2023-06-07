import React, { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoutes = () => {

const checkAuth = () => {
  const auth = localStorage.getItem("user");
  if (auth) {
    return true;
  } else {
    return true;
  }
};
  return checkAuth() ? <Outlet /> : <Navigate to="/" />;
};

export default AuthRoutes;
