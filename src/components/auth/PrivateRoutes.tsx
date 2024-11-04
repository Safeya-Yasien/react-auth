"use client";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { ReactNode } from "react";

const PrivateRoutes = ({ children }: { children: ReactNode }) => {
  const { isAuth } = useAuthContext();
  return isAuth ? <>{children}</> : <Navigate to="/login" />;
};
export default PrivateRoutes;
